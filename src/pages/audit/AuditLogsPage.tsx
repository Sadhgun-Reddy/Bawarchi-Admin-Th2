import {
    AuditHeader,
    AuditFilters
} from '../../components/audit/AuditLayoutElements';
import { AuditTable } from '../../components/audit/AuditTable';
import { useAuditContext } from '../../contexts/AuditContext';

export function AuditLogsPage() {
    const { logs } = useAuditContext();

    return (
        <div className="flex flex-col w-full h-full animate-fade-in relative max-w-[1600px] mx-auto pb-10 gap-6">
            <AuditHeader />
            <div className="flex flex-col gap-4">
                <AuditFilters />
                <AuditTable data={logs} />
            </div>
        </div>
    );
}
