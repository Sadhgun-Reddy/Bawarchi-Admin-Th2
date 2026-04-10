
import { Download, RefreshCw, Search, Calendar, User, FileDigit, SlidersHorizontal } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export function AuditHeader() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 sticky top-0 z-20 pb-4 bg-background/80 backdrop-blur-md dark:bg-[#0F172A]/80 pt-4">
            <div>
                <nav className="flex text-sm text-text-tertiary mb-2 font-medium" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2">
                        <li className="inline-flex items-center">
                            <span className="hover:text-text-secondary cursor-pointer transition-colors">Operations</span>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <span className="mx-2 text-border-secondary">/</span>
                                <span className="text-text-secondary">Audit Logs</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                <h1 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">Audit Logs</h1>
                <p className="text-text-secondary mt-1 text-sm">Monitor system-wide administrative actions and security events.</p>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-surface dark:bg-[#1E293B] border border-border rounded-DEFAULT text-sm font-medium text-text-secondary hover:bg-surface-secondary dark:hover:bg-[#2C3849] hover:text-text-primary transition-all duration-normal ease-smooth shadow-elevation-1 dark:shadow-none focus:outline-none focus:ring-2 focus:ring-accent-muted">
                    <Download className="w-4 h-4" />
                    Export CSV
                </button>

                <button className="flex items-center justify-center gap-2 px-3 py-2 bg-surface dark:bg-[#1E293B] border border-border rounded-DEFAULT text-sm font-medium text-text-secondary hover:bg-surface-secondary dark:hover:bg-[#2C3849] hover:text-text-primary transition-all duration-normal ease-smooth shadow-elevation-1 dark:shadow-none focus:outline-none focus:ring-2 focus:ring-accent-muted" aria-label="Refresh">
                    <RefreshCw className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}

export function AuditFilters() {
    const { theme } = useTheme();
    const strokeWidth = theme === 'slate-dark' ? 1.5 : 2;

    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 bg-surface dark:bg-[#1E293B] p-4 border border-border rounded-[8px] mb-6 transition-colors duration-normal ease-smooth dark:matte-surface">

            {/* Search Input Container */}
            <div className="flex-1 w-full relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-tertiary">
                    <Search strokeWidth={strokeWidth} className="h-4 w-4" />
                </div>
                <input
                    type="text"
                    className="w-full pl-9 pr-4 py-2 text-sm bg-surface-secondary dark:bg-[#0F172A] border border-transparent dark:border-border rounded-DEFAULT focus:outline-none focus:bg-surface hover:bg-surface dark:hover:bg-[#1e293b] focus:ring-1 focus:ring-border-secondary transition-all duration-normal text-text-primary placeholder:text-text-tertiary"
                    placeholder="Search by action, resource ID, or IP address..."
                />
            </div>

            {/* Filter Triggers */}
            <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto no-scrollbar">
                <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium border border-border rounded-DEFAULT text-text-secondary hover:text-text-primary hover:bg-surface-secondary dark:hover:bg-[#2C3849] whitespace-nowrap transition-colors duration-normal ease-smooth focus:outline-none focus:ring-2 focus:ring-accent-muted">
                    <Calendar strokeWidth={strokeWidth} className="w-4 h-4" />
                    Date Range
                </button>
                <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium border border-border rounded-DEFAULT text-text-secondary hover:text-text-primary hover:bg-surface-secondary dark:hover:bg-[#2C3849] whitespace-nowrap transition-colors duration-normal ease-smooth focus:outline-none focus:ring-2 focus:ring-accent-muted">
                    <User strokeWidth={strokeWidth} className="w-4 h-4" />
                    Actor
                </button>
                <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium border border-border rounded-DEFAULT text-text-secondary hover:text-text-primary hover:bg-surface-secondary dark:hover:bg-[#2C3849] whitespace-nowrap transition-colors duration-normal ease-smooth focus:outline-none focus:ring-2 focus:ring-accent-muted">
                    <FileDigit strokeWidth={strokeWidth} className="w-4 h-4" />
                    Resource
                </button>

                {/* Separator */}
                <div className="w-px h-6 bg-border mx-1 hidden sm:block"></div>

                <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium border border-border rounded-DEFAULT text-text-secondary hover:text-text-primary hover:bg-surface-secondary dark:hover:bg-[#2C3849] whitespace-nowrap transition-colors duration-normal ease-smooth focus:outline-none focus:ring-2 focus:ring-accent-muted">
                    <SlidersHorizontal strokeWidth={strokeWidth} className="w-4 h-4" />
                    More Controls
                </button>
            </div>

        </div>
    );
}
