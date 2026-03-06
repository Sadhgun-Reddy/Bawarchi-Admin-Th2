import React from 'react';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import { KpiData } from '../../types/dashboard';
import { cn } from '../../lib/utils';
import { useTheme } from '../../contexts/ThemeContext';

export function StatGrid({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0 },
                show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 }
                }
            }}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4"
        >
            {children}
        </motion.div>
    );
}

export function KpiCard({ label, value, change, status, icon }: KpiData) {
    const { theme } = useTheme();
    const IconComponent = icon ? (Icons as any)[icon] : null;

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
            }}
            className={cn(
                "relative flex flex-col p-4 bg-surface rounded-[8px] transition-all duration-normal ease-smooth group overflow-hidden",
                "border border-border", // base
                "shadow-elevation-1 hover:shadow-elevation-2 hover:-translate-y-0.5", // Stripe Light
                "dark:matte-surface dark:shadow-none dark:hover:shadow-none dark:hover:-translate-y-0 dark:hover:bg-[#2C3849]", // Slate Dark
                status === 'action' && "dark:border-l-warning" // Optional Dark specific highlight
            )}
        >
            {/* Action Indicator Bar (Stripe Light Only) */}
            {status === 'action' && (
                <div className="absolute top-0 right-0 bottom-0 w-1 bg-orange-400 dark:hidden" />
            )}

            <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">{label}</span>
                {status === 'growth' && change && (
                    <span className="inline-flex py-0.5 px-1.5 rounded-sm text-[10px] font-bold bg-green-100 text-green-700 dark:bg-success/10 dark:text-success border dark:border-success/20">
                        {change}
                    </span>
                )}
                {status === 'action' && change && (
                    <span className="inline-flex py-0.5 px-1.5 rounded-sm text-[10px] font-bold bg-orange-100 text-orange-700 dark:bg-warning/10 dark:text-warning border dark:border-warning/20">
                        {change}
                    </span>
                )}
            </div>

            <div className="flex items-end justify-between mt-auto">
                <div>
                    <span className="text-2xl font-bold text-text-primary dark:text-white">{value}</span>
                </div>
                {IconComponent && (
                    <div className={cn(
                        "p-1.5 rounded-md transition-colors duration-normal ease-smooth",
                        "bg-accent-muted text-accent group-hover:bg-accent group-hover:text-white dark:bg-slate-800 dark:text-accent dark:group-hover:bg-accent/20 dark:group-hover:text-accent"
                    )}>
                        <IconComponent strokeWidth={theme === 'slate-dark' ? 1.5 : 2} className="w-5 h-5" />
                    </div>
                )}
            </div>
        </motion.div>
    );
}
