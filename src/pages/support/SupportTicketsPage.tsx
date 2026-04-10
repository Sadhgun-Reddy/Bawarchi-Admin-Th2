import { useState } from "react";

import { Download, Search, Filter } from 'lucide-react';
import { TicketsStats } from '../../components/support/TicketsStats';
import { TicketsTable } from '../../components/support/TicketsTable';
import { Ticket } from '../../types/support.types';

const MOCK_TICKETS: Ticket[] = [
    {
        id: 'TKT-8920',
        user: { name: 'Priya Sharma', role: 'Caterer', initials: 'PS' },
        subject: 'Payout discrepancy for Order #4490',
        priority: 'High',
        status: 'Open',
        lastUpdated: '2 mins ago'
    },
    {
        id: 'TKT-8919',
        user: { name: 'Raj Malhotra', role: 'User', initials: 'RM' },
        subject: 'Refund status for cancelled booking',
        priority: 'Medium',
        status: 'In Progress',
        lastUpdated: '15 mins ago'
    },
    {
        id: 'TKT-8918',
        user: { name: 'Anita Desai', role: 'Caterer', initials: 'AD' },
        subject: 'Requesting update on menu listing',
        priority: 'Low',
        status: 'Resolved',
        lastUpdated: '1 hour ago'
    },
    {
        id: 'TKT-8917',
        user: { name: 'Vikram Singh', role: 'User', initials: 'VS' },
        subject: 'Login issues with mobile app',
        priority: 'High',
        status: 'Open',
        lastUpdated: '3 hours ago'
    },
    {
        id: 'TKT-8916',
        user: { name: 'Sara Khan', role: 'Caterer', initials: 'SK' },
        subject: 'Question about featured listing pricing',
        priority: 'Low',
        status: 'Resolved',
        lastUpdated: '5 hours ago'
    }
];

export function SupportTicketsPage() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="flex-1 overflow-y-auto p-6 md:p-10 no-scrollbar">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight">Support Tickets</h1>
                        <p className="text-text-secondary text-sm mt-1">Manage and resolve customer inquiries efficiently.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="bg-surface hover:bg-surface-secondary text-text-secondary shadow-sm border border-border font-medium py-2 px-4 rounded-lg text-sm transition-all flex items-center gap-2">
                            <Filter className="w-[18px] h-[18px]" />
                            Filters
                        </button>
                        <button className="bg-accent hover:bg-accent-hover text-accent-foreground shadow-elevation-2 font-medium py-2 px-4 rounded-lg text-sm transition-all flex items-center gap-2">
                            <Download className="w-[18px] h-[18px]" />
                            Export Tickets
                        </button>
                    </div>
                </div>

                {/* Stats Overview */}
                <TicketsStats />

                {/* Main Card Area with Toolbar & Table */}
                <div className="flex flex-col rounded-xl border border-border bg-surface shadow-card overflow-hidden">
                    {/* Toolbar */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-5 border-b border-border bg-surface-secondary/30">
                        <div className="relative w-full lg:max-w-md">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary w-5 h-5" />
                            <input
                                type="text"
                                className="w-full bg-surface border border-border text-text-primary text-sm rounded-lg focus:ring-1 focus:ring-accent focus:border-accent block pl-10 pr-4 py-2 placeholder-text-tertiary transition-all shadow-input"
                                placeholder="Search by ID, subject or user..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                            <div className="relative">
                                <select className="w-full bg-surface border border-border text-text-primary text-sm rounded-lg focus:ring-1 focus:ring-accent focus:border-accent block pl-4 pr-10 py-2 appearance-none cursor-pointer shadow-input">
                                    <option>All Priorities</option>
                                    <option>High</option>
                                    <option>Medium</option>
                                    <option>Low</option>
                                </select>
                            </div>
                            <div className="relative">
                                <select className="w-full bg-surface border border-border text-text-primary text-sm rounded-lg focus:ring-1 focus:ring-accent focus:border-accent block pl-4 pr-10 py-2 appearance-none cursor-pointer shadow-input">
                                    <option>All Statuses</option>
                                    <option>Open</option>
                                    <option>Pending</option>
                                    <option>Resolved</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Data Table */}
                    <TicketsTable tickets={MOCK_TICKETS} />
                </div>
            </div>
        </div>
    );
}
