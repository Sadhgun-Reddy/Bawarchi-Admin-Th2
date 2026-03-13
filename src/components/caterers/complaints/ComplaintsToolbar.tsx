import React from 'react';
import { Search, Filter, ArrowUpDown } from 'lucide-react';

export const ComplaintsToolbar: React.FC = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="relative w-full sm:max-w-md group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary group-focus-within:text-accent transition-colors" strokeWidth={1.5} />
                <input
                    type="text"
                    placeholder="Search complaints, caterers or IDs..."
                    className="w-full pl-9 input-base bg-surface dark:bg-slate-900 border border-border"
                />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-surface text-text-primary border border-border hover:bg-surface-secondary shadow-sm transition-colors dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-800">
                    <Filter className="w-4 h-4" strokeWidth={1.5} />
                    Filter
                </button>
                <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-surface text-text-primary border border-border hover:bg-surface-secondary shadow-sm transition-colors dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-800">
                    <ArrowUpDown className="w-4 h-4" strokeWidth={1.5} />
                    Sort
                </button>
            </div>
        </div>
    );
};
