import { DashboardHeader } from '../../components/dashboard/DashboardHeader';
import { StatGrid, KpiCard } from '../../components/dashboard/StatGrid';
import { ChartSection } from '../../components/dashboard/ChartSection';
import { SplitView, ActionList, ActivityTimeline } from '../../components/dashboard/SplitView';
import { useDashboardContext } from '../../contexts/DashboardContext';

export function DashboardOverview() {
    const { kpis, actions, activities, reviewAction } = useDashboardContext();

    return (
        <div className="flex flex-col w-full h-full animate-fade-in relative max-w-[1600px] mx-auto pb-10 gap-6">
            <DashboardHeader />

            <StatGrid>
                {kpis.map((kpi, idx) => (
                    <KpiCard key={idx} {...kpi} />
                ))}
            </StatGrid>

            <ChartSection />

            <SplitView>
                <ActionList items={actions} onReview={reviewAction} />
                <ActivityTimeline items={activities} />
            </SplitView>
        </div>
    );
}
