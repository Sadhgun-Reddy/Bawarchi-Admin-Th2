
import {
    FileJson, TableProperties, FileText, MoreVertical,
    Download, Trash2, RotateCcw
} from 'lucide-react';
import { ExportRecord } from '../../types/reports';
import { cn } from '../../lib/utils';

export function ExportHistoryTable({ records }: { records: ExportRecord[] }) {

    const getFileIcon = (type: string) => {
        switch (type) {
            case 'csv': return <TableProperties className="w-4 h-4 text-blue-500" />;
            case 'excel': return <TableProperties className="w-4 h-4 text-emerald-500" />;
            case 'pdf': return <FileText className="w-4 h-4 text-red-500" />;
            default: return <FileJson className="w-4 h-4 text-text-tertiary" />;
        }
    };

    const statusStyles = {
        completed: "bg-emerald-100/50 text-emerald-800 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",
        failed: "bg-red-100/50 text-red-800 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20",
        processing: "bg-amber-100/50 text-amber-800 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20"
    };

    return (
        <div className="w-full bg-surface dark:bg-[#1E293B] border border-border rounded-[8px] overflow-hidden shadow-elevation-1 dark:shadow-none transition-all duration-normal ease-smooth dark:matte-surface">
            <div className="overflow-x-auto no-scrollbar">
                <table className="w-full text-left text-sm whitespace-nowrap table-auto min-w-[800px]">

                    <thead className="bg-slate-50/50 border-b border-border text-text-secondary dark:bg-slate-800/50 uppercase text-xs tracking-wider">
                        <tr>
                            <th className="px-6 py-4 font-semibold">Filename</th>
                            <th className="px-6 py-4 font-semibold w-24">Type</th>
                            <th className="px-6 py-4 font-semibold">Date Generated</th>
                            <th className="px-6 py-4 font-semibold w-32">Requested By</th>
                            <th className="px-6 py-4 font-semibold w-24">Size</th>
                            <th className="px-6 py-4 font-semibold w-28 text-center">Status</th>
                            <th className="px-6 py-4 w-24 text-right sr-only">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-border">
                        {records.map((record) => (
                            <tr
                                key={record.id}
                                className="group hover:bg-slate-50/80 dark:hover:bg-slate-800/30 transition-colors duration-normal ease-smooth"
                            >

                                {/* Filename */}
                                <td className="px-6 py-4 align-middle">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-surface-secondary dark:bg-[#0F172A] flex items-center justify-center shrink-0 border border-border">
                                            {getFileIcon(record.type)}
                                        </div>
                                        <span className="font-semibold text-text-primary group-hover:text-accent transition-colors cursor-pointer">
                                            {record.filename}
                                        </span>
                                    </div>
                                </td>

                                <td className="px-6 py-4 uppercase text-xs font-bold text-text-tertiary align-middle">{record.type}</td>

                                <td className="px-6 py-4 text-text-secondary align-middle">{record.dateGenerated}</td>

                                <td className="px-6 py-4 text-text-secondary align-middle">{record.requestedBy}</td>

                                <td className="px-6 py-4 text-text-secondary align-middle font-mono text-xs">{record.size}</td>

                                {/* Status Badge */}
                                <td className="px-6 py-4 align-middle text-center">
                                    <div className="flex items-center justify-center">
                                        <span className={cn(
                                            "inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide border gap-1.5",
                                            statusStyles[record.status]
                                        )}>
                                            {record.status === 'processing' && (
                                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                                            )}
                                            {record.status}
                                        </span>
                                    </div>
                                </td>

                                {/* Hover Actions */}
                                <td className="px-6 py-4 align-middle text-right">
                                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-normal">
                                        {record.status === 'completed' && (
                                            <button className="p-1.5 text-text-tertiary hover:text-text-primary hover:bg-surface-secondary dark:hover:bg-slate-700 rounded transition-colors" title="Download">
                                                <Download className="w-4 h-4" />
                                            </button>
                                        )}
                                        {(record.status === 'failed' || record.status === 'processing') && (
                                            <button className="p-1.5 text-text-tertiary hover:text-text-primary hover:bg-surface-secondary dark:hover:bg-slate-700 rounded transition-colors" title="Retry">
                                                <RotateCcw className="w-4 h-4" />
                                            </button>
                                        )}
                                        <button className="p-1.5 text-text-tertiary hover:text-destructive hover:bg-destructive-muted/30 rounded transition-colors" title="Delete">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                        <button className="p-1.5 text-text-tertiary hover:text-text-primary hover:bg-surface-secondary dark:hover:bg-slate-700 rounded transition-colors block md:hidden" title="More">
                                            <MoreVertical className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Table Pagination Placeholder */}
            <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 border-t border-border bg-slate-50/30 dark:bg-transparent">
                <span className="text-sm text-text-secondary mb-4 sm:mb-0">
                    Showing <span className="font-semibold text-text-primary">1</span> to <span className="font-semibold text-text-primary">{records.length}</span> of <span className="font-semibold text-text-primary">2,481</span> exports
                </span>

                <div className="flex items-center gap-1">
                    <button className="px-3 py-1.5 text-sm font-medium text-text-secondary rounded border border-border hover:bg-surface-secondary hover:text-text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed hidden sm:block">
                        Previous
                    </button>

                    <button className="w-8 h-8 rounded bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shadow-sm">1</button>
                    <button className="w-8 h-8 rounded text-text-secondary hover:bg-surface-secondary hover:text-text-primary flex items-center justify-center text-sm transition-colors">2</button>
                    <span className="text-text-tertiary px-1">...</span>
                    <button className="w-8 h-8 rounded text-text-secondary hover:bg-surface-secondary hover:text-text-primary flex items-center justify-center text-sm transition-colors">124</button>

                    <button className="px-3 py-1.5 text-sm font-medium text-text-secondary rounded border border-border hover:bg-surface-secondary hover:text-text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed hidden sm:block ml-2">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
