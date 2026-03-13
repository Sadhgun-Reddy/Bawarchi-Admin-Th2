import React from 'react';
import { ApprovalsTabsProps } from '../../../types/catererApprovals.types';

const TABS = [
    { id: 'All', label: 'All' },
    { id: 'Pending', label: 'Pending Approvals' },
    { id: 'Active', label: 'Active' },
    { id: 'Rejected', label: 'Rejected' },
];

export const ApprovalsTabs: React.FC<ApprovalsTabsProps> = ({ activeTab, onTabChange, counts }) => {
    return (
        <div className="border-b border-border mb-6">
            <div className="flex space-x-8 overflow-x-auto scroller-hide">
                {TABS.map((tab) => {
                    const isActive = activeTab === tab.id;
                    const count = counts[tab.id] || 0;
                    const isPendingTab = tab.id === 'Pending';

                    return (
                        <button
                            key={tab.id}
                            onClick={() => onTabChange(tab.id)}
                            className={`
                flex items-center py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors
                ${isActive
                                    ? 'border-accent text-accent'
                                    : 'border-transparent text-text-secondary hover:text-text-primary hover:border-border-secondary'
                                }
              `}
                        >
                            {tab.label}

                            <span
                                className={`
                  ml-2 py-0.5 px-2.5 rounded-full text-xs font-semibold
                  ${isPendingTab
                                        ? 'bg-warning text-white shadow-sm shadow-warning/20'
                                        : isActive
                                            ? 'bg-accent/10 text-accent'
                                            : 'bg-surface-secondary text-text-secondary'
                                    }
                `}
                            >
                                {count}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
