import { ReportsHeader } from '../../components/reports/ReportsHeader';
import { ReportGenerator } from '../../components/reports/ReportGenerator';
import { StatsGrid } from '../../components/reports/StatsGrid';
import { ExportHistoryTable } from '../../components/reports/ExportHistoryTable';
import { useReportsContext } from '../../contexts/ReportsContext';

export function ReportsExportsPage() {
    const { stats, exports } = useReportsContext();

    return (
        <div className="flex flex-col w-full h-full animate-fade-in relative max-w-[1600px] mx-auto pb-10 gap-6">
            <ReportsHeader />
            <ReportGenerator />
            <StatsGrid stats={stats} />
            <ExportHistoryTable records={exports} />
        </div>
    );
}
