import { useState } from 'react';
import { UsersHeader } from '../../components/users/UsersHeader';
import { UsersToolbar } from '../../components/users/UsersToolbar';
import { UsersTable } from '../../components/users/UsersTable';
import { TablePagination } from '../../components/users/TablePagination';
import { mockUsers } from '../../components/users/mockData';

export function UsersPage() {
    const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const paginatedUsers = mockUsers.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    const handleSelectUser = (id: string) => {
        setSelectedUserIds((prev) =>
            prev.includes(id) ? prev.filter(userId => userId !== id) : [...prev, id]
        );
    };

    const handleSelectAll = () => {
        if (selectedUserIds.length === mockUsers.length) {
            setSelectedUserIds([]); // Deselect all
        } else {
            setSelectedUserIds(mockUsers.map(u => u.id)); // Select all
        }
    };

    return (
        <div className="flex flex-col w-full h-full animate-fade-in relative max-w-[1600px] mx-auto pb-10 gap-6">
            <UsersHeader />
            <UsersToolbar />
            <UsersTable
                users={paginatedUsers}
                selectedUserIds={selectedUserIds}
                onSelectUser={handleSelectUser}
                onSelectAll={handleSelectAll}
            />
            <TablePagination
                totalRows={mockUsers.length}
                currentPage={currentPage}
                rowsPerPage={rowsPerPage}
                onPageChange={setCurrentPage}
                onRowsPerPageChange={(rows) => {
                    setRowsPerPage(rows);
                    setCurrentPage(1); // Reset to first page when changing page size
                }}
            />
        </div>
    );
}
