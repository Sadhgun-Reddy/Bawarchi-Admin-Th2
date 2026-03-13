import React from 'react';
import { ModerationStat } from '../../../types/menuModeration.types';
import { Clock, ListTodo, PercentCircle } from 'lucide-react';

export const ModerationStatsGrid: React.FC<{ stats: ModerationStat[] }> = ({ stats }) => {

    const renderIcon = (iconName: string) => {
        switch (iconName) {
            case 'clock': return <Clock className="w-5 h-5 text-accent dark:text-blue-400" strokeWidth={1.5} />;
            case 'list-todo': return <ListTodo className="w-5 h-5 text-warning dark:text-orange-400" strokeWidth={1.5} />;
            case 'percent-circle': return <PercentCircle className="w-5 h-5 text-success dark:text-emerald-400" strokeWidth={1.5} />;
            default: return null;
        }
    };

    const renderTrend = (label: string, trend?: string) => {
        if (!trend) return null;

        // Simple logic for trend colors:
        // Avg Review Time going down is good (success)
        // Approval Rate going up is good (success)
        // Anything else neutral for now
        let badgeClass = "text-text-tertiary dark:text-slate-500";

        if (label === 'Avg Review Time' && trend.includes('-')) {
            badgeClass = "bg-success-muted text-success-foreground px-2 py-0.5 rounded-full text-xs font-medium dark:bg-emerald-500/10 dark:text-emerald-400";
        } else if (label === 'Approval Rate' && trend.includes('+')) {
            badgeClass = "bg-success-muted text-success-foreground px-2 py-0.5 rounded-full text-xs font-medium dark:bg-emerald-500/10 dark:text-emerald-400";
        }

        return (
            <span className={badgeClass}>
                {trend}
            </span>
        );
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {stats.map((stat, idx) => {
                // Apply the indigo/blue gradient base for "Avg Review Time" in light mode as requested
                const isAvgTime = stat.label === 'Avg Review Time';
                const cardBgClass = isAvgTime
                    ? "bg-gradient-to-br from-white to-blue-50/50 dark:from-slate-900 dark:to-slate-900"
                    : "bg-surface dark:bg-slate-900";

                return (
                    <div key={idx} className={`${cardBgClass} rounded-xl p-5 border border-border shadow-stripe dark:border-slate-800 transition-shadow`}>
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-sm font-medium text-text-secondary dark:text-slate-400">
                                {stat.label}
                            </span>
                            <div className="p-2 bg-surface-secondary dark:bg-slate-950 rounded-lg">
                                {renderIcon(stat.icon)}
                            </div>
                        </div>
                        <div className="flex items-end justify-between">
                            <h3 className="text-2xl font-bold text-text-primary dark:text-white tracking-tight">
                                {stat.value}
                            </h3>
                            {renderTrend(stat.label, stat.trend)}
                        </div>
                    </div>
                )
            })}
        </div>
    );
};
