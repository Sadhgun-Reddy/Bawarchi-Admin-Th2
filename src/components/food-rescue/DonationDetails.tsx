import React from 'react';
import { Clock, MapPin, PersonStanding, Phone, Star } from 'lucide-react';

export const DonationDetails: React.FC = () => {
    return (
        <div className="bg-surface rounded-xl shadow-card border border-border p-6 flex flex-col gap-6">
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-text-primary flex items-center gap-2">
                    <span className="material-symbols-outlined text-text-tertiary">inventory_2</span>
                    Donation Details
                </h3>
                <span className="text-xs font-medium uppercase tracking-wider text-text-tertiary">Logistics ID: LG-8922</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
                {/* Donor Info Block */}
                <div className="flex flex-col gap-4">
                    <label className="text-xs font-semibold text-text-tertiary uppercase tracking-wider">Donor Information</label>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-surface-secondary flex items-center justify-center shrink-0 overflow-hidden border border-border">
                            <img alt="Donor Logo" className="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ_ochCfZQe7oVgYJE4NirYGai_UFOeuyHhqST0cF5-OKICYWOf-3CdVMf3B9SNUQzeyU9Sc2PYtjWf9qipNdtKfPeEV-7l5J1pnqmtzuNO9CD-xINuWSO--PHUXcx2mU4ktQB56P4OxHK0NMcBnyhr-GvX9lxoKRFG2Qc7-2EBjcQ7DhBpKIByC_xoIzjuR56U9cAW813J63CecD5XYNkl6CTElfWFk7JCcdwYU4JXBWN6xNpAyqtSXwMq5FfCbaiJVyp5gxPmg" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-text-primary font-medium text-base">Spice Garden Catering</span>
                            <span className="text-text-tertiary text-sm">Commercial Kitchen • Level 2 Verified</span>
                            <div className="flex items-center gap-1 mt-1">
                                <Star className="w-4 h-4 text-warning fill-warning" />
                                <Star className="w-4 h-4 text-warning fill-warning" />
                                <Star className="w-4 h-4 text-warning fill-warning" />
                                <Star className="w-4 h-4 text-warning fill-warning" />
                                <Star className="w-4 h-4 text-text-tertiary fill-text-tertiary" />
                                <span className="text-xs text-text-tertiary ml-1">(4.8)</span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2 mt-2">
                        <div className="flex items-center gap-3 text-sm text-text-secondary">
                            <Phone className="w-4 h-4 text-text-tertiary" />
                            +1 (555) 123-4567
                        </div>
                        <div className="flex items-center gap-3 text-sm text-text-secondary">
                            <PersonStanding className="w-4 h-4 text-text-tertiary" />
                            Contact: Sarah Jenkins
                        </div>
                    </div>
                </div>

                {/* Logistics Block */}
                <div className="flex flex-col gap-4">
                    <label className="text-xs font-semibold text-text-tertiary uppercase tracking-wider">Logistics</label>
                    <div className="p-4 bg-surface-secondary/50 rounded-lg border border-border space-y-3">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col">
                                <span className="text-xs text-text-tertiary flex items-center gap-1">
                                    <Clock className="w-3.5 h-3.5" /> Pickup Time
                                </span>
                                <span className="text-sm font-medium text-text-primary mt-1">Today, 4:30 PM - 5:00 PM</span>
                            </div>
                            <span className="bg-accent/10 text-accent text-xs px-2 py-1 rounded border border-accent/20 font-medium">Urgent</span>
                        </div>
                        <hr className="border-border" />
                        <div className="flex gap-3">
                            <div className="shrink-0 mt-0.5">
                                <MapPin className="text-text-tertiary w-4 h-4" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm text-text-secondary font-medium">123 Market St, Suite 400</span>
                                <span className="text-xs text-text-tertiary mt-0.5">San Francisco, CA 94103</span>
                                <a className="text-xs text-accent mt-1 hover:underline font-medium" href="#">View on Map</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Inventory Table */}
            <div className="flex flex-col gap-4">
                <label className="text-xs font-semibold text-text-tertiary uppercase tracking-wider">Inventory Items</label>
                <div className="overflow-hidden rounded-lg border border-border">
                    <table className="w-full text-left text-sm text-text-secondary">
                        <thead className="bg-surface-secondary/50 text-xs uppercase text-text-tertiary border-b border-border">
                            <tr>
                                <th className="px-4 py-3 font-medium">Item Name</th>
                                <th className="px-4 py-3 font-medium">Quantity</th>
                                <th className="px-4 py-3 font-medium">Packaging</th>
                                <th className="px-4 py-3 font-medium">Expiration</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border bg-surface-secondary/10">
                            <tr className="hover:bg-surface-secondary/40 transition-colors">
                                <td className="px-4 py-3 font-medium text-text-primary">Vegetable Curry</td>
                                <td className="px-4 py-3">5 Large Trays</td>
                                <td className="px-4 py-3">Aluminum / Sealed</td>
                                <td className="px-4 py-3 text-warning font-medium">24 hrs</td>
                            </tr>
                            <tr className="hover:bg-surface-secondary/40 transition-colors">
                                <td className="px-4 py-3 font-medium text-text-primary">Basmati Rice</td>
                                <td className="px-4 py-3">10 kg</td>
                                <td className="px-4 py-3">Bulk Bag</td>
                                <td className="px-4 py-3 text-success font-medium">48 hrs</td>
                            </tr>
                            <tr className="hover:bg-surface-secondary/40 transition-colors">
                                <td className="px-4 py-3 font-medium text-text-primary">Naan Bread</td>
                                <td className="px-4 py-3">50 pieces</td>
                                <td className="px-4 py-3">Paper Wrap</td>
                                <td className="px-4 py-3 text-success font-medium">24 hrs</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
