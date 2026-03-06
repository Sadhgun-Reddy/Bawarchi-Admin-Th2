import React from 'react';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { useTheme } from '../../contexts/ThemeContext';

export interface StatCardProps {
    label: string;
    value: string | number;
    icon: string;
    trend?: 'up' | 'down';
    progress: number;
}

export function StatCard({ label, value, icon, trend, progress }: StatCardProps) {
    const { theme } = useTheme();
    const IconComponent = (Icons as any)[icon];

    const iconStrokeWidth = theme === 'slate-dark' ? 1.5 : 2;

    return (
        <div className="flex flex-col p-5 bg-surface rounded-[8px] transition-all duration-normal ease-smooth group relative overflow-hidden dark:matte-surface shadow-elevation-2 dark:shadow-none border border-transparent dark:border-border hover:border-accent/50 dark:hover:border-accent/50">

            <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-medium text-text-secondary">{label}</h3>
                {IconComponent && (
                    <div className="p-2 rounded-md bg-accent-muted dark:bg-slate-900/50 text-accent group-hover:scale-110 transition-transform duration-normal ease-smooth">
                        <IconComponent strokeWidth={iconStrokeWidth} className="w-5 h-5 flex-shrink-0" />
                    </div>
                )}
            </div>

            <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold text-text-primary tracking-tight">{value}</span>
                {trend && (
                    <span className={cn(
                        "text-xs font-semibold px-2 py-0.5 rounded-full flex items-center",
                        trend === 'up'
                            ? "text-success-foreground bg-success-muted/50 dark:bg-success-muted/10"
                            : "text-destructive-foreground bg-destructive-muted/50 dark:bg-destructive-muted/10"
                    )}>
                        {trend === 'up' ? '↑' : '↓'}
                        <span className="ml-1">{Math.abs(progress - 50)}%</span> {/* Mock trend value */}
                    </span>
                )}
            </div>

            {/* Progress Track */}
            <div className="mt-auto h-1.5 w-full bg-border-secondary dark:bg-slate-700/50 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                    className={cn(
                        "h-full rounded-full",
                        progress < 30 ? "bg-destructive" : progress < 60 ? "bg-warning" : "bg-accent"
                    )}
                />
            </div>
        </div>
    );
}

export function MetricGrid({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {children}
        </div>
    );
}
