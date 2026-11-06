import { CatererHeader } from '../../components/caterers/CatererHeader';
import { TabNavigation, FilterToolbar } from '../../components/caterers/TabToolbar';
import { CatererDataTable } from '../../components/caterers/CatererDataTable';
import { TablePagination } from '../../components/users/TablePagination'; // Reusing generic pagination
import { mockCaterers } from '../../components/caterers/catererMockData';
import { useState } from 'react';
import { TabState } from '../../types/caterers';

export function CatererManagementPage() {
    const [activeTab, setActiveTab] = useState<TabState>('Approved');
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    // Filter mock data purely for visual toggling based on tab
    const filteredCaterers = mockCaterers.filter(caterer => {
        if (activeTab === 'Approved') return caterer.status === 'active';
        if (activeTab === 'Pending Review') return caterer.status === 'review';
        return caterer.status === 'archived';
    });

    const paginatedCaterers = filteredCaterers.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    return (
        <div className="flex flex-col w-full h-full animate-fade-in relative max-w-[1600px] mx-auto pb-10 gap-6">

            <CatererHeader />

            <div className="flex flex-col gap-4">
                <TabNavigation activeTab={activeTab} setActiveTab={(tab) => {
                    setActiveTab(tab);
                    setCurrentPage(1); // Reset page on tab change
                }} />
                <FilterToolbar />
            </div>

            <CatererDataTable caterers={paginatedCaterers} />

            <TablePagination
                totalRows={filteredCaterers.length}
                currentPage={currentPage}
                rowsPerPage={rowsPerPage}
                onPageChange={setCurrentPage}
                onRowsPerPageChange={(rows) => {
                    setRowsPerPage(rows);
                    setCurrentPage(1);
                }}
            />

        </div>
    );
}
