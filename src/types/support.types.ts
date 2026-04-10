export interface Ticket {
    id: string;
    user: {
        name: string;
        role: 'Caterer' | 'User';
        avatar?: string;
        initials: string;
    };
    subject: string;
    priority: 'High' | 'Medium' | 'Low';
    status: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
    lastUpdated: string;
}
