import React from 'react';
import { DashboardHeader } from '../../components/dashboard/DashboardHeader';
import { StatGrid, KpiCard } from '../../components/dashboard/StatGrid';
import { ChartSection } from '../../components/dashboard/ChartSection';
import { SplitView, ActionList, ActivityTimeline } from '../../components/dashboard/SplitView';
import { KpiData, ActionItem, ActivityItem } from '../../types/dashboard';

const mockKpis: KpiData[] = [
    { label: "Total Revenue", value: "$124,500", change: "+12.5%", status: "growth", icon: "DollarSign" },
    { label: "Active Users", value: "3,402", change: "+4.2%", status: "growth", icon: "Users" },
    { label: "Pending Signups", value: "14", change: "Requires Action", status: "action", icon: "Clock" },
    { label: "Refund Rate", value: "1.2%", status: "neutral", icon: "RotateCcw" },
    { label: "Chef Applications", value: "8", change: "Requires Review", status: "action", icon: "FileText" },
    { label: "System Uptime", value: "99.99%", status: "neutral", icon: "Activity" },
];

const mockActions: ActionItem[] = [
    { id: "act-1", title: "Verify 'Spicy Kitchen' Chef Profile", subtitle: "Documents pending review since yesterday", type: "verification", timestamp: "1d ago" },
    { id: "act-2", title: "Approve Menu Price Updates", subtitle: "Bulk update requested by Regional Manager", type: "approval", timestamp: "2h ago" },
    { id: "act-3", title: "Review High-Value Refund Request", subtitle: "Order #88392 exceeds auto-refund threshold", type: "refund", timestamp: "45m ago" },
];

const mockActivities: ActivityItem[] = [
    { id: "ev-1", message: "System configuration updated", actor: "S. Jennings (Super Admin)", timestamp: "10:30 AM", type: "system" },
    { id: "ev-2", message: "New caterer onboarding completed", actor: "System Automation", timestamp: "09:15 AM", type: "user" },
    { id: "ev-3", message: "Weekly payout batch processing started", actor: "System Automation", timestamp: "08:00 AM", type: "financial" },
    { id: "ev-4", message: "Failed login attempts detected from IP 192.168.1.5", actor: "Security Monitor", timestamp: "Yesterday", type: "security" },
];

export function DashboardOverview() {
    return (
        <div className="flex flex-col w-full h-full animate-fade-in relative max-w-[1600px] mx-auto pb-10 gap-6">
            <DashboardHeader />

            <StatGrid>
                {mockKpis.map((kpi, idx) => (
                    <KpiCard key={idx} {...kpi} />
                ))}
            </StatGrid>

            <ChartSection />

            <SplitView>
                <ActionList items={mockActions} />
                <ActivityTimeline items={mockActivities} />
            </SplitView>
        </div>
    );
}
