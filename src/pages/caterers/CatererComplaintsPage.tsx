
import { ComplaintsPageLayout } from '../../components/caterers/complaints/ComplaintsPageLayout';

export function CatererComplaintsPage() {
    return (
        <div className="flex flex-col w-full h-full animate-fade-in relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 bg-background transition-colors dark:bg-slate-950">
            <ComplaintsPageLayout />
        </div>
    );
}
