export interface CatererApplication {
    id: string; // App ID
    businessName: string;
    ownerName: string;
    location: string;
    experience: string;
    submittedDate: string;
    status: 'pending' | 'approved' | 'rejected' | 'active';
}

export interface ApprovalsStat {
    label: string;
    value: string;
    subValue?: string;
    trend?: {
        type: 'up' | 'down';
        value: string;
    };
}

export interface ApprovalsTableProps {
    applications: CatererApplication[];
}

export interface ApprovalsStatsGridProps {
    stats: ApprovalsStat[];
}

export interface ApprovalsTabsProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
    counts: Record<string, number>;
}
