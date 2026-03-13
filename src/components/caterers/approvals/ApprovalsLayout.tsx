import React, { useState, useMemo } from 'react';
import { ApprovalsStatsGrid } from './ApprovalsStatsGrid';
import { ApprovalsTabs } from './ApprovalsTabs';
import { ApprovalsTable } from './ApprovalsTable';
import { CatererApplication, ApprovalsStat } from '../../../types/catererApprovals.types';

// Mock Data matching the screenshot / specifications
const MOCK_APPLICATIONS: CatererApplication[] = [
    { id: 'APP-1042', businessName: 'Spice Route Banquet', ownerName: 'Rajesh Kumar', location: 'Navi Mumbai', experience: '5 Years', submittedDate: 'Today, 10:30 AM', status: 'pending' },
    { id: 'APP-1041', businessName: 'The Golden Ladle', ownerName: 'Anita Sharma', location: 'Andheri West', experience: '8 Years', submittedDate: 'Today, 09:15 AM', status: 'pending' },
    { id: 'APP-1040', businessName: 'Tandoor Nights', ownerName: 'Vikram Singh', location: 'Bandra', experience: '3 Years', submittedDate: 'Yesterday', status: 'pending' },
    { id: 'APP-1039', businessName: 'Royal Treats', ownerName: 'Pooja Desai', location: 'Thane', experience: '12 Years', submittedDate: 'Yesterday', status: 'active' },
    { id: 'APP-1038', businessName: 'Fresh Bites Catering', ownerName: 'Mohammed Ali', location: 'Colaba', experience: '1 Year', submittedDate: 'Oct 24, 2023', status: 'active' },
    { id: 'APP-1037', businessName: 'Gourmet Express', ownerName: 'Neha Mehta', location: 'Powai', experience: '6 Years', submittedDate: 'Oct 23, 2023', status: 'rejected' },
];

export const ApprovalsLayout: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('Pending');

    const stats: ApprovalsStat[] = [
        { label: 'Pending Approvals', value: '12', subValue: '3 new today' },
        { label: 'Active Caterers', value: '156', trend: { type: 'up', value: '12%' }, subValue: 'vs last month' },
        { label: 'Total Revenue (YTD)', value: '₹2.4M', trend: { type: 'up', value: '8.4%' }, subValue: 'vs last year' }
    ];

    const filteredApplications = useMemo(() => {
        if (activeTab === 'All') return MOCK_APPLICATIONS;
        return MOCK_APPLICATIONS.filter(app => app.status.toLowerCase() === activeTab.toLowerCase());
    }, [activeTab]);

    const counts = useMemo(() => {
        return {
            'All': MOCK_APPLICATIONS.length,
            'Pending': MOCK_APPLICATIONS.filter(app => app.status === 'pending').length,
            'Active': MOCK_APPLICATIONS.filter(app => app.status === 'active').length,
            'Rejected': MOCK_APPLICATIONS.filter(app => app.status === 'rejected').length,
        };
    }, []);

    return (
        <div className="w-full flex flex-col">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-text-primary tracking-tight">Caterer Approvals</h1>
                <p className="text-text-secondary mt-1">Review and manage incoming vendor applications.</p>
            </div>

            <ApprovalsStatsGrid stats={stats} />

            <div className="flex flex-col flex-grow">
                <ApprovalsTabs
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    counts={counts}
                />

                <ApprovalsTable applications={filteredApplications} />
            </div>
        </div>
    );
};
