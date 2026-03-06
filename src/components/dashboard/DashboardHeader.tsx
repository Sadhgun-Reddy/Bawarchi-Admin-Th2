import React from 'react';
import { Filter, Plus, Download } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useTheme } from '../../contexts/ThemeContext';

export function DashboardHeader() {
    const { theme } = useTheme();

    return (
        <div className="relative mb-6">
            {/* Decorative Blob (Stripe Light Only) */}
            <div
                className={cn(
                    "absolute -top-12 -left-12 -right-12 h-48 bg-gradient-to-b from-accent/5 to-transparent -z-10 pointer-events-none transition-opacity duration-slow",
                    theme === 'slate-dark' ? 'opacity-0' : 'opacity-100'
                )}
            />

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <nav className="flex text-sm text-text-tertiary mb-2 font-medium" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2">
                            <li className="inline-flex items-center">
                                <span className="hover:text-text-secondary cursor-pointer transition-colors">Operations</span>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <span className="mx-2 text-border-secondary">/</span>
                                    <span className="text-text-secondary">Dashboard Overview</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">Dashboard Overview</h1>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-surface dark:bg-[#1E293B] border border-border rounded-DEFAULT text-sm font-medium text-text-secondary hover:bg-surface-secondary dark:hover:bg-[#2C3849] hover:text-text-primary transition-all duration-normal ease-smooth shadow-elevation-1 dark:shadow-none focus:outline-none focus:ring-2 focus:ring-accent-muted">
                        <Filter className="w-4 h-4" />
                        Filter
                    </button>

                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-surface dark:bg-[#1E293B] border border-border rounded-DEFAULT text-sm font-medium text-text-secondary hover:bg-surface-secondary dark:hover:bg-[#2C3849] hover:text-text-primary transition-all duration-normal ease-smooth shadow-elevation-1 hover:-translate-y-0.5 dark:shadow-none focus:outline-none focus:ring-2 focus:ring-accent-muted">
                        <Download className="w-4 h-4" />
                        Export Report
                    </button>

                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-DEFAULT text-sm font-medium hover:bg-accent-hover transition-all duration-normal shadow-lg shadow-accent/30 hover:-translate-y-0.5 dark:shadow-none">
                        <Plus className="w-4 h-4" />
                        Create Report
                    </button>
                </div>
            </div>
        </div>
    );
}
