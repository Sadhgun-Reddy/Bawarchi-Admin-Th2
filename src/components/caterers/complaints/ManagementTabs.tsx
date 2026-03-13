import React from 'react';
import {
    Building2,
    LayoutDashboard,
    MessageSquareWarning,
    Star
} from 'lucide-react';

interface ManagementTabsProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

const TABS = [
    { id: 'Overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'Active Caterers', label: 'Active Caterers', icon: Building2 },
    { id: 'Complaints', label: 'Complaints', icon: MessageSquareWarning },
    { id: 'Reviews', label: 'Reviews', icon: Star },
];

export const ManagementTabs: React.FC<ManagementTabsProps> = ({ activeTab, onTabChange }) => {
    return (
        <div className="border-b border-border mb-6">
            <div className="flex space-x-2 sm:space-x-8 overflow-x-auto scroller-hide">
                {TABS.map((tab) => {
                    const isActive = activeTab === tab.id;
                    const Icon = tab.icon;

                    return (
                        <button
                            key={tab.id}
                            onClick={() => onTabChange(tab.id)}
                            className={`
                flex items-center gap-2 py-4 px-2 sm:px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-all
                ${isActive
                                    ? 'border-accent text-accent'
                                    : 'border-transparent text-text-secondary hover:text-text-primary hover:border-border-secondary'
                                }
              `}
                        >
                            <Icon
                                className={`w-4 h-4 transition-colors ${isActive ? 'text-accent font-fill' : 'text-text-tertiary'}`}
                                strokeWidth={isActive ? 2 : 1.5}
                            />
                            {tab.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
