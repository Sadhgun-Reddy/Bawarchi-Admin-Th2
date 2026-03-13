export type OfferStatus = 'pending' | 'active' | 'rejected';

export interface CatererOffer {
    id: string;
    title: string;
    description: string;
    category: string; // e.g., 'percentage', 'cake', 'work' (mapped to icons)
    caterer: {
        name: string;
        logo: string; // URL or initials
    };
    discountValue: string;
    validity: string;
    submittedAt: string;
    status: OfferStatus;
}

export interface ModerationInsight {
    title: string;
    description: string;
    value: string;
    icon: string;
}

export interface OffersTableProps {
    offers: CatererOffer[];
    isLoading?: boolean;
}
