import React, { useState } from 'react';
import { ModerationHeader } from './ModerationHeader';
import { ModerationStatsGrid } from './ModerationStatsGrid';
import { ModerationTabs } from './ModerationTabs';
import { ModerationTable } from './ModerationTable';
import { useMenuModerationContext } from '../../../contexts/MenuModerationContext';

export const ModerationLayout: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Pending Menus');
    const { stats, applications } = useMenuModerationContext();

    const filteredApplications = applications.filter(app => app.status === activeTab);
    const pendingCount = applications.filter(app => app.status === 'Pending Menus').length;

    return (
        <div className="flex flex-col w-full min-h-screen pb-12">
            <ModerationHeader />
            <ModerationStatsGrid stats={stats} />

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
