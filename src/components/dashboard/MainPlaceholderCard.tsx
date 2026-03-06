import React from 'react';
import { Settings } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useTheme } from '../../contexts/ThemeContext';

export function MainPlaceholderCard() {
    const { theme } = useTheme();

    return (
        <div className={cn(
            "relative flex flex-col items-center justify-center p-10 sm:p-16 rounded-[12px] dark:rounded-[8px] bg-surface text-center transition-all duration-normal ease-smooth overflow-hidden group border border-dashed",
            "shadow-elevation-4 border-transparent dark:shadow-none dark:border-border dark:bg-[#1E293B]"
        )}>

            {/* Background Radial Stripe Pattern (Stripe Light only for subtlety, hidden in dark) */}
            <div className={cn(
                "absolute inset-0 pointer-events-none opacity-[0.03] transition-opacity duration-slow dark:opacity-0",
                "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-text-primary via-transparent to-transparent bg-[length:20px_20px]"
            )} />

            <div className="relative z-10 flex flex-col items-center max-w-md mx-auto">
                <div className="w-16 h-16 rounded-2xl bg-accent-muted dark:bg-slate-900 text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-normal ease-smooth shadow-elevation-1 dark:shadow-none dark:border dark:border-slate-800">
                    <Settings strokeWidth={theme === 'slate-dark' ? 1.5 : 2} className="w-8 h-8" />
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">
                    Configure Your Workspace
                </h2>

                <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-8">
                    The dashboard is structurally ready, but awaiting high-fidelity charts and datagrids. Set up your workspace integrations to populate this view.
                </p>

                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-background border border-border text-text-primary font-medium rounded-DEFAULT shadow-elevation-1 hover:bg-surface-secondary transition-colors dark:matte-surface focus:outline-none focus:ring-2 focus:ring-accent-muted">
                    Configure Dashboard
                </button>
            </div>

        </div>
    );
}
