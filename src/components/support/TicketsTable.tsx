import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Ticket } from '../../types/support.types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TicketsTableProps {
    tickets: Ticket[];
}

export const TicketsTable: React.FC<TicketsTableProps> = ({ tickets }) => {
    const navigate = useNavigate();

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'High': return 'text-destructive bg-destructive/10 border-destructive/20';
            case 'Medium': return 'text-warning bg-warning/10 border-warning/20';
            case 'Low': return 'text-text-secondary bg-surface-secondary border-border';
            default: return 'text-text-secondary bg-surface-secondary border-border';
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Open': return 'text-destructive bg-destructive/10 border-destructive/20';
            case 'In Progress': return 'text-accent bg-accent/10 border-accent/20';
            case 'Resolved': return 'text-success bg-success/10 border-success/20';
            case 'Closed': return 'text-text-secondary bg-surface-secondary border-border';
            default: return 'text-text-secondary bg-surface-secondary border-border';
        }
    };

    return (
        <div className="flex flex-col rounded-xl border border-border bg-surface shadow-card overflow-hidden">
            <div className="overflow-x-auto scroller-hide">
                <table className="w-full text-left text-sm text-text-secondary">
                    <thead className="bg-surface-secondary/50 text-xs uppercase text-text-tertiary">
                        <tr className="border-b border-border">
                            <th className="px-6 py-4 font-semibold tracking-wider">Ticket ID</th>
                            <th className="px-6 py-4 font-semibold tracking-wider">User / Caterer</th>
                            <th className="px-6 py-4 font-semibold tracking-wider w-1/3">Subject</th>
                            <th className="px-6 py-4 font-semibold tracking-wider">Priority</th>
                            <th className="px-6 py-4 font-semibold tracking-wider">Status</th>
                            <th className="px-6 py-4 font-semibold tracking-wider">Last Updated</th>
                            <th className="px-6 py-4 font-semibold tracking-wider text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                        {tickets.map(ticket => (
                            <tr key={ticket.id} className="group hover:bg-surface-secondary/80 transition-colors cursor-pointer" onClick={() => navigate(`/admin/support/${ticket.id}`)}>
                                <td className="whitespace-nowrap px-6 py-4 font-medium text-text-primary">
                                    <span className="font-mono text-xs text-text-secondary bg-surface-secondary px-2 py-1 rounded">#{ticket.id}</span>
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        {ticket.user.avatar ? (
                                            <div
                                                className="w-8 h-8 rounded-full bg-surface-secondary bg-cover bg-center shrink-0"
                                                style={{ backgroundImage: `url('${ticket.user.avatar}')` }}
                                            ></div>
                                        ) : (
                                            <div className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-xs shrink-0">
                                                {ticket.user.initials}
                                            </div>
                                        )}
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-text-primary">{ticket.user.name}</span>
                                            <span className="text-xs text-text-tertiary">{ticket.user.role}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-text-primary truncate block max-w-xs">{ticket.subject}</span>
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border ${getPriorityColor(ticket.priority)}`}>
                                        {ticket.priority}
                                    </span>
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border ${getStatusColor(ticket.status)}`}>
                                        {ticket.status}
                                    </span>
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-text-tertiary">
                                    {ticket.lastUpdated}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-right">
                                    <button
                                        className="font-medium text-accent hover:text-accent-hover group-hover:underline text-sm"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigate(`/admin/support/${ticket.id}`);
                                        }}
                                    >
                                        View Thread
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-border px-6 py-4 bg-surface">
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-text-tertiary">
                            Showing <span className="font-medium text-text-primary">1</span> to <span className="font-medium text-text-primary">{tickets.length}</span> of <span className="font-medium text-text-primary">1240</span> results
                        </p>
                    </div>
                    <div>
                        <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                            <button className="relative inline-flex items-center rounded-l-md px-2 py-2 text-text-tertiary ring-1 ring-inset ring-border hover:bg-surface-secondary focus:z-20 focus:outline-offset-0 disabled:opacity-50">
                                <span className="sr-only">Previous</span>
                                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                            </button>
                            <button aria-current="page" className="relative z-10 inline-flex items-center bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                                1
                            </button>
                            <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-text-secondary ring-1 ring-inset ring-border hover:bg-surface-secondary focus:z-20 focus:outline-offset-0">
                                2
                            </button>
                            <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-text-secondary ring-1 ring-inset ring-border hover:bg-surface-secondary focus:z-20 focus:outline-offset-0">
                                3
                            </button>
                            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-text-tertiary ring-1 ring-inset ring-border focus:outline-offset-0">
                                ...
                            </span>
                            <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-text-secondary ring-1 ring-inset ring-border hover:bg-surface-secondary focus:z-20 focus:outline-offset-0">
                                12
                            </button>
                            <button className="relative inline-flex items-center rounded-r-md px-2 py-2 text-text-tertiary ring-1 ring-inset ring-border hover:bg-surface-secondary focus:z-20 focus:outline-offset-0">
                                <span className="sr-only">Next</span>
                                <ChevronRight className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};
