import React from 'react';
import {
    Inbox,
    Flag,
    History,
    Archive
} from 'lucide-react';

interface ModerationTabsProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
    pendingCount?: number;
}

const TABS = [
    { id: 'Pending Menus', label: 'Pending Menus', icon: Inbox },
    { id: 'Flagged Items', label: 'Flagged Items', icon: Flag },
    { id: 'Rejected History', label: 'Rejected History', icon: History },
    { id: 'Approved Archive', label: 'Approved Archive', icon: Archive },
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
                                    ? 'border-accent text-accent'
                                    : 'border-transparent text-text-secondary hover:text-text-primary hover:border-border-secondary'
                                }
              `}
                        >
                            <Icon
                                className={`w-4 h-4 transition-colors ${isActive ? 'text-accent fill-accent/20' : 'text-text-tertiary'}`}
                                strokeWidth={isActive ? 2 : 1.5}
                            />
                            {tab.label}

                            {/* Badge for Pending Menus */}
                            {tab.id === 'Pending Menus' && pendingCount > 0 && (
                                <span className={`
                  ml-1.5 py-0.5 px-2 rounded-full text-[11px] font-bold transition-colors
                  ${isActive
                                        ? 'bg-accent text-white'
                                        : 'bg-surface-secondary text-text-secondary dark:bg-slate-800'
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
