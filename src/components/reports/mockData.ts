import { ExportRecord, ReportStats } from '../../types/reports';

export const mockReportStats: ReportStats[] = [
    { label: "Total Exports", value: "2,481", trend: "+12% this month", icon: "Download" },
    { label: "Storage Used", value: "12.4 GB", icon: "HardDrive" },
    { label: "Scheduled Reports", value: "14 Active", icon: "Clock" },
];

export const mockExports: ExportRecord[] = [
    {
        id: "exp_1092",
        filename: "q3_financial_closing_final",
        type: "pdf",
        dateGenerated: "2026-03-05 14:30",
        requestedBy: "Sarah Jennings",
        size: "4.2 MB",
        status: "completed"
    },
    {
        id: "exp_1093",
        filename: "inventory_delta_mar6",
        type: "excel",
        dateGenerated: "2026-03-06 09:15",
        requestedBy: "System Schedule",
        size: "1.1 MB",
        status: "failed"
    },
    {
        id: "exp_1094",
        filename: "user_activity_30days",
        type: "csv",
        dateGenerated: "2026-03-06 15:20",
        requestedBy: "Michael Chen",
        size: "--",
        status: "processing"
    },
    {
        id: "exp_1095",
        filename: "partner_payouts_feb2026",
        type: "excel",
        dateGenerated: "2026-03-01 10:00",
        requestedBy: "David Miller",
        size: "8.5 MB",
        status: "completed"
    },
];
