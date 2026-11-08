import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuApplication, ModerationStat } from '../types/menuModeration.types';

const MODERATION_STATS: ModerationStat[] = [
    { label: 'Avg Review Time', value: '2.4h', trend: '-18%', icon: 'clock' },
    { label: 'Pending Items', value: '42', icon: 'list-todo' },
    { label: 'Approval Rate', value: '94.2%', trend: '+2.1%', icon: 'percent-circle' },
];

const MOCK_APPLICATIONS: MenuApplication[] = [
    {
        id: 'MNU-9021',
        name: 'Premium Wedding Feast',
        thumbnailUrl: 'IMG',
        catererName: 'Spice of India',
        category: 'Wedding',
        itemsCount: 42,
        submittedDate: 'Today, 10:30 AM',
        status: 'Pending Menus'
    },
    {
        id: 'MNU-9020',
        name: 'Corporate Lunch Box',
        thumbnailUrl: 'IMG',
        catererName: 'Royal Feast',
        category: 'Corporate',
        itemsCount: 15,
        submittedDate: 'Today, 09:15 AM',
        status: 'Pending Menus'
    },
    {
        id: 'MNU-9019',
        name: 'Summer Gala Buffet',
        thumbnailUrl: 'IMG',
        catererName: 'Bawarchi Bros',
        category: 'Events',
        itemsCount: 28,
        submittedDate: 'Yesterday, 04:20 PM',
        status: 'Pending Menus'
    },
    {
        id: 'MNU-9018',
        name: 'Plant-Based Extravaganza',
        thumbnailUrl: 'IMG',
        catererName: 'Green Leaf Co',
        category: 'Vegan',
        itemsCount: 35,
        submittedDate: 'Yesterday, 02:10 PM',
        status: 'Pending Menus'
    },
    {
        id: 'MNU-9017',
        name: 'Autumn Harvest Specials',
        thumbnailUrl: 'IMG',
        catererName: 'Delhi Darbar',
        category: 'Seasonal',
        itemsCount: 20,
        submittedDate: 'Oct 24, 2023',
        status: 'Pending Menus'
    },
    {
        id: 'MNU-9016',
        name: 'Basic Sandwich Platters',
        thumbnailUrl: 'IMG',
        catererName: 'Quick Bites',
        category: 'Corporate',
        itemsCount: 8,
        submittedDate: 'Oct 23, 2023',
        status: 'Approved Archive'
    },
];

interface MenuModerationContextType {
    stats: ModerationStat[];
    applications: MenuApplication[];
    updateApplicationStatus: (id: string, status: MenuApplication['status']) => void;
}

const MenuModerationContext = createContext<MenuModerationContextType | undefined>(undefined);

export const MenuModerationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [stats] = useState<ModerationStat[]>(() => {
        const stored = localStorage.getItem('menu_moderation_stats');
        return stored ? JSON.parse(stored) : MODERATION_STATS;
    });

    const [applications, setApplications] = useState<MenuApplication[]>(() => {
        const stored = localStorage.getItem('menu_applications');
        return stored ? JSON.parse(stored) : MOCK_APPLICATIONS;
    });

    useEffect(() => {
        localStorage.setItem('menu_moderation_stats', JSON.stringify(stats));
    }, [stats]);

    useEffect(() => {
        localStorage.setItem('menu_applications', JSON.stringify(applications));
    }, [applications]);

    const updateApplicationStatus = (id: string, status: MenuApplication['status']) => {
        setApplications(prev => prev.map(a => a.id === id ? { ...a, status } : a));
    };

    return (
        <MenuModerationContext.Provider value={{ stats, applications, updateApplicationStatus }}>
            {children}
        </MenuModerationContext.Provider>
    );
};

export const useMenuModerationContext = () => {
    const context = useContext(MenuModerationContext);
    if (!context) {
        throw new Error('useMenuModerationContext must be used within a MenuModerationProvider');
    }
    return context;
};
