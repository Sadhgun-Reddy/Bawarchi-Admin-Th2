import React from 'react';
import { Filter, ArrowUpDown, Search } from 'lucide-react';

export const ModerationHeader: React.FC = () => {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-text-primary dark:text-white tracking-tight">Content Moderation</h1>
                <p className="text-text-secondary dark:text-slate-400 mt-1">Review and approve new menu submissions and catalog updates.</p>
            </div>

            <div className="flex items-center gap-3">
                <div className="relative hidden sm:block w-64 group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary focus-within:text-accent dark:group-focus-within:text-blue-500 transition-colors" strokeWidth={1.5} />
                    <input
                        type="text"
                        placeholder="Search menus or caterers..."
                        className="w-full pl-9 py-2 text-sm rounded-lg bg-surface dark:bg-slate-900 border border-border dark:border-slate-800 text-text-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-accent/20 dark:focus:ring-blue-500 transition-shadow"
                    />
                </div>

                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-surface text-text-primary border border-border hover:bg-surface-secondary shadow-sm transition-colors dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-800 dark:text-white">
                    <Filter className="w-4 h-4" strokeWidth={1.5} />
                    <span className="hidden sm:inline">Filters</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-surface text-text-primary border border-border hover:bg-surface-secondary shadow-sm transition-colors dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-800 dark:text-white">
                    <ArrowUpDown className="w-4 h-4" strokeWidth={1.5} />
                    Export/Sort
                </button>
            </div>
        </div>
    );
};
