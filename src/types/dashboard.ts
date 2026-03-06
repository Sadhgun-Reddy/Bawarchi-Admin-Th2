export interface KpiData {
    label: string;
    value: string;
    change?: string;
    status?: 'neutral' | 'action' | 'growth';
    icon?: string;
}

export interface ActionItem {
    id: string;
    title: string;
    subtitle: string;
    type: 'verification' | 'refund' | 'approval';
    timestamp: string;
}

export interface ActivityItem {
    id: string;
    message: string;
    actor: string;
    timestamp: string;
    type: string;
}
