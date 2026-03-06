import { AuditLog } from '../types/audit';

export const mockAuditLogs: AuditLog[] = [
    {
        id: "AL-1001",
        timestamp: "2026-03-06T14:30:00Z",
        actor: { name: "Sarah Jennings", role: "Super Admin", initials: "SJ" },
        action: "Updated system pricing tiers",
        resourceId: "pricing_config_v4",
        ipAddress: "192.168.1.104",
        status: "success"
    },
    {
        id: "AL-1002",
        timestamp: "2026-03-06T14:15:22Z",
        actor: { name: "Michael Chen", role: "Content Moderator", initials: "MC" },
        action: "Flagged review for policy violation",
        resourceId: "rev_893245",
        ipAddress: "10.0.4.15",
        status: "warning"
    },
    {
        id: "AL-1003",
        timestamp: "2026-03-06T13:45:10Z",
        actor: { name: "System", role: "Automated Process", initials: "SYS" },
        action: "Failed to sync inventory delta",
        resourceId: "sync_job_992",
        ipAddress: "Server-East-1",
        status: "failure"
    },
    {
        id: "AL-1004",
        timestamp: "2026-03-06T11:20:05Z",
        actor: { name: "David Miller", role: "Regional Manager", initials: "DM" },
        action: "Approved new partner application",
        resourceId: "partner_req_04",
        ipAddress: "172.16.254.1",
        status: "success"
    },
    {
        id: "AL-1005",
        timestamp: "2026-03-06T09:10:44Z",
        actor: { name: "Elena Rossi", role: "Support Agent", initials: "ER" },
        action: "Password reset requested",
        resourceId: "user_54921",
        ipAddress: "198.51.100.14",
        status: "success"
    },
    {
        id: "AL-1006",
        timestamp: "2026-03-06T08:05:12Z",
        actor: { name: "Sarah Jennings", role: "Super Admin", initials: "SJ" },
        action: "Modified user role permissions",
        resourceId: "role_mod_id",
        ipAddress: "192.168.1.104",
        status: "warning"
    }
];
