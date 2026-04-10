import React from 'react';
import { Ticket, LockOpen, AlertCircle, Timer, TrendingUp, TrendingDown } from 'lucide-react';

export const TicketsStats: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col gap-1 rounded-xl border border-border bg-surface p-5 hover:border-border-secondary transition-all shadow-sm group">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-text-secondary">Total Tickets</p>
                    <Ticket className="w-5 h-5 text-text-tertiary" />
                </div>
                <div className="flex items-end gap-2 mt-2">
                    <p className="text-2xl font-bold text-text-primary">1,240</p>
                    <span className="mb-1 text-xs font-medium text-success flex items-center bg-success/10 px-1.5 py-0.5 rounded-md">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        12%
                    </span>
                </div>
            </div>

            <div className="flex flex-col gap-1 rounded-xl border border-border bg-surface p-5 hover:border-border-secondary transition-all shadow-sm group">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-text-secondary">Open Tickets</p>
                    <LockOpen className="w-5 h-5 text-text-tertiary" />
                </div>
                <div className="flex items-end gap-2 mt-2">
                    <p className="text-2xl font-bold text-text-primary">48</p>
                    <span className="mb-1 text-xs font-medium text-success flex items-center bg-success/10 px-1.5 py-0.5 rounded-md">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        5%
                    </span>
                </div>
            </div>

            <div className="flex flex-col gap-1 rounded-xl border border-border bg-surface p-5 hover:border-border-secondary transition-all shadow-sm group">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-text-secondary">High Priority</p>
                    <AlertCircle className="w-5 h-5 text-destructive" />
                </div>
                <div className="flex items-end gap-2 mt-2">
                    <p className="text-2xl font-bold text-text-primary">14</p>
                    <span className="mb-1 text-xs font-medium text-destructive flex items-center bg-destructive/10 px-1.5 py-0.5 rounded-md">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        2%
                    </span>
                </div>
            </div>

            <div className="flex flex-col gap-1 rounded-xl border border-border bg-surface p-5 hover:border-border-secondary transition-all shadow-sm group">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-text-secondary">Avg Response Time</p>
                    <Timer className="w-5 h-5 text-text-tertiary" />
                </div>
                <div className="flex items-end gap-2 mt-2">
                    <p className="text-2xl font-bold text-text-primary">2h 15m</p>
                    <span className="mb-1 text-xs font-medium text-success flex items-center bg-success/10 px-1.5 py-0.5 rounded-md">
                        <TrendingDown className="w-3 h-3 mr-1" />
                        15%
                    </span>
                </div>
            </div>
        </div>
    );
};
