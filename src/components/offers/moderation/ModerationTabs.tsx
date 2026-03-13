import React from 'react';
import {
    Inbox,
    Tag,
    History
} from 'lucide-react';

interface ModerationTabsProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
    pendingCount?: number;
}

const TABS = [
    { id: 'pending', label: 'Pending Offers', icon: Inbox },
    { id: 'active', label: 'Active Offers', icon: Tag },
    { id: 'rejected', label: 'Rejected History', icon: History },
];

export const ModerationTabs: React.FC<ModerationTabsProps> = ({ activeTab, onTabChange, pendingCount = 0 }) => {
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
                                    ? 'border-accent text-accent dark:text-blue-400'
                                    : 'border-transparent text-text-secondary hover:text-text-primary hover:border-border-secondary dark:text-slate-400 dark:hover:text-slate-200'
                                }
              `}
                        >
                            <Icon
                                className={`w-4 h-4 transition-colors ${isActive ? 'text-accent fill-accent/20 dark:text-blue-400 dark:fill-blue-400/20' : 'text-text-tertiary dark:text-slate-500'}`}
                                strokeWidth={isActive ? 2 : 1.5}
                            />
                            {tab.label}

                            {/* Badge for Pending Offers */}
                            {tab.id === 'pending' && pendingCount > 0 && (
                                <span className={`
                  ml-1.5 py-0.5 px-2 rounded-full text-[11px] font-bold transition-colors
                  ${isActive
                                        ? 'bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400' // Using orange-100 as requested for the pending tab count
                                        : 'bg-surface-secondary text-text-secondary dark:bg-slate-800 dark:text-slate-400'
                                    }
                `}>
                                    {pendingCount}
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
