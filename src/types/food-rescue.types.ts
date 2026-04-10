export interface Donation {
    id: string;
    donorName: string;
    foodDescription: {
        title: string;
        details: string;
    };
    quantity: string;
    pickupLocation: string;
    expiryTime: {
        value: string;
        urgency: 'high' | 'medium' | 'low';
    };
    status: 'pending' | 'approved' | 'rejected' | 'history';
}
