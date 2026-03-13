import React, { useState } from 'react';
import { ModerationIntro } from './ModerationIntro';
import { ModerationTabs } from './ModerationTabs';
import { OffersTable } from './OffersTable';
import { ModerationInsightsGrid } from './ModerationInsightsGrid';
import { CatererOffer, ModerationInsight } from '../../../types/offersModeration.types';

const MOCK_INSIGHTS: ModerationInsight[] = [
    {
        title: 'Auto-Moderation',
        description: '142 offers processed automatically based on policy rules.',
        value: '98% Accuracy',
        icon: 'bot'
    },
    {
        title: 'Blocked Terms',
        description: '3 flagged offers containing restricted keywords.',
        value: '"Free Alcohol"',
        icon: 'shield-alert'
    },
    {
        title: 'Team Status',
        description: 'Current queue velocity and active moderators.',
        value: '4 Online',
        icon: 'users'
    },
];

const MOCK_OFFERS: CatererOffer[] = [
    {
        id: 'OFF-1004',
        title: '20% Off First Order',
        description: 'New corporate clients get 20% off their first lunch catering order.',
        category: 'percentage',
        caterer: { name: 'Spice of India', logo: 'SI' },
        discountValue: '20% OFF',
        validity: 'Oct 1 - Dec 31',
        submittedAt: 'Today, 10:30 AM',
        status: 'pending'
    },
    {
        id: 'OFF-1003',
        title: 'Free Dessert on 50+ Plates',
        description: 'Complimentary gulab jamun for large party orders.',
        category: 'cake',
        caterer: { name: 'Royal Feast', logo: 'RF' },
        discountValue: 'FREE ITEM',
        validity: 'Nov 1 - Nov 30',
        submittedAt: 'Today, 09:15 AM',
        status: 'pending'
    },
    {
        id: 'OFF-1002',
        title: 'Corporate Onboarding Special',
        description: 'Waived delivery fees for new corporate accounts.',
        category: 'work',
        caterer: { name: 'Bawarchi Bros', logo: 'BB' },
        discountValue: 'FREE DELIVERY',
        validity: 'Oct 15 - Jan 15',
        submittedAt: 'Yesterday, 04:20 PM',
        status: 'pending'
    },
    {
        id: 'OFF-1001',
        title: 'Early Bird Holiday Discount',
        description: '15% off holiday party catering booked before Nov 1st.',
        category: 'percentage',
        caterer: { name: 'Green Leaf Co', logo: 'GL' },
        discountValue: '15% OFF',
        validity: 'Oct 1 - Oct 31',
        submittedAt: 'Yesterday, 02:10 PM',
        status: 'pending'
    },
    {
        id: 'OFF-1000',
        title: 'Wedding Tasting Complimentary',
        description: 'Free tasting session for couples booking 200+ guests.',
        category: 'cake',
        caterer: { name: 'Delhi Darbar', logo: 'DD' },
        discountValue: '100% OFF TASTING',
        validity: 'Ongoing',
        submittedAt: 'Oct 24, 2023',
        status: 'pending'
    },
];

export const OffersModerationLayout: React.FC = () => {
    const [activeTab, setActiveTab] = useState('pending');

    const filteredOffers = MOCK_OFFERS.filter(offer => offer.status === activeTab);
    const pendingCount = MOCK_OFFERS.filter(offer => offer.status === 'pending').length;

    return (
        <div className="flex flex-col w-full min-h-screen pb-12">
            <ModerationIntro />

            <div className="card-surface p-6 rounded-3xl shadow-stripe bg-white border border-transparent dark:border-slate-800 dark:bg-slate-900">
                <ModerationTabs
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    pendingCount={pendingCount}
                />

                <div key={activeTab}>
                    <OffersTable offers={filteredOffers} />
                </div>

                <ModerationInsightsGrid insights={MOCK_INSIGHTS} />
            </div>
        </div>
    );
};
