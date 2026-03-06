
import { Search, Filter, Download } from 'lucide-react';

export function UsersToolbar() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Filters Group */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">

                {/* Search */}
                <div className="relative w-full sm:w-64">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-tertiary">
                        <Search className="h-4 w-4" />
                    </div>
                    <input
                        type="text"
                        className="w-full pl-9 pr-4 py-2 h-9 text-sm bg-surface dark:bg-[#1E293B] border border-border rounded-DEFAULT focus:outline-none focus:ring-1 focus:ring-accent-muted transition-all text-text-primary placeholder:text-text-tertiary shadow-sm dark:shadow-none"
                        placeholder="Search users..."
                    />
                </div>

                {/* Form Selectors */}
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <select className="h-9 px-3 py-1 text-sm bg-surface dark:bg-[#1E293B] border border-border rounded-DEFAULT focus:outline-none focus:ring-1 focus:ring-accent-muted text-text-secondary hover:bg-surface-secondary dark:hover:bg-[#2C3849] cursor-pointer shadow-sm dark:shadow-none flex-1 sm:flex-none">
                        <option value="all">Role: All</option>
                        <option value="Admin">Admin</option>
                        <option value="Caterer">Caterer</option>
                        <option value="Vendor">Vendor</option>
                        <option value="Customer">Customer</option>
                    </select>

                    <select className="h-9 px-3 py-1 text-sm bg-surface dark:bg-[#1E293B] border border-border rounded-DEFAULT focus:outline-none focus:ring-1 focus:ring-accent-muted text-text-secondary hover:bg-surface-secondary dark:hover:bg-[#2C3849] cursor-pointer shadow-sm dark:shadow-none flex-1 sm:flex-none">
                        <option value="all">Status: All</option>
                        <option value="active">Active</option>
                        <option value="pending">Pending</option>
                        <option value="suspended">Suspended</option>
                    </select>
                </div>
            </div>

            {/* Actions Group */}
            <div className="flex items-center gap-3 w-full md:w-auto">
                <button className="flex items-center justify-center gap-2 h-9 px-3 text-sm font-medium text-text-secondary bg-surface dark:bg-[#1E293B] border border-border rounded-DEFAULT hover:bg-surface-secondary dark:hover:bg-[#2C3849] transition-colors shadow-sm dark:shadow-none flex-1 md:flex-none">
                    <Filter className="w-4 h-4" />
                    More Filters
                </button>
                <button className="flex items-center justify-center gap-2 h-9 px-4 text-sm font-medium text-accent-foreground bg-accent hover:bg-accent-hover rounded-DEFAULT transition-all shadow-elevation-1 dark:shadow-none hover:-translate-y-0.5 flex-1 md:flex-none">
                    <Download className="w-4 h-4" />
                    Export Users
                </button>
            </div>
        </div>
    );
}
