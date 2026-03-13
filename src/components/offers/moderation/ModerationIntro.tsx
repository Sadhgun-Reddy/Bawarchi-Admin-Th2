import React from 'react';
import { Filter, Search, PlusCircle } from 'lucide-react';

export const ModerationIntro: React.FC = () => {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-text-primary dark:text-white tracking-tight">Offers Moderation Queue</h1>
                <p className="text-text-secondary dark:text-slate-400 mt-1">Review, approve, and monitor caterer discount and promotional offers.</p>
            </div>

            <div className="flex items-center gap-3">
                <div className="relative hidden sm:block w-64 group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary focus-within:text-accent dark:group-focus-within:text-blue-500 transition-colors" strokeWidth={1.5} />
                    <input
                        type="text"
                        placeholder="Search offers or caterers..."
                        className="w-full pl-9 py-2 text-sm rounded-lg bg-surface dark:bg-slate-900 border border-border dark:border-slate-800 text-text-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-accent/20 dark:focus:ring-blue-500 transition-shadow"
                    />
                </div>

                <button className="flex flex-1 sm:flex-none items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-surface text-text-primary border border-border hover:bg-surface-secondary shadow-sm transition-colors dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-800 dark:text-white">
                    <Filter className="w-4 h-4" strokeWidth={1.5} />
                    Filter
                </button>
                <button className="flex flex-1 sm:flex-none items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-surface text-text-primary border border-border hover:bg-surface-secondary shadow-sm transition-colors dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-800 dark:text-white">
                    <PlusCircle className="w-4 h-4 text-accent dark:text-blue-400" strokeWidth={1.5} />
                    Create Policy
                </button>
            </div>
        </div>
    );
};
