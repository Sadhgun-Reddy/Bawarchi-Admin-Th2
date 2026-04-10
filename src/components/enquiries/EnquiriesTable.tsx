import React from 'react';
import { Enquiry } from '../../types/enquiries.types';
import { Calendar, ArrowRight, Check } from 'lucide-react';

interface EnquiriesTableProps {
    enquiries: Enquiry[];
}

export const EnquiriesTable: React.FC<EnquiriesTableProps> = ({ enquiries }) => {
    return (
        <div className="bg-surface rounded-xl shadow-card border border-border overflow-hidden flex flex-col">
            <div className="overflow-x-auto scroller-hide">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-border bg-surface-secondary/50">
                            <th className="px-6 py-4 text-xs font-semibold text-text-tertiary uppercase tracking-wider">Enquiry ID</th>
                            <th className="px-6 py-4 text-xs font-semibold text-text-tertiary uppercase tracking-wider">Customer</th>
                            <th className="px-6 py-4 text-xs font-semibold text-text-tertiary uppercase tracking-wider">Target Caterer</th>
                            <th className="px-6 py-4 text-xs font-semibold text-text-tertiary uppercase tracking-wider">Event Date</th>
                            <th className="px-6 py-4 text-xs font-semibold text-text-tertiary uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-xs font-semibold text-text-tertiary uppercase tracking-wider text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {enquiries.map((enq) => (
                            <tr key={enq.id} className="group hover:bg-surface-secondary/80 transition-colors cursor-pointer">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="font-mono text-xs text-text-secondary bg-surface-secondary px-2 py-1 rounded">#{enq.id}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        {enq.customer.avatar ? (
                                            <div
                                                className="w-8 h-8 rounded-full bg-surface-secondary bg-cover bg-center shrink-0"
                                                style={{ backgroundImage: `url('${enq.customer.avatar}')` }}
                                            ></div>
                                        ) : (
                                            <div className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-xs shrink-0">
                                                {enq.customer.initials}
                                            </div>
                                        )}
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-text-primary">{enq.customer.name}</span>
                                            {enq.customer.email && <span className="text-xs text-text-tertiary">{enq.customer.email}</span>}
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-text-secondary font-medium">{enq.targetCaterer}</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-2 text-text-tertiary">
                                        <Calendar className="w-4 h-4" />
                                        <span className="text-sm">{enq.eventDate}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {enq.status === 'pending' && (
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-warning/10 text-warning border border-warning/20">
                                            <span className="w-1.5 h-1.5 rounded-full bg-warning animate-pulse"></span>
                                            Pending
                                        </span>
                                    )}
                                    {enq.status === 'responded' && (
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-success/10 text-success border border-success/20">
                                            <Check className="w-3.5 h-3.5" />
                                            Responded
                                        </span>
                                    )}
                                    {enq.status === 'closed' && (
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-surface-secondary text-text-secondary border border-border">
                                            <span className="w-1.5 h-1.5 rounded-full bg-text-tertiary"></span>
                                            Closed
                                        </span>
                                    )}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                    <button className="text-accent hover:text-accent-hover font-medium text-xs bg-accent/5 hover:bg-accent/10 px-3 py-1.5 rounded-md transition-colors inline-flex items-center gap-1">
                                        View Thread
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Footer */}
            <div className="px-6 py-4 border-t border-border bg-surface flex items-center justify-between">
                <span className="text-xs text-text-tertiary">
                    Showing <span className="font-medium text-text-primary">1-{enquiries.length}</span> of <span className="font-medium text-text-primary">1,248</span> enquiries
                </span>
                <div className="flex items-center gap-2">
                    <button className="h-8 px-3 flex items-center justify-center rounded-md border border-border text-text-secondary hover:text-text-primary hover:border-border-secondary transition-colors disabled:opacity-50 text-xs font-medium" disabled>
                        Previous
                    </button>
                    <button className="h-8 px-3 flex items-center justify-center rounded-md bg-accent text-accent-foreground shadow-sm text-xs font-medium">
                        1
                    </button>
                    <button className="h-8 px-3 flex items-center justify-center rounded-md border border-border text-text-secondary hover:text-text-primary hover:border-border-secondary transition-colors text-xs font-medium">
                        2
                    </button>
                    <button className="h-8 px-3 flex items-center justify-center rounded-md border border-border text-text-secondary hover:text-text-primary hover:border-border-secondary transition-colors text-xs font-medium">
                        3
                    </button>
                    <span className="px-2 text-text-tertiary">...</span>
                    <button className="h-8 px-3 flex items-center justify-center rounded-md border border-border text-text-secondary hover:text-text-primary hover:border-border-secondary transition-colors text-xs font-medium">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};
