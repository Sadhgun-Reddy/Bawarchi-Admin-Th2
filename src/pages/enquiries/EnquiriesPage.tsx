import { useState } from "react";

import { Download, Search, Filter, } from 'lucide-react';
import { EnquiriesStats } from '../../components/enquiries/EnquiriesStats';
import { EnquiriesTable } from '../../components/enquiries/EnquiriesTable';
import { Enquiry } from '../../types/enquiries.types';

const MOCK_ENQUIRIES: Enquiry[] = [
    {
        id: 'ENQ-2023-001',
        customer: { name: 'Rahul Verma', email: 'rahul@example.com', initials: 'RV' },
        targetCaterer: 'Spice Symphony',
        eventDate: 'Oct 24, 2023',
        status: 'pending'
    },
    {
        id: 'ENQ-2023-002',
        customer: { name: 'Priya Sharma', email: 'priya@example.com', initials: 'PS' },
        targetCaterer: 'Royal Feast',
        eventDate: 'Nov 12, 2023',
        status: 'responded'
    },
    {
        id: 'ENQ-2023-003',
        customer: { name: 'Amit Patel', email: 'amit@example.com', initials: 'AP' },
        targetCaterer: 'Curry House',
        eventDate: 'Oct 30, 2023',
        status: 'responded'
    },
    {
        id: 'ENQ-2023-004',
        customer: { name: 'Sneha Gupta', email: 'sneha@example.com', initials: 'SG' },
        targetCaterer: 'Tandoori Nights',
        eventDate: 'Dec 05, 2023',
        status: 'pending'
    },
    {
        id: 'ENQ-2023-005',
        customer: { name: 'Vikram Singh', email: 'vikram@example.com', initials: 'VS' },
        targetCaterer: 'Golden Spoon',
        eventDate: 'Nov 01, 2023',
        status: 'responded'
    }
];

export function EnquiriesPage() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="flex-1 overflow-y-auto p-6 md:p-10 no-scrollbar">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight">Enquiries Monitoring</h1>
                        <p className="text-text-secondary text-sm">Manage and track all incoming catering requests in real-time.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="bg-surface hover:bg-surface-secondary text-text-secondary shadow-sm border border-border font-medium py-2 px-4 rounded-lg text-sm transition-all flex items-center gap-2">
                            <Filter className="w-[18px] h-[18px]" />
                            Filter
                        </button>
                        <button className="bg-accent hover:bg-accent-hover text-accent-foreground shadow-elevation-2 font-medium py-2 px-4 rounded-lg text-sm transition-all flex items-center gap-2">
                            <Download className="w-[18px] h-[18px]" />
                            Export Data
                        </button>
                    </div>
                </div>

                {/* Stats Cards */}
                <EnquiriesStats />

                {/* Search and Filters */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1 min-w-[300px]">
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary w-5 h-5" />
                            <input
                                type="text"
                                className="w-full bg-surface border border-border text-text-primary text-sm rounded-lg focus:ring-1 focus:ring-accent focus:border-accent block pl-10 p-2.5 placeholder-text-tertiary transition-all shadow-input"
                                placeholder="Search by ID, Name or Caterer..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="relative w-48 hidden sm:block">
                            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary w-5 h-5" />
                            <select className="w-full bg-surface border border-border text-text-primary text-sm rounded-lg focus:ring-1 focus:ring-accent focus:border-accent block pl-10 p-2.5 appearance-none cursor-pointer transition-all shadow-input">
                                <option>All Statuses</option>
                                <option>Pending</option>
                                <option>Responded</option>
                                <option>Closed</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <input
                                type="date"
                                className="bg-surface border border-border text-text-secondary text-sm rounded-lg focus:ring-1 focus:ring-accent focus:border-accent block p-2.5 transition-all w-40 shadow-input"
                            />
                        </div>
                    </div>
                </div>

                {/* Main Data Table */}
                <EnquiriesTable enquiries={MOCK_ENQUIRIES} />
            </div>
        </div>
    );
}
