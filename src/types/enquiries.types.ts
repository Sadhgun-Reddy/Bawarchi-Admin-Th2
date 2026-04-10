export interface Enquiry {
    id: string;
    customer: {
        name: string;
        email: string;
        initials: string;
        avatar?: string;
    };
    targetCaterer: string;
    eventDate: string;
    status: 'pending' | 'responded' | 'closed';
}
