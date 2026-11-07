import React, { useState, useMemo } from 'react';
import { ApprovalsStatsGrid } from './ApprovalsStatsGrid';
import { ApprovalsTabs } from './ApprovalsTabs';
import { ApprovalsTable } from './ApprovalsTable';
import { ApprovalsStat } from '../../../types/catererApprovals.types';
import { useCatererApprovals } from '../../../contexts/CatererApprovalsContext';

export const ApprovalsLayout: React.FC = () => {
    const { applications } = useCatererApprovals();
    const [activeTab, setActiveTab] = useState<string>('Pending');

    const stats: ApprovalsStat[] = [
        { label: 'Pending Approvals', value: '12', subValue: '3 new today' },
        { label: 'Active Caterers', value: '156', trend: { type: 'up', value: '12%' }, subValue: 'vs last month' },
        { label: 'Total Revenue (YTD)', value: '₹2.4M', trend: { type: 'up', value: '8.4%' }, subValue: 'vs last year' }
    ];

    const filteredApplications = useMemo(() => {
        if (activeTab === 'All') return applications;
        return applications.filter(app => app.status.toLowerCase() === activeTab.toLowerCase());
    }, [activeTab, applications]);

    const counts = useMemo(() => {
        return {
            'All': applications.length,
            'Pending': applications.filter(app => app.status === 'pending').length,
            'Active': applications.filter(app => app.status === 'active').length,
            'Rejected': applications.filter(app => app.status === 'rejected').length,
        };
    }, [applications]);

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
