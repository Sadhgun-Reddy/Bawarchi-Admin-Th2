import React, { createContext, useContext, useState, useEffect } from 'react';
import { KpiData, ActionItem, ActivityItem } from '../types/dashboard';

const initialMockKpis: KpiData[] = [
    { label: "Total Revenue", value: "$124,500", change: "+12.5%", status: "growth", icon: "DollarSign" },
    { label: "Active Users", value: "3,402", change: "+4.2%", status: "growth", icon: "Users" },
    { label: "Pending Signups", value: "14", change: "Requires Action", status: "action", icon: "Clock" },
    { label: "Refund Rate", value: "1.2%", status: "neutral", icon: "RotateCcw" },
    { label: "Chef Applications", value: "8", change: "Requires Review", status: "action", icon: "FileText" },
    { label: "System Uptime", value: "99.99%", status: "neutral", icon: "Activity" },
];

const initialMockActions: ActionItem[] = [
    { id: "act-1", title: "Verify 'Spicy Kitchen' Chef Profile", subtitle: "Documents pending review since yesterday", type: "verification", timestamp: "1d ago" },
    { id: "act-2", title: "Approve Menu Price Updates", subtitle: "Bulk update requested by Regional Manager", type: "approval", timestamp: "2h ago" },
    { id: "act-3", title: "Review High-Value Refund Request", subtitle: "Order #88392 exceeds auto-refund threshold", type: "refund", timestamp: "45m ago" },
];

const initialMockActivities: ActivityItem[] = [
    { id: "ev-1", message: "System configuration updated", actor: "S. Jennings (Super Admin)", timestamp: "10:30 AM", type: "system" },
    { id: "ev-2", message: "New caterer onboarding completed", actor: "System Automation", timestamp: "09:15 AM", type: "user" },
    { id: "ev-3", message: "Weekly payout batch processing started", actor: "System Automation", timestamp: "08:00 AM", type: "financial" },
    { id: "ev-4", message: "Failed login attempts detected from IP 192.168.1.5", actor: "Security Monitor", timestamp: "Yesterday", type: "security" },
];

interface DashboardContextType {
    kpis: KpiData[];
    actions: ActionItem[];
    activities: ActivityItem[];
    reviewAction: (id: string) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const DashboardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [kpis] = useState<KpiData[]>(() => {
        const stored = localStorage.getItem('dashboard_kpis');
        return stored ? JSON.parse(stored) : initialMockKpis;
    });

    const [actions, setActions] = useState<ActionItem[]>(() => {
        const stored = localStorage.getItem('dashboard_actions');
        return stored ? JSON.parse(stored) : initialMockActions;
    });

    const [activities, setActivities] = useState<ActivityItem[]>(() => {
        const stored = localStorage.getItem('dashboard_activities');
        return stored ? JSON.parse(stored) : initialMockActivities;
    });

    useEffect(() => {
        localStorage.setItem('dashboard_kpis', JSON.stringify(kpis));
    }, [kpis]);

    useEffect(() => {
        localStorage.setItem('dashboard_actions', JSON.stringify(actions));
    }, [actions]);

    useEffect(() => {
        localStorage.setItem('dashboard_activities', JSON.stringify(activities));
    }, [activities]);

    const reviewAction = (id: string) => {
        setActions(prev => {
            const actionReviewed = prev.find(a => a.id === id);
            if (actionReviewed) {
                 const newActivity: ActivityItem = {
                    id: `ev-${Date.now()}`,
                    message: `Reviewed action: ${actionReviewed.title}`,
                    actor: "Current User",
                    timestamp: "Just now",
                    type: "system"
                };
                setActivities(prevActivities => [newActivity, ...prevActivities].slice(0, 5)); // Keep latest 5
            }
            return prev.filter(action => action.id !== id);
        });
    };

    return (
        <DashboardContext.Provider value={{ kpis, actions, activities, reviewAction }}>
            {children}
        </DashboardContext.Provider>
    );
};

export const useDashboardContext = () => {
    const context = useContext(DashboardContext);
    if (!context) {
        throw new Error('useDashboardContext must be used within a DashboardProvider');
    }
    return context;
};
