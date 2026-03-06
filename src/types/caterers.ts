export interface Caterer {
    id: string;
    name: string;
    email: string;
    logoUrl?: string;
    location: string;
    rating: number;
    reviewCount: number;
    enquiries: {
        count: number;
        trend: number;
    };
    profileViews: {
        count: string;
        progress: number;
    };
    status: 'active' | 'review' | 'archived';
}

export type TabState = 'Pending Review' | 'Approved' | 'Archived/Rejected';

export interface CatererTableProps {
    caterers: Caterer[];
    isLoading?: boolean;
}
