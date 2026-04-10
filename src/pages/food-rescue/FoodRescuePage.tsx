import { useState } from "react";

import { Download, Search, Filter } from 'lucide-react';
import { DonationsTable } from '../../components/food-rescue/DonationsTable';
import { Donation } from '../../types/food-rescue.types';

const MOCK_DONATIONS: Donation[] = [
    {
        id: 'DON-701',
        donorName: 'Grand Plaza Hotel',
        foodDescription: {
            title: 'Vegetable Biryani & Curries',
            details: 'Contains Dairy, Nuts'
        },
        quantity: '15 kg',
        pickupLocation: 'Sector 45, Loading Bay',
        expiryTime: {
            value: 'Today, 23:00',
            urgency: 'high'
        },
        status: 'pending'
    },
    {
        id: 'DON-702',
        donorName: 'Spice Garden Catering',
        foodDescription: {
            title: 'Assorted Naan & Paneer',
            details: 'Contains Gluten, Dairy'
        },
        quantity: '8 kg',
        pickupLocation: 'Main Kitchen, Rear Entry',
        expiryTime: {
            value: 'Tomorrow, 10:00',
            urgency: 'medium'
        },
        status: 'pending'
    },
    {
        id: 'DON-703',
        donorName: 'Urban Corporate Kitchen',
        foodDescription: {
            title: 'Mixed Salad Bowls',
            details: 'Vegan, Gluten Free'
        },
        quantity: '12 kg',
        pickupLocation: 'Building C, Cafeteria',
        expiryTime: {
            value: 'Tomorrow, 14:00',
            urgency: 'medium'
        },
        status: 'pending'
    },
    {
        id: 'DON-704',
        donorName: 'Bakery Delights',
        foodDescription: {
            title: 'Sourdough Loaves & Bagels',
            details: 'Contains Gluten'
        },
        quantity: '5 kg',
        pickupLocation: 'Storefront, Side Door',
        expiryTime: {
            value: 'Oct 28, 09:00',
            urgency: 'low'
        },
        status: 'pending'
    },
    {
        id: 'DON-705',
        donorName: 'Events Inc.',
        foodDescription: {
            title: 'Grilled Chicken & Vegetables',
            details: 'High Protein'
        },
        quantity: '20 kg',
        pickupLocation: 'Convention Center, Hall A',
        expiryTime: {
            value: 'Today, 21:00',
            urgency: 'high'
        },
        status: 'pending'
    },
    {
        id: 'DON-706',
        donorName: 'Sushi Spot',
        foodDescription: {
            title: 'California Rolls & Miso',
            details: 'Seafood, Soy'
        },
        quantity: '4 kg',
        pickupLocation: 'Downtown Branch, Kitchen',
        expiryTime: {
            value: 'Today, 20:30',
            urgency: 'high'
        },
        status: 'pending'
    }
];

export function FoodRescuePage() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:px-12 lg:py-10 no-scrollbar">
            <div className="max-w-6xl mx-auto space-y-8">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-2 text-xs font-medium text-text-tertiary mb-2">
                            <span>Dashboard</span>
                            <span>&gt;</span>
                            <span className="text-accent">Food Rescue Management</span>
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight">Food Rescue Management</h1>
                        <p className="text-text-secondary mt-1 text-sm">Manage pending donations and distribution logistics.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 rounded-lg bg-surface px-4 py-2 text-sm font-semibold text-text-primary border border-border shadow-sm transition hover:bg-surface-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                            <Filter className="w-[18px] h-[18px]" />
                            Filter
                        </button>
                        <button className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm transition hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                            <Download className="w-[18px] h-[18px]" />
                            Export Log
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="mb-6 border-b border-border">
                    <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                        <a className="group inline-flex items-center border-b-2 border-accent px-1 py-4 text-sm font-medium text-accent" href="#">
                            <span>Pending Donations</span>
                            <span className="ml-3 hidden rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent md:inline-block">6</span>
                        </a>
                        <a className="group inline-flex items-center border-b-2 border-transparent px-1 py-4 text-sm font-medium text-text-secondary hover:border-border-secondary hover:text-text-primary transition-colors" href="#">
                            <span>Approved</span>
                            <span className="ml-3 hidden rounded-full bg-surface-secondary border border-border px-2.5 py-0.5 text-xs font-medium text-text-tertiary md:inline-block">12</span>
                        </a>
                        <a className="group inline-flex items-center border-b-2 border-transparent px-1 py-4 text-sm font-medium text-text-secondary hover:border-border-secondary hover:text-text-primary transition-colors" href="#">
                            <span>Rejected</span>
                        </a>
                        <a className="group inline-flex items-center border-b-2 border-transparent px-1 py-4 text-sm font-medium text-text-secondary hover:border-border-secondary hover:text-text-primary transition-colors" href="#">
                            <span>History</span>
                        </a>
                    </nav>
                </div>

                {/* Main Card / Table */}
                <div className="bg-surface rounded-xl shadow-card border border-border overflow-hidden">
                    <div className="p-4 border-b border-border flex gap-3 bg-surface-secondary/50">
                        <div className="relative flex-1 max-w-sm">
                            <Search className="absolute inset-y-0 left-3 top-1/2 -translate-y-1/2 text-text-tertiary w-[18px] h-[18px]" />
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2 border border-border rounded-md leading-5 bg-surface text-text-primary placeholder-text-tertiary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent sm:text-sm transition duration-150 ease-in-out shadow-input"
                                placeholder="Search donations..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    <DonationsTable donations={MOCK_DONATIONS} />
                </div>

            </div>
        </div>
    );
}
