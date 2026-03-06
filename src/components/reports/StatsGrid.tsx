import React from 'react';
import * as Icons from 'lucide-react';
import { ReportStats } from '../../types/reports';
import { cn } from '../../lib/utils';
import { useTheme } from '../../contexts/ThemeContext';

export function StatsGrid({ stats }: { stats: ReportStats[] }) {
    const { theme } = useTheme();

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map((stat, idx) => {
                const IconComponent = (Icons as any)[stat.icon];

                return (
                    <div key={idx} className={cn(
                        "flex flex-col p-4 md:p-5 bg-surface border border-border rounded-[8px] transition-transform duration-normal ease-smooth",
                        "shadow-elevation-1 hover:-translate-y-0.5 dark:shadow-none dark:matte-surface dark:hover:-translate-y-0 dark:bg-[#1E293B]"
                    )}>
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-sm font-medium text-text-secondary">{stat.label}</span>
                            {IconComponent && (
                                <div className="p-1.5 rounded-md bg-surface-secondary dark:bg-[#0F172A] text-text-tertiary">
                                    <IconComponent strokeWidth={theme === 'slate-dark' ? 1.5 : 2} className="w-4 h-4" />
                                </div>
                            )}
                        </div>

                        <div className="flex items-end gap-3 mt-auto pt-2">
                            <span className="text-2xl font-bold text-text-primary dark:text-white leading-none">{stat.value}</span>

                            {stat.trend && (
                                <div className="flex items-center text-xs font-medium text-emerald-600 dark:text-emerald-400">
                                    <Icons.TrendingUp strokeWidth={2} className="w-3 h-3 mr-1" />
                                    {stat.trend}
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
