import { useState } from 'react';
import { UsersHeader } from '../../components/users/UsersHeader';
import { UsersToolbar } from '../../components/users/UsersToolbar';
import { UsersTable } from '../../components/users/UsersTable';
import { TablePagination } from '../../components/users/TablePagination';
import { mockUsers } from '../../components/users/mockData';

export function UsersPage() {
    const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);

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
                users={mockUsers}
                selectedUserIds={selectedUserIds}
                onSelectUser={handleSelectUser}
                onSelectAll={handleSelectAll}
            />
            <TablePagination totalRows={97} />
        </div>
    );
}
