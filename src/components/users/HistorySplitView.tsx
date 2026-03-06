import { BookingHistory, SupportTicket } from '../../types/users';
import { cn } from '../../lib/utils';
import { ArrowRight, Ticket } from 'lucide-react';

export function HistorySplitView({ bookings, tickets }: { bookings: BookingHistory[], tickets: SupportTicket[] }) {

    const getStatusStyles = (status: string) => {
        if (status.toLowerCase().includes('completed')) return "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20";
        if (status.toLowerCase().includes('pending')) return "bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20";
        return "bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700";
    };

    const getStatusIndicator = (status: string) => {
        if (status.toLowerCase().includes('completed')) return "bg-emerald-400";
        if (status.toLowerCase().includes('pending')) return "bg-amber-400";
        if (status.toLowerCase().includes('upcoming')) return "bg-blue-400";
        return "bg-slate-400";
    };

    const getPriorityStyles = (priority: string) => {
        if (priority === 'high') return "bg-orange-50 text-orange-700 border-orange-100 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/20";
        if (priority === 'medium') return "bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20";
        return "bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700";
    };


    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Left Col: Enquiries Table */}
            <div className="lg:col-span-2 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-text-primary dark:text-white tracking-tight">Recent Bookings & Enquiries</h3>
                    <a href="#" className="text-sm font-semibold text-primary hover:text-accent-hover transition-colors flex items-center gap-1 group">
                        View All <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                </div>

                <div className="bg-white dark:bg-slate-card border border-border dark:border-slate-800 rounded-xl overflow-hidden shadow-sm dark:shadow-none">
                    <div className="overflow-x-auto no-scrollbar">
                        <table className="w-full text-left text-sm whitespace-nowrap min-w-[600px]">
                            <thead className="bg-slate-50/50 dark:bg-[#1E293B] border-b border-border dark:border-slate-800 text-xs uppercase tracking-wider text-text-tertiary">
                                <tr>
                                    <th className="px-6 py-4 font-semibold">Event</th>
                                    <th className="px-6 py-4 font-semibold">Date</th>
                                    <th className="px-6 py-4 font-semibold text-right">Budget</th>
                                    <th className="px-6 py-4 font-semibold">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border dark:divide-slate-800/50">
                                {bookings.map((booking) => (
                                    <tr key={booking.id} className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4 align-middle">
                                            <div className="font-semibold text-text-primary dark:text-white">{booking.event}</div>
                                            <div className="text-xs text-text-tertiary">{booking.cuisine}</div>
                                        </td>
                                        <td className="px-6 py-4 align-middle text-text-secondary">{booking.date}</td>
                                        <td className="px-6 py-4 align-middle text-right font-medium text-text-primary dark:text-slate-300">{booking.budget}</td>
                                        <td className="px-6 py-4 align-middle">
                                            <div className={cn(
                                                "inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide border",
                                                getStatusStyles(booking.status)
                                            )}>
                                                <span className={cn("w-1.5 h-1.5 rounded-full", getStatusIndicator(booking.status))}></span>
                                                {booking.status}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Right Col: Support Tickets */}
            <div className="lg:col-span-1 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-text-primary dark:text-white tracking-tight">Active Support Tickets</h3>
                </div>

                <div className="flex flex-col gap-3">
                    {tickets.map((ticket) => (
                        <div key={ticket.id} className="bg-white dark:bg-slate-card border border-slate-100 dark:border-slate-800 rounded-xl p-4 sm:p-5 hover:border-blue-200 dark:hover:border-blue-500/30 transition-colors shadow-sm dark:shadow-none flex flex-col gap-3 group cursor-pointer">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Ticket className="w-4 h-4 text-text-tertiary group-hover:text-blue-500 transition-colors" strokeWidth={1.5} />
                                    <span className="text-xs font-bold text-text-secondary">{ticket.id}</span>
                                </div>
                                <span className={cn(
                                    "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border",
                                    getPriorityStyles(ticket.priority)
                                )}>
                                    {ticket.priority}
                                </span>
                            </div>

                            <div>
                                <h4 className="font-semibold text-text-primary dark:text-white text-sm line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{ticket.title}</h4>
                                <p className="text-xs text-text-secondary mt-1 line-clamp-2 leading-relaxed">{ticket.description}</p>
                            </div>

                            <div className="flex items-center justify-between mt-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                                <span className="text-[11px] font-medium text-text-tertiary">{ticket.timestamp}</span>
                                <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 px-2 py-1 rounded">{ticket.status}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
