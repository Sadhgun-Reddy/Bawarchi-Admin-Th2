import { Search, Filter, Download } from 'lucide-react';

export function CatererHeader() {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">Caterer Management</h1>
                <p className="text-sm text-text-secondary mt-1">Manage and approve catering partners across regions.</p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
                {/* Search */}
                <div className="relative w-full sm:w-64">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-tertiary">
                        <Search className="h-4 w-4" />
                    </div>
                    <input
                        type="text"
                        className="w-full pl-9 pr-4 py-2 h-9 text-sm bg-surface dark:bg-slate-card border border-border dark:border-slate-border rounded-DEFAULT focus:outline-none focus:ring-1 focus:ring-primary/20 dark:focus:ring-primary/50 transition-all text-text-primary placeholder:text-text-tertiary shadow-sm dark:shadow-none"
                        placeholder="Search caterers..."
                    />
                </div>

                <button className="flex items-center justify-center gap-2 h-9 px-3 text-sm font-medium text-text-secondary bg-surface dark:bg-slate-card border border-border dark:border-slate-border rounded-DEFAULT hover:bg-surface-secondary dark:hover:bg-slate-800 transition-colors shadow-sm dark:shadow-none">
                    <Filter className="w-4 h-4" />
                    <span className="hidden md:inline">Filter</span>
                </button>
                <button className="flex items-center justify-center gap-2 h-9 px-4 text-sm font-medium text-accent-foreground bg-accent hover:bg-accent-hover rounded-DEFAULT transition-all shadow-elevation-1 dark:shadow-none hover:-translate-y-0.5 whitespace-nowrap">
                    <Download className="w-4 h-4" />
                    Export
                </button>
            </div>
        </div>
    );
}
