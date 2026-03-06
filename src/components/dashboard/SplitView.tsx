import React from 'react';
import * as Icons from 'lucide-react';
import { ActionItem, ActivityItem } from '../../types/dashboard';
import { cn } from '../../lib/utils';
import { useTheme } from '../../contexts/ThemeContext';

export function SplitView({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            {children}
        </div>
    );
}

export function ActionList({ items }: { items: ActionItem[] }) {
    const { theme } = useTheme();
    const strokeWidth = theme === 'slate-dark' ? 1.5 : 2;

    const getTypeStyles = (type: ActionItem['type']) => {
        switch (type) {
            case 'verification': return { icon: 'ShieldAlert', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-600/10 dark:bg-blue-400/10' };
            case 'refund': return { icon: 'Banknote', color: 'text-orange-600 dark:text-orange-400', bg: 'bg-orange-600/10 dark:bg-orange-400/10' };
            case 'approval': return { icon: 'CheckCircle2', color: 'text-green-600 dark:text-green-400', bg: 'bg-green-600/10 dark:bg-green-400/10' };
        }
    };

    return (
        <div className={cn(
            "flex flex-col p-4 md:p-6 bg-surface border border-border rounded-[8px] relative overflow-hidden",
            "shadow-elevation-1 dark:shadow-none dark:matte-surface dark:bg-[#1E293B]"
        )}>
            {/* Decorative Radial Grid */}
            <div className={cn(
                "absolute inset-0 pointer-events-none opacity-[0.03] transition-opacity duration-slow dark:opacity-[0.01]",
                "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-text-primary via-transparent to-transparent bg-[length:14px_14px]"
            )} />

            <h3 className="text-base font-bold text-text-primary mb-4 relative z-10">Action Required</h3>
            <div className="flex flex-col relative z-10 divide-y divide-border">
                {items.map((item) => {
                    const styles = getTypeStyles(item.type);
                    const Icon = (Icons as any)[styles.icon];

                    return (
                        <div key={item.id} className="flex items-center justify-between py-3 group">
                            <div className="flex items-center gap-3">
                                <div className={cn("w-10 h-10 rounded-full flex flex-shrink-0 items-center justify-center transition-transform group-hover:scale-110", styles.bg, styles.color)}>
                                    <Icon strokeWidth={strokeWidth} className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-text-primary line-clamp-1">{item.title}</h4>
                                    <p className="text-xs text-text-secondary line-clamp-1">{item.subtitle}</p>
                                </div>
                            </div>
                            <button className={cn(
                                "ml-4 shrink-0 px-3 py-1.5 text-xs font-medium rounded border transition-colors",
                                "bg-surface text-text-secondary border-border hover:bg-surface-secondary hover:text-text-primary",
                                "dark:bg-[#0F172A] dark:hover:bg-slate-800"
                            )}>
                                Review
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export function ActivityTimeline({ items }: { items: ActivityItem[] }) {
    return (
        <div className={cn(
            "flex flex-col p-4 md:p-6 bg-surface border border-border rounded-[8px]",
            "shadow-elevation-1 dark:shadow-none dark:matte-surface dark:bg-[#1E293B]"
        )}>
            <h3 className="text-base font-bold text-text-primary mb-4">Recent Activity</h3>

            <div className="flex flex-col ml-3">
                {items.map((item, index) => (
                    <div key={item.id} className={cn(
                        "relative pl-6 pb-6",
                        index !== items.length - 1 && "border-l-2 border-slate-100 dark:border-[#334155]"
                    )}>
                        {/* Timeline Dot Indicator */}
                        <div className={cn(
                            "absolute -left-[5px] top-1.5 w-[10px] h-[10px] rounded-full border-2 bg-surface dark:bg-[#0F172A]",
                            "border-slate-300 dark:border-accent dark:shadow-[0_0_8px_rgba(42,143,244,0.5)]" // Glow in dark mode
                        )} />

                        <div className="flex flex-col">
                            <span className="text-sm text-text-primary font-medium">{item.message}</span>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-xs text-text-secondary font-medium">{item.actor}</span>
                                <span className="text-xs text-text-tertiary">• {item.timestamp}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
