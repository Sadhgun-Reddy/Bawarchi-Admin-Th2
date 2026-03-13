export interface ComplaintCaterer {
    name: string;
    tier: string;
    logo: string;
}

export interface ComplaintCustomer {
    name: string;
    email: string;
}

export type ComplaintStatus = 'open' | 'resolved' | 'pending' | 'in-progress';

export interface Complaint {
    id: string;
    caterer: ComplaintCaterer;
    customer: ComplaintCustomer;
    issueType: string;
    date: string;
    status: ComplaintStatus;
}

export interface ComplaintStat {
    label: string;
    value: string;
    trend: string;
    icon: string;
}

export interface ComplaintsTableProps {
    complaints: Complaint[];
    isLoading?: boolean;
}
