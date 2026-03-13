import React from 'react';
import { ApprovalsStat } from '../../../types/catererApprovals.types';
import { TrendingUp, TrendingDown, Clock, Users, IndianRupee } from 'lucide-react';

export const ApprovalsStatsGrid: React.FC<{ stats: ApprovalsStat[] }> = ({ stats }) => {
    const getIcon = (label: string) => {
        switch (label) {
            case 'Pending Approvals':
                return <Clock className="w-5 h-5 text-accent" strokeWidth={1.5} />;
            case 'Active Caterers':
                return <Users className="w-5 h-5 text-success" strokeWidth={1.5} />;
            case 'Total Revenue (YTD)':
                return <IndianRupee className="w-5 h-5 text-text-secondary" strokeWidth={1.5} />;
            default:
                return null;
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, i) => {
                const isPending = stat.label === 'Pending Approvals';

                return (
                    <div
                        key={i}
                        className={`card-surface p-6 flex flex-col justify-between ${isPending
                                ? 'bg-gradient-to-br from-white to-blue-50/50 dark:from-surface dark:to-surface-secondary/50 border-accent/20'
                                : ''
                            }`}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-text-secondary mb-1">
                                    {stat.label}
                                </span>
                                <span className="text-3xl font-bold text-text-primary">
                                    {stat.value}
                                </span>
                            </div>
                            <div className={`p-2 rounded-lg ${isPending ? 'bg-accent/10 dark:bg-accent-muted' : 'bg-surface-secondary'}`}>
                                {getIcon(stat.label)}
                            </div>
                        </div>

                        <div className="flex items-center text-sm">
                            {stat.trend ? (
                                <div className={`flex items-center ${stat.trend.type === 'up' ? 'text-success' : 'text-destructive'}`}>
                                    {stat.trend.type === 'up' ?
                                        <TrendingUp className="w-4 h-4 mr-1" strokeWidth={1.5} /> :
                                        <TrendingDown className="w-4 h-4 mr-1" strokeWidth={1.5} />
                                    }
                                    <span className="font-medium mr-2">{stat.trend.value}</span>
                                </div>
                            ) : null}
                            {stat.subValue && (
                                <span className="text-text-tertiary">{stat.subValue}</span>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
