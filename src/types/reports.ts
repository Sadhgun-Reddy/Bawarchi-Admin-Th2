export interface ExportRecord {
    id: string;
    filename: string;
    type: string;
    dateGenerated: string;
    size: string;
    status: 'completed' | 'failed' | 'processing';
    requestedBy?: string;
}

export interface ReportConfig {
    dateRange: { start: string; end: string };
    dataSource: string;
    format: 'csv' | 'excel' | 'pdf';
    includeDrafts: boolean;
}

export interface ReportStats {
    label: string;
    value: string;
    trend?: string;
    icon: string;
}
