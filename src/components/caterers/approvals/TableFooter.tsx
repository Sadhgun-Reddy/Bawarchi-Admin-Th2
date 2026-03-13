import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TableFooterProps {
    start: number;
    end: number;
    total: number;
}

export const TableFooter: React.FC<TableFooterProps> = ({ start, end, total }) => {
    return (
        <div className="flex items-center justify-between px-6 py-4 border-t border-border">
            <div className="text-sm text-text-secondary">
                Showing <span className="font-medium text-text-primary">{start}</span> to <span className="font-medium text-text-primary">{end}</span> of <span className="font-medium text-text-primary">{total}</span> results
            </div>

            <div className="flex space-x-2">
                <button className="p-2 rounded-md border border-border text-text-secondary hover:bg-surface-secondary transition-colors disabled:opacity-50" disabled>
                    <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
                </button>
                <button className="p-2 rounded-md border border-border text-text-secondary hover:bg-surface-secondary transition-colors disabled:opacity-50">
                    <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
                </button>
            </div>
        </div>
    );
};
