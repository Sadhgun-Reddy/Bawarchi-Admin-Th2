import { User } from '../../types/users';

export const mockUsers: User[] = [
    {
        id: "usr_001",
        name: "Alice Freeman",
        email: "alice.freeman@example.com",
        role: "Admin",
        status: "active",
        lastActive: "2 mins ago",
        joinedDate: "Jan 12, 2026"
    },
    {
        id: "usr_002",
        name: "Bob Smith",
        email: "bsmith@cateringco.com",
        avatarUrl: "https://i.pravatar.cc/150?u=bob",
        role: "Caterer",
        status: "active",
        lastActive: "1 hour ago",
        joinedDate: "Feb 04, 2026"
    },
    {
        id: "usr_003",
        name: "Aarav Patel",
        email: "apatel@example.com",
        role: "Vendor",
        status: "pending",
        lastActive: "Never",
        joinedDate: "Mar 05, 2026"
    },
    {
        id: "usr_004",
        name: "Diana Gomez",
        email: "diana.g@example.com",
        avatarUrl: "https://i.pravatar.cc/150?u=diana",
        role: "Customer",
        status: "suspended",
        lastActive: "3 days ago",
        joinedDate: "Dec 18, 2025"
    },
    {
        id: "usr_005",
        name: "Marcus Johnson",
        email: "marcus.j@example.com",
        role: "Customer",
        status: "banned",
        lastActive: "1 week ago",
        joinedDate: "Nov 22, 2025"
    }
];
