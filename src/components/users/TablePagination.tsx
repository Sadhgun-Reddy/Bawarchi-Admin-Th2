
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useTheme } from '../../contexts/ThemeContext';

export function TablePagination({ totalRows }: { totalRows: number }) {
    const {} = useTheme();

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between px-2 sm:px-0 py-4 gap-4 w-full">

            {/* Summary */}
            <div className="text-sm text-text-secondary">
                Showing <span className="font-semibold text-text-primary">1</span> to <span className="font-semibold text-text-primary">5</span> of <span className="font-semibold text-text-primary">{totalRows}</span> results
            </div>

            {/* Controls Container */}
            <div className="flex items-center gap-6">

                {/* Rows Per Page Stub */}
                <div className="hidden sm:flex items-center gap-2 text-sm text-text-secondary">
                    <span>Rows per page:</span>
                    <select className="bg-transparent border border-transparent hover:border-border rounded focus:outline-none focus:ring-1 focus:ring-accent-muted text-text-primary cursor-pointer py-0.5 px-1">
                        <option>10</option>
                        <option>25</option>
                        <option>50</option>
                    </select>
                </div>

                {/* Page Nav */}
                <div className="flex items-center gap-1">
                    <button className="p-1 rounded text-text-secondary hover:bg-surface-secondary dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors" disabled>
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-1 mx-2">
                        <button className={cn(
                            "w-8 h-8 rounded flex items-center justify-center text-sm font-bold transition-all",
                            "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                        )}>
                            1
                        </button>
                        <button className="w-8 h-8 rounded text-text-primary hover:bg-surface-secondary dark:hover:bg-slate-800 flex items-center justify-center text-sm font-medium transition-colors">
                            2
                        </button>
                        <button className="w-8 h-8 rounded text-text-primary hover:bg-surface-secondary dark:hover:bg-slate-800 flex items-center justify-center text-sm font-medium transition-colors">
                            3
                        </button>
                    </div>

                    <button className="p-1 rounded text-text-secondary hover:bg-surface-secondary dark:hover:bg-slate-800 transition-colors">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

            </div>
        </div>
    );
}
