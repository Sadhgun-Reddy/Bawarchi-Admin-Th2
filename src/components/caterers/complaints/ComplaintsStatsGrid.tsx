import React from 'react';
import { ComplaintStat } from '../../../types/catererComplaints.types';
import { AlertCircle, FileText, CheckCircle2, Clock } from 'lucide-react';

export const ComplaintsStatsGrid: React.FC<{ stats: ComplaintStat[] }> = ({ stats }) => {

    const renderIcon = (iconName: string) => {
        switch (iconName) {
            case 'file-text': return <FileText className="w-5 h-5 text-text-secondary dark:text-slate-400" strokeWidth={1.5} />;
            case 'alert-circle': return <AlertCircle className="w-5 h-5 text-destructive dark:text-red-400" strokeWidth={1.5} />;
            case 'check-circle': return <CheckCircle2 className="w-5 h-5 text-success dark:text-emerald-400" strokeWidth={1.5} />;
            case 'clock': return <Clock className="w-5 h-5 text-accent dark:text-blue-400" strokeWidth={1.5} />;
            default: return null;
        }
    };

    const renderTrend = (label: string, trend: string) => {
        // Specifically styled for performance requirements
        let badgeClass = "text-text-tertiary";

        if (trend.includes('+') && !trend.includes('+New')) {
            // Typically an increase. If it's resolution time or complaints increasing, it might be bad, but let's assume standard up/down for now.
            // Based on the prompt:  `bg-success-bg with text-success for positive growth` 
            // We'll map "decrease in avg time" or "increase in resolved" to positive.
            badgeClass = "bg-success-muted text-success-foreground px-2 py-0.5 rounded-full text-xs font-medium";
        }

        if (label === 'Open Issues' && trend === '+New') {
            badgeClass = "bg-accent-muted text-accent font-medium px-2 py-0.5 rounded-full text-xs";
        }

        if (trend.includes('-')) {
            // Improvement in resolution time or drop in complaints
            badgeClass = "bg-success-muted text-success-foreground px-2 py-0.5 rounded-full text-xs font-medium";
        }

        return (
            <span className={badgeClass}>
                {trend}
            </span>
        );
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map((stat, idx) => (
                <div key={idx} className="bg-surface rounded-xl p-5 border border-border shadow-elevation-1 dark:bg-slate-900 dark:border-slate-800 transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-sm font-medium text-text-secondary dark:text-slate-400">
                            {stat.label}
                        </span>
                        <div className="p-2 bg-surface-secondary dark:bg-slate-950 rounded-lg">
                            {renderIcon(stat.icon)}
                        </div>
                    </div>
                    <div className="flex items-end justify-between">
                        <h3 className="text-2xl font-bold text-text-primary dark:text-white">
                            {stat.value}
                        </h3>
                        {stat.trend && renderTrend(stat.label, stat.trend)}
                    </div>
                </div>
            ))}
        </div>
    );
};
