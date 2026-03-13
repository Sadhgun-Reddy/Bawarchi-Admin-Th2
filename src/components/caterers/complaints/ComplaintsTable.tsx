import React from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { ComplaintsTableProps, ComplaintStatus } from '../../../types/catererComplaints.types';

export const ComplaintsTable: React.FC<ComplaintsTableProps> = ({ complaints, isLoading }) => {

    const renderStatusBadge = (status: ComplaintStatus) => {
        switch (status) {
            case 'open':
                return (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-destructive-muted text-destructive-foreground dark:bg-red-500/10 dark:text-red-400 border border-transparent dark:border-red-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-destructive dark:bg-red-500 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
                        Open
                    </span>
                );
            case 'resolved':
                return (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-success-muted text-success-foreground dark:bg-emerald-500/10 dark:text-emerald-400 border border-transparent dark:border-emerald-500/20">
                        Resolved
                    </span>
                );
            case 'in-progress':
                return (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-warning-muted text-warning-foreground dark:bg-orange-500/10 dark:text-orange-400 border border-transparent dark:border-orange-500/20">
                        Investigating
                    </span>
                );
            default:
                return (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-badge-neutral text-badge-neutral-foreground">
                        {status}
                    </span>
                );
        }
    };

    const getInitials = (name: string) => name.substring(0, 2).toUpperCase();

    return (
        <div className="bg-surface rounded-xl shadow-card border border-border dark:bg-slate-900 dark:border-slate-800 overflow-hidden flex flex-col">
            <div className="overflow-x-auto scroller-hide">
                <table className="w-full text-left whitespace-nowrap">
                    <thead>
                        <tr className="bg-slate-50/50 dark:bg-slate-900/50 border-b border-border text-xs uppercase tracking-wider text-text-secondary font-medium">
                            <th className="px-6 py-4">Complaint ID</th>
                            <th className="px-6 py-4">Caterer</th>
                            <th className="px-6 py-4">Customer</th>
                            <th className="px-6 py-4">Issue Type</th>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border text-sm">
                        {isLoading ? (
                            <tr>
                                <td colSpan={7} className="px-6 py-8 text-center text-text-secondary">
                                    <div className="flex justify-center items-center">
                                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-accent"></div>
                                    </div>
                                </td>
                            </tr>
                        ) : complaints.length === 0 ? (
                            <tr>
                                <td colSpan={7} className="px-6 py-8 text-center text-text-secondary dark:text-slate-500">
                                    No complaints found for the selected view.
                                </td>
                            </tr>
                        ) : (
                            complaints.map((complaint) => (
                                <tr
                                    key={complaint.id}
                                    className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors group dark:hover:border-accent/20 border-l-2 border-transparent dark:hover:border-l-accent"
                                >
                                    <td className="px-6 py-4 text-text-secondary font-mono text-xs dark:text-slate-400">
                                        {complaint.id}
                                    </td>

                                    {/* Caterer Cell */}
                                    <td className="px-6 py-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 rounded-full bg-accent-muted text-accent flex items-center justify-center font-bold text-xs ring-1 ring-border">
                                                {getInitials(complaint.caterer.name)}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-medium text-text-primary dark:text-white group-hover:text-accent transition-colors">
                                                    {complaint.caterer.name}
                                                </span>
                                                <span className="text-xs text-text-tertiary dark:text-slate-400">
                                                    {complaint.caterer.tier}
                                                </span>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Customer Cell */}
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <span className="font-medium text-text-primary dark:text-white">
                                                {complaint.customer.name}
                                            </span>
                                            <span className="text-xs text-text-tertiary dark:text-slate-400">
                                                {complaint.customer.email}
                                            </span>
                                        </div>
                                    </td>

                                    <td className="px-6 py-4 text-text-secondary dark:text-slate-300">
                                        {complaint.issueType}
                                    </td>
                                    <td className="px-6 py-4 text-text-secondary dark:text-slate-400 text-xs">
                                        {complaint.date}
                                    </td>
                                    <td className="px-6 py-4">
                                        {renderStatusBadge(complaint.status)}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold 
                      bg-surface text-text-secondary border border-border 
                      hover:bg-accent/10 hover:text-accent hover:border-accent/20 
                      dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-blue-500/10 dark:hover:text-blue-400 dark:hover:border-blue-500/30 
                      transition-all shadow-sm">
                                            <Eye className="w-3.5 h-3.5" strokeWidth={2} />
                                            Investigate
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Footer / Pagination stub */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-border bg-surface dark:bg-slate-900 mt-auto">
                <div className="text-sm text-text-secondary dark:text-slate-400">
                    Showing <span className="font-medium text-text-primary dark:text-white">1</span> to <span className="font-medium text-text-primary dark:text-white">{complaints.length}</span> of <span className="font-medium text-text-primary dark:text-white">{complaints.length}</span> results
                </div>

                <div className="flex space-x-2">
                    <button className="p-2 rounded-md border border-border text-text-secondary hover:bg-surface-secondary transition-colors disabled:opacity-50 dark:border-slate-700 dark:hover:bg-slate-800" disabled>
                        <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
                    </button>
                    <button className="p-2 rounded-md border border-border text-text-secondary hover:bg-surface-secondary transition-colors disabled:opacity-50 dark:border-slate-700 dark:hover:bg-slate-800">
                        <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
                    </button>
                </div>
            </div>
        </div>
    );
};
