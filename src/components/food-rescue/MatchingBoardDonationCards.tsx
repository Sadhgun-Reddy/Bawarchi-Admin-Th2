import React from 'react';
import { MapPin, Clock, AlertTriangle, CheckCircle, Package } from 'lucide-react';
import { Donation } from '../../types/food-rescue.types';

interface MatchingBoardDonationCardsProps {
    donations: Donation[];
    selectedDonation: string | null;
    setSelectedDonation: (id: string | null) => void;
}

export const MatchingBoardDonationCards: React.FC<MatchingBoardDonationCardsProps> = ({ donations, selectedDonation, setSelectedDonation }) => {
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
        <div className="flex flex-col gap-4 pb-24">
            {donations.map((donation) => (
                <div
                    key={donation.id}
                    onClick={() => setSelectedDonation(donation.id)}
                    className={`bg-surface rounded-xl p-5 shadow-sm border-2 cursor-pointer group transition-transform hover:-translate-y-0.5 ${selectedDonation === donation.id ? 'border-accent shadow-elevation-2' : 'border-transparent hover:border-border-secondary'
                        } relative`}
                >
                    {selectedDonation === donation.id && (
                        <div className="absolute top-4 right-4">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-sm">
                                <CheckCircle className="w-4 h-4 font-bold" />
                            </span>
                        </div>
                    )}
                    <div className="flex items-start justify-between mb-3">
                        <div className="flex flex-col">
                            <span className="text-xs font-mono text-text-tertiary mb-1">ID: {donation.id}</span>
                            <h3 className="text-lg font-bold text-text-primary">{donation.foodDescription.title}</h3>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className={`flex items-center gap-1.5 px-2 py-1 rounded text-xs font-semibold ${getUrgencyColor(donation.expiryTime.urgency)}`}>
                            {getUrgencyIcon(donation.expiryTime.urgency)}
                            {donation.expiryTime.value}
                        </div>
                        <div className="px-2 py-1 bg-surface-secondary text-text-secondary rounded text-xs font-semibold border border-border">
                            {donation.quantity}
                        </div>
                    </div>
                    <div className="border-t border-border pt-3 mt-1 flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-sm text-text-secondary">
                            <Package className="w-[18px] h-[18px] text-text-tertiary" />
                            <span className="font-medium">{donation.donorName}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-text-tertiary">
                            <MapPin className="w-[18px] h-[18px] text-text-tertiary" />
                            {donation.pickupLocation}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
