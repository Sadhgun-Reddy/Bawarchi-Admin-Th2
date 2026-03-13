import React, { useState } from 'react';
import { ComplaintsHeader } from './ComplaintsHeader';
import { ComplaintsStatsGrid } from './ComplaintsStatsGrid';
import { ManagementTabs } from './ManagementTabs';
import { ComplaintsToolbar } from './ComplaintsToolbar';
import { ComplaintsTable } from './ComplaintsTable';
import { Complaint, ComplaintStat } from '../../../types/catererComplaints.types';

// Mock Data
const COMPLAINT_STATS: ComplaintStat[] = [
    { label: 'Total Complaints', value: '142', trend: '-2.4%', icon: 'file-text' },
    { label: 'Open Issues', value: '28', trend: '+New', icon: 'alert-circle' },
    { label: 'Resolved (7d)', value: '86', trend: '+14.2%', icon: 'check-circle' },
    { label: 'Avg Resolution', value: '4.5h', trend: '-1.2h', icon: 'clock' },
];

const MOCK_COMPLAINTS: Complaint[] = [
    {
        id: 'TKT-1082',
        caterer: { name: 'Spice of India', tier: 'Premium Tier', logo: 'SI' },
        customer: { name: 'Rahul Sharma', email: 'rahul.s@example.com' },
        issueType: 'Delayed Delivery',
        date: 'Today, 10:30 AM',
        status: 'open'
    },
    {
        id: 'TKT-1081',
        caterer: { name: 'Royal Feast', tier: 'Standard Tier', logo: 'RF' },
        customer: { name: 'Priya Patel', email: 'priya.p@example.com' },
        issueType: 'Food Quality Issue',
        date: 'Today, 09:15 AM',
        status: 'in-progress'
    },
    {
        id: 'TKT-1080',
        caterer: { name: 'Bawarchi Bros', tier: 'Premium Tier', logo: 'BB' },
        customer: { name: 'Amit Kumar', email: 'amit.k@example.com' },
        issueType: 'Missing Items',
        date: 'Yesterday, 04:20 PM',
        status: 'resolved'
    },
    {
        id: 'TKT-1079',
        caterer: { name: 'Tandoor Nights', tier: 'Basic Tier', logo: 'TN' },
        customer: { name: 'Sneha Gupta', email: 'sneha.g@example.com' },
        issueType: 'Packaging Issue',
        date: 'Yesterday, 02:10 PM',
        status: 'open'
    },
    {
        id: 'TKT-1078',
        caterer: { name: 'Delhi Darbar', tier: 'Standard Tier', logo: 'DD' },
        customer: { name: 'Vikas Singh', email: 'vikas.s@example.com' },
        issueType: 'Wrong Order',
        date: 'Oct 24, 2023',
        status: 'resolved'
    },
];

export const ComplaintsPageLayout: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Complaints');

    return (
        <div className="flex flex-col w-full min-h-screen pb-12">
            <ComplaintsHeader />
            <ComplaintsStatsGrid stats={COMPLAINT_STATS} />

            <div className="card-surface p-6 rounded-3xl shadow-stripe-card dark:border-slate-800 dark:bg-slate-900 border border-transparent">
                <ManagementTabs activeTab={activeTab} onTabChange={setActiveTab} />

                {/* We generally only show the table and toolbar when on the Complaints tab for this view */}
                {activeTab === 'Complaints' ? (
                    <div className="animate-fade-in">
                        <ComplaintsToolbar />
                        <ComplaintsTable complaints={MOCK_COMPLAINTS} />
                    </div>
                ) : (
                    <div className="py-20 text-center text-text-secondary dark:text-slate-500 animate-fade-in">
                        Content for {activeTab} is not implemented in this phase.
                    </div>
                )}
            </div>
        </div>
    );
};
