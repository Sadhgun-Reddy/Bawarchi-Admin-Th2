import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserDetails, BookingHistory } from '../types/users';
import { mockUsers } from '../components/users/mockData';
import { mockUserDetails, mockUserBookings } from '../components/users/userDetailMockData';

interface UsersContextType {
    users: User[];
    userDetails: UserDetails;
    userBookings: BookingHistory[];
    updateUserStatus: (id: string, status: User['status']) => void;
    deleteUser: (id: string) => void;
}

const UsersContext = createContext<UsersContextType | undefined>(undefined);

export const UsersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [users, setUsers] = useState<User[]>(() => {
        const stored = localStorage.getItem('users_list');
        return stored ? JSON.parse(stored) : mockUsers;
    });

    const [userDetails] = useState<UserDetails>(() => {
         const stored = localStorage.getItem('user_details');
         return stored ? JSON.parse(stored) : mockUserDetails;
    });

    const [userBookings] = useState<BookingHistory[]>(() => {
         const stored = localStorage.getItem('user_bookings');
         return stored ? JSON.parse(stored) : mockUserBookings;
    });

    useEffect(() => {
        localStorage.setItem('users_list', JSON.stringify(users));
    }, [users]);

    const updateUserStatus = (id: string, status: User['status']) => {
        setUsers(prev => prev.map(u => u.id === id ? { ...u, status } : u));
    };

    const deleteUser = (id: string) => {
        setUsers(prev => prev.filter(u => u.id !== id));
    };

    return (
        <UsersContext.Provider value={{ users, userDetails, userBookings, updateUserStatus, deleteUser }}>
            {children}
        </UsersContext.Provider>
    );
};

export const useUsersContext = () => {
    const context = useContext(UsersContext);
    if (!context) {
        throw new Error('useUsersContext must be used within a UsersProvider');
    }
    return context;
};
