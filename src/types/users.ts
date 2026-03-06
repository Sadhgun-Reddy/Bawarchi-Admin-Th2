export interface User {
    id: string;
    name: string;
    email: string;
    avatarUrl?: string;
    role: 'Admin' | 'Caterer' | 'Customer' | 'Vendor';
    status: 'active' | 'pending' | 'inactive' | 'suspended' | 'banned';
    lastActive: string;
    joinedDate: string;
}

export interface UsersTableProps {
    users: User[];
    selectedUserIds: string[];
    onSelectUser: (id: string) => void;
    onSelectAll: () => void;
}

export interface UserFilters {
    query: string;
    role: string | 'all';
    status: string | 'all';
}

export interface UserDetails {
    id: string;
    name: string;
    email: string;
    phone: string;
    registrationDate: string;
    lastLogin: {
        date: string;
        ip: string;
    };
    avatarUrl?: string;
    status: 'active' | 'suspended';
    role: string;
}

export interface BookingHistory {
    id: string;
    event: string;
    cuisine: string;
    date: string;
    budget: string;
    status: string;
}

export interface SupportTicket {
    id: string;
    title: string;
    description: string;
    priority: 'high' | 'medium' | 'low';
    status: string;
    timestamp: string;
}
