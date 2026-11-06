
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

interface TablePaginationProps {
    totalRows: number;
    currentPage: number;
    rowsPerPage: number;
    onPageChange: (page: number) => void;
    onRowsPerPageChange: (rows: number) => void;
}

export function TablePagination({ totalRows, currentPage, rowsPerPage, onPageChange, onRowsPerPageChange }: TablePaginationProps) {
    const totalPages = Math.ceil(totalRows / rowsPerPage);
    const startRow = (currentPage - 1) * rowsPerPage + 1;
    const endRow = Math.min(currentPage * rowsPerPage, totalRows);

    // Generate page numbers to display
    const pageNumbers = [];
    for (let i = 1; i <= Math.min(3, totalPages); i++) {
        pageNumbers.push(i);
    }

    // Add ellipsis and last page if needed
    if (totalPages > 3) {
        if (currentPage > 3) {
            pageNumbers.push(-1); // Ellipsis
            pageNumbers.push(currentPage);
        }
        if (currentPage < totalPages - 1) {
            pageNumbers.push(-1); // Ellipsis
        }
        if (currentPage !== totalPages && !pageNumbers.includes(totalPages)) {
            pageNumbers.push(totalPages);
        }
    }

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between px-2 sm:px-0 py-4 gap-4 w-full">

            {/* Summary */}
            <div className="text-sm text-text-secondary">
                Showing <span className="font-semibold text-text-primary">{startRow}</span> to <span className="font-semibold text-text-primary">{endRow}</span> of <span className="font-semibold text-text-primary">{totalRows}</span> results
            </div>

            {/* Controls Container */}
            <div className="flex items-center gap-6">

                {/* Rows Per Page */}
                <div className="hidden sm:flex items-center gap-2 text-sm text-text-secondary">
                    <span>Rows per page:</span>
                    <select
                        value={rowsPerPage}
                        onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
                        className="bg-transparent border border-transparent hover:border-border rounded focus:outline-none focus:ring-1 focus:ring-accent-muted text-text-primary cursor-pointer py-0.5 px-1"
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </select>
                </div>

                {/* Page Nav */}
                <div className="flex items-center gap-1">
                    <button
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="p-1 rounded text-text-secondary hover:bg-surface-secondary dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-1 mx-2">
                        {pageNumbers.map((page, index) => {
                            if (page === -1) {
                                return <span key={`ellipsis-${index}`} className="px-2 text-text-secondary">...</span>;
                            }

                            return (
                                <button
                                    key={page}
                                    onClick={() => onPageChange(page)}
                                    className={cn(
                                        "w-8 h-8 rounded flex items-center justify-center text-sm font-medium transition-all",
                                        currentPage === page
                                            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 font-bold"
                                            : "text-text-primary hover:bg-surface-secondary dark:hover:bg-slate-800"
                                    )}
                                >
                                    {page}
                                </button>
                            );
                        })}
                    </div>

                    <button
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="p-1 rounded text-text-secondary hover:bg-surface-secondary dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

            </div>
        </div>
    );
}
