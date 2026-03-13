import React from 'react';
import { Download, Plus } from 'lucide-react';

export const ComplaintsHeader: React.FC = () => {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-text-primary tracking-tight">Caterer Complaints</h1>
                <p className="text-text-secondary mt-1">Manage and resolve customer issues related to caterers.</p>
            </div>

            <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-surface text-text-primary border border-border hover:bg-surface-secondary shadow-sm transition-colors dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-800">
                    <Download className="w-4 h-4" strokeWidth={1.5} />
                    Export Log
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-accent text-white hover:bg-accent-hover shadow-sm shadow-blue-500/20 transition-all">
                    <Plus className="w-4 h-4" strokeWidth={2} />
                    New Ticket
                </button>
            </div>
        </div>
    );
};
