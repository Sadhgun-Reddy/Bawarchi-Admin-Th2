import React from 'react';
import { Lock, CheckCircle, X } from 'lucide-react';

export const TicketMetadata: React.FC = () => {
    return (
        <div className="flex flex-col gap-6 h-full">
            {/* User Card */}
            <div className="bg-surface rounded-xl shadow-card p-6 border border-border">
                <h3 className="text-xs font-bold text-text-tertiary uppercase tracking-wider mb-4">Requester</h3>
                <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-surface-secondary border border-border shrink-0 flex items-center justify-center text-text-secondary font-bold">
                        RS
                    </div>
                    <div className="flex flex-col min-w-0">
                        <span className="text-base font-bold text-text-primary truncate">Rahul Sharma</span>
                        <span className="text-sm text-text-secondary truncate">rahul.s@example.com</span>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="px-2 py-0.5 rounded bg-accent/20 text-accent text-[10px] font-bold border border-accent/30">CHEF PARTNER</span>
                            <span className="px-2 py-0.5 rounded bg-surface-secondary text-text-secondary text-[10px] font-bold border border-border">ID: 8832</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2 border-t border-border pt-4">
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase text-text-tertiary font-semibold">Total Tickets</span>
                        <span className="text-sm font-medium text-text-primary">12</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase text-text-tertiary font-semibold">Last Active</span>
                        <span className="text-sm font-medium text-text-primary">10m ago</span>
                    </div>
                </div>

                <button className="w-full mt-4 py-2 border border-border rounded-lg text-sm text-text-secondary hover:text-text-primary hover:bg-surface-secondary transition-colors">
                    View Full Profile
                </button>
            </div>

            {/* Properties Card */}
            <div className="bg-surface rounded-xl shadow-card p-6 border border-border">
                <h3 className="text-xs font-bold text-text-tertiary uppercase tracking-wider mb-4">Ticket Properties</h3>
                <div className="space-y-4">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-text-secondary">Assignee</label>
                        <select className="w-full bg-surface-secondary text-text-primary text-sm rounded-lg border border-border focus:border-accent focus:ring-1 focus:ring-accent py-2 px-3 appearance-none cursor-pointer">
                            <option>Me (Admin User)</option>
                            <option>Support Team A</option>
                            <option>Tech Support</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-text-secondary">Status</label>
                        <select className="w-full bg-surface-secondary text-text-primary text-sm rounded-lg border border-border focus:border-accent focus:ring-1 focus:ring-accent py-2 px-3 appearance-none cursor-pointer" defaultValue="open">
                            <option value="open">Open</option>
                            <option value="pending">Pending</option>
                            <option value="resolved">Resolved</option>
                            <option value="closed">Closed</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-text-secondary">Priority</label>
                        <select className="w-full bg-surface-secondary text-text-primary text-sm rounded-lg border border-border focus:border-accent focus:ring-1 focus:ring-accent py-2 px-3 appearance-none cursor-pointer" defaultValue="high">
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-text-secondary">Tags</label>
                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-secondary text-xs font-medium text-text-primary border border-border">
                                Login Issue
                                <button className="hover:text-text-primary"><X className="w-3 h-3" /></button>
                            </span>
                            <button className="inline-flex items-center gap-1 px-2.5 py-1 rounded border border-dashed border-text-tertiary text-xs font-medium text-text-tertiary hover:text-text-primary hover:border-border-secondary transition-colors">
                                + Add Tag
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Admin Notes */}
            <div className="bg-surface rounded-xl shadow-card p-6 border border-border flex-1">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xs font-bold text-text-tertiary uppercase tracking-wider flex items-center gap-1">
                        <Lock className="w-3.5 h-3.5" />
                        Private Notes
                    </h3>
                    <span className="text-[10px] text-text-tertiary">Admins only</span>
                </div>
                <textarea
                    className="w-full h-32 bg-warning/5 text-warning/90 text-sm rounded-lg border border-warning/20 focus:border-warning/50 focus:ring-1 focus:ring-warning/50 p-3 resize-none placeholder-warning/40"
                    placeholder="Add a private note about this ticket..."
                ></textarea>
                <div className="mt-3 text-xs text-text-tertiary italic">
                    Last note added by Admin User on Oct 24, 2023.
                </div>
            </div>

            {/* Action Button */}
            <button className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-sm font-bold rounded-lg shadow-sm text-success-foreground bg-success hover:bg-success-muted focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-success transition-all">
                <CheckCircle className="w-5 h-5 mr-2" />
                Mark as Resolved
            </button>
        </div>
    );
};
