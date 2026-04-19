import { useState } from "react";
import { Download, Search, Filter, ArrowRight, CheckCircle2, MapPin, Heart, Check } from 'lucide-react';
import { DonationsTable } from '../../components/food-rescue/DonationsTable';
import { MatchingBoardDonationCards } from '../../components/food-rescue/MatchingBoardDonationCards';
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
    const [activeTab, setActiveTab] = useState<'pending' | 'matching'>('pending');

    // States for matching board
    const [selectedDonation, setSelectedDonation] = useState<string | null>(null);
    const [selectedRequest, setSelectedRequest] = useState<string | null>(null);

    return (
        <div className={`flex-1 overflow-y-auto no-scrollbar ${activeTab === 'matching' ? 'p-0 flex flex-col h-full bg-surface-secondary/50 relative' : 'p-4 md:p-8 lg:px-12 lg:py-10'}`}>
            {activeTab === 'pending' ? (
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
                            <button
                                onClick={() => setActiveTab('pending')}
                                className="group inline-flex items-center border-b-2 border-accent px-1 py-4 text-sm font-medium text-accent"
                            >
                                <span>Pending Donations</span>
                                <span className="ml-3 hidden rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent md:inline-block">6</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('matching')}
                                className="group inline-flex items-center border-b-2 border-transparent px-1 py-4 text-sm font-medium text-text-secondary hover:border-border-secondary hover:text-text-primary transition-colors"
                            >
                                <span>Matching Board</span>
                            </button>
                            <button className="group inline-flex items-center border-b-2 border-transparent px-1 py-4 text-sm font-medium text-text-secondary hover:border-border-secondary hover:text-text-primary transition-colors">
                                <span>Approved</span>
                                <span className="ml-3 hidden rounded-full bg-surface-secondary border border-border px-2.5 py-0.5 text-xs font-medium text-text-tertiary md:inline-block">12</span>
                            </button>
                            <button className="group inline-flex items-center border-b-2 border-transparent px-1 py-4 text-sm font-medium text-text-secondary hover:border-border-secondary hover:text-text-primary transition-colors">
                                <span>History</span>
                            </button>
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
            ) : (
                <div className="flex-1 flex flex-col h-full overflow-hidden">
                    {/* Header for Matching Board */}
                    <header className="bg-surface/80 backdrop-blur-md border-b border-border px-8 py-5 flex items-center justify-between z-10 shrink-0">
                        <div>
                            <h1 className="text-2xl font-bold text-text-primary tracking-tight">Food Rescue Matching Board</h1>
                            <p className="text-sm text-text-secondary mt-1">Orchestrate donations and requests in real-time.</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setActiveTab('pending')}
                                className="px-4 py-2 bg-surface border border-border text-text-secondary hover:text-text-primary text-sm font-medium rounded-md shadow-sm hover:bg-surface-secondary transition-all"
                            >
                                Back to Pending
                            </button>
                            <button className="px-4 py-2 bg-surface border border-border text-text-primary text-sm font-medium rounded-md shadow-sm hover:bg-surface-secondary transition-all flex items-center gap-2">
                                <HistoryIcon className="w-[18px] h-[18px]" />
                                Match History
                            </button>
                        </div>
                    </header>

                    {/* Scrollable Board Area */}
                    <div className="flex-1 overflow-auto p-8 relative no-scrollbar">
                        <div className="max-w-7xl mx-auto h-full flex flex-col md:flex-row gap-8">

                            {/* Left Column: Available Food */}
                            <div className="flex-1 flex flex-col min-h-0">
                                <div className="flex items-center justify-between mb-4 shrink-0">
                                    <h2 className="text-sm font-bold text-text-primary uppercase tracking-wider flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-success"></span>
                                        Available Food
                                        <span className="bg-surface border border-border text-text-secondary px-2 py-0.5 rounded-full text-xs font-semibold ml-1">6</span>
                                    </h2>
                                    <button className="text-text-tertiary hover:text-accent transition-colors">
                                        <Filter className="w-5 h-5" />
                                    </button>
                                </div>
                                <MatchingBoardDonationCards
                                    donations={MOCK_DONATIONS}
                                    selectedDonation={selectedDonation}
                                    setSelectedDonation={setSelectedDonation}
                                />
                            </div>

                            {/* Right Column: Requests */}
                            <div className="flex-1 flex flex-col min-h-0">
                                <div className="flex items-center justify-between mb-4 shrink-0">
                                    <h2 className="text-sm font-bold text-text-primary uppercase tracking-wider flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                                        Active NGO Requests
                                        <span className="bg-surface border border-border text-text-secondary px-2 py-0.5 rounded-full text-xs font-semibold ml-1">3</span>
                                    </h2>
                                    <button className="text-text-tertiary hover:text-accent transition-colors">
                                        <Filter className="w-5 h-5" />
                                    </button>
                                </div>
                                <div className="flex flex-col gap-4 pb-24">

                                    {/* Request Card 1 */}
                                    <div
                                        onClick={() => setSelectedRequest('REQ-301')}
                                        className={`bg-surface rounded-xl p-5 shadow-sm border-2 cursor-pointer group transition-transform hover:-translate-y-0.5 ${selectedRequest === 'REQ-301' ? 'border-accent shadow-elevation-2' : 'border-transparent hover:border-border-secondary'
                                            } relative`}
                                    >
                                        {selectedRequest === 'REQ-301' && (
                                            <div className="absolute top-4 right-4">
                                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-sm">
                                                    <Check className="w-4 h-4 font-bold" />
                                                </span>
                                            </div>
                                        )}
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex flex-col">
                                                <span className="text-xs font-mono text-text-tertiary mb-1">ID: REQ-301</span>
                                                <h3 className="text-lg font-bold text-text-primary">Meals for 100 people</h3>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="flex items-center gap-1.5 px-2 py-1 bg-destructive/10 text-destructive rounded text-xs font-semibold border border-destructive/20">
                                                Urgent Need
                                            </div>
                                            <div className="px-2 py-1 bg-surface-secondary text-text-secondary rounded text-xs font-semibold flex items-center gap-1 border border-border">
                                                <MapPin className="w-3.5 h-3.5" />
                                                3.2km away
                                            </div>
                                        </div>
                                        <div className="border-t border-border pt-3 mt-1 flex flex-col gap-2">
                                            <div className="flex items-center gap-2 text-sm text-text-secondary">
                                                <Heart className="w-[18px] h-[18px] text-text-tertiary" />
                                                <span className="font-medium">Hope Shelter</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-text-tertiary">
                                                <MapPin className="w-[18px] h-[18px] text-text-tertiary" />
                                                45, Market Road, North Block
                                            </div>
                                        </div>
                                    </div>

                                    {/* Request Card 2 */}
                                    <div
                                        onClick={() => setSelectedRequest('REQ-305')}
                                        className={`bg-surface rounded-xl p-5 shadow-sm border cursor-pointer transition-all ${selectedRequest === 'REQ-305' ? 'border-accent shadow-elevation-2 border-2' : 'border-border hover:border-border-secondary hover:shadow-elevation-1'
                                            }`}
                                    >
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex flex-col">
                                                <span className="text-xs font-mono text-text-tertiary mb-1">ID: REQ-305</span>
                                                <h3 className="text-base font-semibold text-text-primary">Dinner for 40 Kids</h3>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="px-2 py-1 bg-surface-secondary text-text-secondary rounded text-xs font-semibold flex items-center gap-1 border border-border">
                                                <MapPin className="w-3.5 h-3.5" />
                                                8.5km away
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-text-secondary mt-2">
                                            <Heart className="w-[18px] h-[18px] text-text-tertiary" />
                                            <span className="font-medium">Sunshine Orphanage</span>
                                        </div>
                                    </div>

                                    {/* Request Card 3 */}
                                    <div
                                        onClick={() => setSelectedRequest('REQ-312')}
                                        className={`bg-surface rounded-xl p-5 shadow-sm border cursor-pointer transition-all ${selectedRequest === 'REQ-312' ? 'border-accent shadow-elevation-2 border-2' : 'border-border hover:border-border-secondary hover:shadow-elevation-1'
                                            }`}
                                    >
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex flex-col">
                                                <span className="text-xs font-mono text-text-tertiary mb-1">ID: REQ-312</span>
                                                <h3 className="text-base font-semibold text-text-primary">Raw Grains Support</h3>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-semibold border border-accent/20">
                                                Scheduled
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-text-secondary mt-2">
                                            <Heart className="w-[18px] h-[18px] text-text-tertiary" />
                                            <span className="font-medium">Community Kitchen Project</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Floating Action Bar */}
                        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 w-full max-w-2xl px-4 transition-all duration-300 ${selectedDonation && selectedRequest ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
                            }`}>
                            <div className="flex items-center justify-between bg-surface-secondary/90 backdrop-blur-xl border border-border p-2 pl-6 rounded-2xl shadow-elevation-4 ring-1 ring-border-secondary">
                                <div className="flex flex-col gap-0.5">
                                    <div className="flex items-center text-sm font-medium text-text-primary gap-2">
                                        <span>Matching</span>
                                        <span className="font-mono text-accent bg-accent/10 px-1.5 py-0.5 rounded border border-accent/20">{selectedDonation}</span>
                                        <ArrowRight className="w-4 h-4 text-text-tertiary" />
                                        <span className="font-mono text-purple-600 bg-purple-500/10 px-1.5 py-0.5 rounded border border-purple-500/20">{selectedRequest}</span>
                                    </div>
                                    <div className="text-xs text-text-tertiary">
                                        Distance: <span className="text-text-secondary">4.2 km</span> • Estimated Time: <span className="text-text-secondary">18 mins</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => { setSelectedDonation(null); setSelectedRequest(null); }}
                                        className="text-text-secondary hover:text-text-primary px-3 py-2 text-sm font-medium transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button className="bg-success hover:bg-success-foreground text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-success/20 flex items-center gap-2 transition-all active:scale-95">
                                        <CheckCircle2 className="w-5 h-5" />
                                        Confirm Match
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}

// Simple icon for history
function HistoryIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
            <path d="M12 7v5l4 2" />
        </svg>
    )
}
