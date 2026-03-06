import { Caterer } from '../../types/caterers';

export const mockCaterers: Caterer[] = [
    {
        id: "cat_001",
        name: "Spicy Saffron Events",
        email: "contact@spicysaffron.com",
        location: "Mumbai, MH",
        rating: 4.8,
        reviewCount: 342,
        enquiries: { count: 124, trend: 15 },
        profileViews: { count: "2.4k", progress: 85 },
        status: "active"
    },
    {
        id: "cat_002",
        name: "Royal Tandoor Caterers",
        email: "info@royaltandoor.in",
        logoUrl: "https://i.pravatar.cc/150?u=royal",
        location: "Delhi, DL",
        rating: 4.5,
        reviewCount: 189,
        enquiries: { count: 89, trend: 5 },
        profileViews: { count: "1.8k", progress: 60 },
        status: "active"
    },
    {
        id: "cat_011",
        name: "Spicy Saffron Events",
        email: "contact@spicysaffron.com",
        location: "Mumbai, MH",
        rating: 4.8,
        reviewCount: 342,
        enquiries: { count: 124, trend: 15 },
        profileViews: { count: "2.4k", progress: 85 },
        status: "active"
    },
    {
        id: "cat_012",
        name: "Royal Tandoor Caterers",
        email: "info@royaltandoor.in",
        logoUrl: "https://i.pravatar.cc/150?u=royal",
        location: "Delhi, DL",
        rating: 4.5,
        reviewCount: 189,
        enquiries: { count: 89, trend: 5 },
        profileViews: { count: "1.8k", progress: 60 },
        status: "active"
    },
    {
        id: "cat_003",
        name: "Coastal Curry House",
        email: "hello@coastalcurry.com",
        location: "Goa, GA",
        rating: 4.9,
        reviewCount: 56,
        enquiries: { count: 42, trend: 28 },
        profileViews: { count: "950", progress: 45 },
        status: "review"
    },
    {
        id: "cat_004",
        name: "Urban Spice Banquets",
        email: "book@urbanspice.com",
        logoUrl: "https://i.pravatar.cc/150?u=urban",
        location: "Bengaluru, KA",
        rating: 4.2,
        reviewCount: 210,
        enquiries: { count: 156, trend: -2 },
        profileViews: { count: "3.1k", progress: 92 },
        status: "review"
    },
    {
        id: "cat_005",
        name: "Desi Dhaba Experiences",
        email: "events@desidhaba.in",
        location: "Pune, MH",
        rating: 3.8,
        reviewCount: 45,
        enquiries: { count: 12, trend: -15 },
        profileViews: { count: "420", progress: 20 },
        status: "archived"
    }
];
