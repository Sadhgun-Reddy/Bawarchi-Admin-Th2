import { UserDetails, BookingHistory, SupportTicket } from '../../types/users';

export const mockUserDetails: UserDetails = {
    id: "BB-8839",
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    phone: "+91 98765 43210",
    registrationDate: "Jan 15, 2026",
    lastLogin: {
        date: "Today, 10:45 AM",
        ip: "192.168.1.45"
    },
    status: "active",
    role: "Admin"
};

export const mockUserBookings: BookingHistory[] = [
    {
        id: "bkg_01",
        event: "Corporate Offsite",
        cuisine: "North Indian",
        date: "Oct 12, 2026",
        budget: "₹50,000",
        status: "Completed"
    },
    {
        id: "bkg_02",
        event: "Wedding Reception",
        cuisine: "Multi-Cuisine",
        date: "Nov 25, 2026",
        budget: "₹2,50,000",
        status: "Upcoming"
    },
    {
        id: "bkg_03",
        event: "Birthday Party",
        cuisine: "Italian",
        date: "Dec 05, 2026",
        budget: "₹15,000",
        status: "Pending"
    }
];

export const mockUserTickets: SupportTicket[] = [
    {
        id: "TCK-1042",
        title: "Payment Integration Issue",
        description: "Transaction failed while attempting to pay caterer advance.",
        priority: "high",
        status: "Open",
        timestamp: "2 hours ago"
    },
    {
        id: "TCK-0985",
        title: "Menu Modification Request",
        description: "Requested change in the dessert options for the impending corporate offsite.",
        priority: "medium",
        status: "Resolved",
        timestamp: "3 days ago"
    }
];
