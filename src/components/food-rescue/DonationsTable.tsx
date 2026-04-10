import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, MapPin, Clock, AlertTriangle, CheckCircle } from 'lucide-react';
import { Donation } from '../../types/food-rescue.types';

interface DonationsTableProps {
    donations: Donation[];
}

export const DonationsTable: React.FC<DonationsTableProps> = ({ donations }) => {
    const navigate = useNavigate();

    const getUrgencyIcon = (urgency: string) => {
        switch (urgency) {
            case 'high': return <AlertTriangle className="w-3.5 h-3.5" />;
            case 'medium': return <Clock className="w-3.5 h-3.5" />;
            case 'low': return <CheckCircle className="w-3.5 h-3.5" />;
            default: return <Clock className="w-3.5 h-3.5" />;
        }
    };

    const getUrgencyColor = (urgency: string) => {
        switch (urgency) {
            case 'high': return 'bg-destructive/10 text-destructive border border-destructive/20';
            case 'medium': return 'bg-warning/10 text-warning border border-warning/20';
            case 'low': return 'bg-success/10 text-success border border-success/20';
            default: return 'bg-surface-secondary text-text-secondary border border-border';
        }
    };

    return (
        <div className="bg-surface rounded-xl shadow-card border border-border overflow-hidden">
            <div className="overflow-x-auto scroller-hide">
                <table className="min-w-full divide-y divide-border text-left">
                    <thead className="bg-surface-secondary/50">
                        <tr>
                            <th className="px-6 py-3 text-xs font-semibold text-text-tertiary uppercase tracking-wider">Donation ID</th>
                            <th className="px-6 py-3 text-xs font-semibold text-text-tertiary uppercase tracking-wider">Donor Name</th>
                            <th className="px-6 py-3 text-xs font-semibold text-text-tertiary uppercase tracking-wider">Food Description</th>
                            <th className="px-6 py-3 text-xs font-semibold text-text-tertiary uppercase tracking-wider">Quantity</th>
                            <th className="px-6 py-3 text-xs font-semibold text-text-tertiary uppercase tracking-wider">Pickup Location</th>
                            <th className="px-6 py-3 text-xs font-semibold text-text-tertiary uppercase tracking-wider">Expiry Time</th>
                            <th className="px-6 py-3 text-right text-xs font-semibold text-text-tertiary uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-surface">
                        {donations.map((donation) => (
                            <tr key={donation.id} className="group transition-colors hover:bg-surface-secondary/50 cursor-pointer" onClick={() => navigate(`/admin/rescue/review/${donation.id}`)}>
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-text-primary">
                                    <div className="flex items-center gap-2">
                                        <Package className="w-4 h-4 text-text-tertiary" />
                                        {donation.id}
                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary font-medium">
                                    {donation.donorName}
                                </td>
                                <td className="px-6 py-4 text-sm text-text-primary">
                                    <div className="flex flex-col">
                                        <span className="font-medium">{donation.foodDescription.title}</span>
                                        <span className="text-xs text-text-tertiary mt-0.5">{donation.foodDescription.details}</span>
                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm">
                                    <span className="inline-flex items-center rounded-md bg-surface-secondary px-2 py-1 text-xs font-medium text-text-secondary ring-1 ring-inset ring-border">
                                        {donation.quantity}
                                    </span>
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary">
                                    <div className="flex items-center gap-1.5 truncate max-w-[180px]">
                                        <MapPin className="w-4 h-4 text-text-tertiary shrink-0" />
                                        {donation.pickupLocation}
                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${getUrgencyColor(donation.expiryTime.urgency)}`}>
                                        {getUrgencyIcon(donation.expiryTime.urgency)}
                                        {donation.expiryTime.value}
                                    </span>
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                    <button
                                        className="inline-flex items-center gap-1 rounded-md bg-surface-secondary px-3 py-1.5 text-xs font-semibold text-accent ring-1 ring-inset ring-accent/30 transition hover:bg-accent hover:text-accent-foreground"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigate(`/admin/rescue/review/${donation.id}`);
                                        }}
                                    >
                                        Review
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Footer */}
            <div className="flex items-center justify-between border-t border-border bg-surface px-6 py-4">
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-text-tertiary">
                            Showing <span className="font-medium text-text-primary">1</span> to <span className="font-medium text-text-primary">{donations.length}</span> of <span className="font-medium text-text-primary">{donations.length}</span> results
                        </p>
                    </div>
                    <div>
                        <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                            <button className="relative inline-flex items-center rounded-l-md px-2 py-2 text-text-tertiary ring-1 ring-inset ring-border hover:bg-surface-secondary focus:z-20 focus:outline-offset-0 disabled:opacity-50" disabled>
                                <span className="sr-only">Previous</span>
                                <span>&laquo;</span>
                            </button>
                            <button aria-current="page" className="relative z-10 inline-flex items-center bg-accent/10 px-4 py-2 text-sm font-semibold text-accent border border-accent/20 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                                1
                            </button>
                            <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-text-secondary ring-1 ring-inset ring-border hover:bg-surface-secondary focus:z-20 focus:outline-offset-0">
                                2
                            </button>
                            <button className="relative inline-flex items-center rounded-r-md px-2 py-2 text-text-tertiary ring-1 ring-inset ring-border hover:bg-surface-secondary focus:z-20 focus:outline-offset-0">
                                <span className="sr-only">Next</span>
                                <span>&raquo;</span>
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};
