export type MenuCategory = 'Wedding' | 'Corporate' | 'Events' | 'Vegan' | 'Seasonal';

export interface MenuApplication {
    id: string;
    name: string;
    thumbnailUrl: string;
    catererName: string;
    category: MenuCategory;
    itemsCount: number;
    submittedDate: string;
    status: string; // e.g., 'pending', 'flagged', 'rejected', 'approved'
}

export interface ModerationStat {
    label: string;
    value: string;
    trend?: string;
    icon: string;
}

export interface ModerationTableProps {
    applications: MenuApplication[];
    isLoading?: boolean;
}
