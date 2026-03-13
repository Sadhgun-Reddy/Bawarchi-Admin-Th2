import React, { useState } from 'react';
import { ModerationHeader } from './ModerationHeader';
import { ModerationStatsGrid } from './ModerationStatsGrid';
import { ModerationTabs } from './ModerationTabs';
import { ModerationTable } from './ModerationTable';
import { MenuApplication, ModerationStat } from '../../../types/menuModeration.types';

// Mock Data
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

export const ModerationLayout: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Pending Menus');

    // Filter mock data dynamically based on the active tab
    const filteredApplications = MOCK_APPLICATIONS.filter(app => app.status === activeTab);
    const pendingCount = MOCK_APPLICATIONS.filter(app => app.status === 'Pending Menus').length;

    return (
        <div className="flex flex-col w-full min-h-screen pb-12">
            <ModerationHeader />
            <ModerationStatsGrid stats={MODERATION_STATS} />

            <div className="card-surface p-6 rounded-3xl shadow-stripe dark:border-slate-800 dark:bg-slate-900 border border-transparent">
                <ModerationTabs
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    pendingCount={pendingCount}
                />

                <div key={activeTab}> {/* Force re-mount on tab change to trigger stagger animations easily */}
                    <ModerationTable applications={filteredApplications} />
                </div>
            </div>
        </div>
    );
};
