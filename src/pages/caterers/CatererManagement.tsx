import { CatererHeader } from '../../components/caterers/CatererHeader';
import { TabNavigation, FilterToolbar } from '../../components/caterers/TabToolbar';
import { CatererDataTable } from '../../components/caterers/CatererDataTable';
import { TablePagination } from '../../components/users/TablePagination'; // Reusing generic pagination
import { mockCaterers } from '../../components/caterers/catererMockData';
import { useState } from 'react';
import { TabState } from '../../types/caterers';

export function CatererManagementPage() {
    const [activeTab, setActiveTab] = useState<TabState>('Approved');

    // Filter mock data purely for visual toggling based on tab
    const filteredCaterers = mockCaterers.filter(caterer => {
        if (activeTab === 'Approved') return caterer.status === 'active';
        if (activeTab === 'Pending Review') return caterer.status === 'review';
        return caterer.status === 'archived';
    });

    return (
        <div className="flex flex-col w-full h-full animate-fade-in relative max-w-[1600px] mx-auto pb-10 gap-6">

            <CatererHeader />

            <div className="flex flex-col gap-4">
                <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
                <FilterToolbar />
            </div>

            <CatererDataTable caterers={filteredCaterers} />

            <TablePagination totalRows={filteredCaterers.length} />

        </div>
    );
}
