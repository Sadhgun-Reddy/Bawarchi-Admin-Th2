import { NavGroup } from '../types/navigation';

export const navigationConfig: NavGroup[] = [
    {
        title: "Operations",
        items: [
            { label: "Overview", icon: "LayoutDashboard", path: "/admin/dashboard" },
            { label: "Reports", icon: "FileText", path: "/admin/reports" },
            { label: "Audit Logs", icon: "History", path: "/admin/audit-logs" },
        ]
    },
    {
        title: "Management",
        items: [
            { label: "User Roles", icon: "Users", path: "/admin/users" },
            { label: "Caterers", icon: "ChefHat", path: "/admin/caterers" },
            { label: "Inventory", icon: "Package", path: "/admin/inventory" },
        ]
    },
    {
        title: "Content",
        items: [
            { label: "Reviews", icon: "Star", path: "/admin/reviews" },
            { label: "Reported Items", icon: "AlertTriangle", path: "/admin/reported" },
        ]
    },
    {
        title: "System",
        items: [
            { label: "System Health", icon: "Activity", path: "/admin/health" },
            { label: "Food Rescue", icon: "Heart", path: "/admin/rescue" },
            { label: "Settings", icon: "Settings", path: "/admin/settings" },
        ]
    }
];
