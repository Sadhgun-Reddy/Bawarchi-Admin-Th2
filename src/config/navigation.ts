import { NavGroup } from '../types/navigation';

/**
 * Navigation Configuration
 * 
 * Updated to match all implemented pages in the application.
 * 
 * IMPLEMENTED PAGES INCLUDED:
 * - Dashboard Overview (/admin/dashboard)
 * - Reports (/admin/reports) 
 * - Audit Logs (/admin/audit-logs)
 * - Users (/admin/users)
 * - Caterers (/admin/caterers)
 * - Caterer Approvals (/admin/caterers/approvals) - ADDED
 * - Caterer Complaints (/admin/caterers/complaints) - ADDED
 * - Menu Moderation (/admin/menus/moderation) - ADDED
 * - Offers Moderation (/admin/offers/moderation) - ADDED
 * 
 * REMOVED ITEMS (no corresponding pages exist yet):
 * - Inventory (/admin/inventory)
 * - Reviews (/admin/reviews)
 * - Reported Items (/admin/reported)
 * - System Health (/admin/health)
 * - Food Rescue (/admin/rescue)
 * - Settings (/admin/settings)
 */
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
        title: "User Management",
        items: [
            { label: "Users", icon: "Users", path: "/admin/users" },
        ]
    },
    {
        title: "Caterer Management",
        items: [
            { label: "Caterers", icon: "ChefHat", path: "/admin/caterers" },
            { label: "Approvals", icon: "CheckCircle", path: "/admin/caterers/approvals" },
            { label: "Complaints", icon: "AlertTriangle", path: "/admin/caterers/complaints" },
        ]
    },
    {
        title: "Content Moderation",
        items: [
            { label: "Menu Moderation", icon: "BookOpen", path: "/admin/menus/moderation" },
            { label: "Offers Moderation", icon: "Tags", path: "/admin/offers/moderation" },
        ]
    }
];
