
import { AuditHeader, AuditFilters } from '../../components/audit/AuditLayoutElements';
import { AuditTable } from '../../components/audit/AuditTable';
import { mockAuditLogs } from '../../components/audit/mockData';

export function AuditLogsPage() {
    return (
        <div className="flex flex-col w-full h-full animate-fade-in relative max-w-[1600px] mx-auto">
            <AuditHeader />
            <AuditFilters />
            <AuditTable data={mockAuditLogs} />
        </div>
    );
}
