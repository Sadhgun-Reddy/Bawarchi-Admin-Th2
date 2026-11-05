import React from 'react';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';

export const DonationDetails: React.FC = () => {
    return (
        <div className="flex flex-col gap-6">
            {/* Main Info Card */}
            <div className="bg-surface rounded-xl shadow-card border border-border overflow-hidden">
                <div className="px-6 py-5 border-b border-border flex justify-between items-center bg-surface-secondary/50">
                    <h3 className="text-xs font-bold text-text-tertiary uppercase tracking-wider">NGO Details</h3>
                    <button className="text-accent hover:text-accent-hover text-sm font-medium transition-colors">Edit Details</button>
                </div>
                <div className="p-6">
                    <div className="flex items-start gap-4 mb-8">
                        <div className="h-16 w-16 rounded-lg bg-surface-secondary border border-border flex items-center justify-center text-text-tertiary flex-shrink-0">
                            <Building2 className="w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-text-primary flex items-center gap-2">
                                Helping Hands Foundation
                                <span className="bg-accent/10 text-accent text-[10px] px-1.5 py-0.5 rounded-full border border-accent/20 uppercase tracking-wider font-bold">Verified</span>
                            </h2>
                            <p className="text-text-secondary text-sm mt-1">Non-profit Organization • Reg ID: <span className="font-mono text-text-primary">#NGO-8832</span></p>
                            <div className="flex gap-4 mt-3">
                                <a href="mailto:contact@hopefoundation.org" className="text-sm text-text-secondary hover:text-accent flex items-center gap-1.5 group transition-colors">
                                    <Mail className="w-4 h-4 text-text-tertiary group-hover:text-accent transition-colors" />
                                    contact@hopefoundation.org
                                </a>
                                <span className="text-border">|</span>
                                <a href="tel:+1234567890" className="text-sm text-text-secondary hover:text-accent flex items-center gap-1.5 group transition-colors">
                                    <Phone className="w-4 h-4 text-text-tertiary group-hover:text-accent transition-colors" />
                                    +1 (555) 123-4567
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 pt-6 border-t border-border/50">
                        <div>
                            <label className="block text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-2">Request Type</label>
                            <p className="text-text-primary font-medium text-lg">Hot Meals Distribution</p>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-2">Headcount</label>
                            <div className="flex items-center gap-2">
                                <p className="text-text-primary font-bold text-2xl">150</p>
                                <span className="text-text-secondary text-sm">Beneficiaries</span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-2">Dietary Restrictions</label>
                            <div className="flex flex-wrap gap-2">
                                <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-success/10 text-success border border-success/20">Vegetarian</span>
                                <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-destructive/10 text-destructive border border-destructive/20">No Beef</span>
                                <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-warning/10 text-warning border border-warning/20">Nut-Free</span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-2">Desired Delivery Time</label>
                            <p className="text-text-primary font-medium">Oct 24, 2023 at 12:30 PM</p>
                            <p className="text-text-tertiary text-xs mt-1">Pickup Window: 11:00 AM - 12:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Logistics Card */}
            <div className="bg-surface rounded-xl shadow-card border border-border overflow-hidden">
                <div className="px-6 py-5 border-b border-border bg-surface-secondary/50">
                    <h3 className="text-xs font-bold text-text-tertiary uppercase tracking-wider">Logistics &amp; Location</h3>
                </div>
                <div className="p-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                        <div className="w-full sm:w-1/3 h-32 rounded-lg bg-surface-secondary border border-border relative overflow-hidden group flex items-center justify-center">
                            <MapPin className="w-8 h-8 text-text-tertiary opacity-50" />
                            <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/10 transition-colors cursor-pointer flex items-center justify-center">
                                <span className="text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">View on Map</span>
                            </div>
                        </div>
                        <div className="flex-1 space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-1">Delivery Address</label>
                                <p className="text-text-primary font-medium">123 Community Lane, Block B, Shelter #4</p>
                                <p className="text-text-secondary text-sm">New York, NY 10012</p>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-1">On-site Contact</label>
                                <p className="text-text-primary font-medium">Michael Ross - <span className="text-text-secondary font-normal">+1 (555) 987-6543</span></p>
                                <p className="text-text-tertiary text-xs italic mt-1">"Please use the rear entrance near the loading dock."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
