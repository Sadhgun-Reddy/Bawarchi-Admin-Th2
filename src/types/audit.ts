export interface Actor {
    name: string;
    role: string;
    initials: string;
    avatarUrl?: string;
}

export interface AuditLog {
    id: string;
    timestamp: string;
    actor: Actor;
    action: string;
    resourceId: string;
    ipAddress: string;
    status: 'success' | 'warning' | 'failure';
}

export interface FilterState {
    searchQuery: string;
    dateRange: string | null;
    actorId: string | null;
    resourceType: string | null;
}
