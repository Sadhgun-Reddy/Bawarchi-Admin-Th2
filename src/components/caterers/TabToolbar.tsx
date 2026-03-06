import { TabState } from '../../types/caterers';
import { cn } from '../../lib/utils';
import { Search } from 'lucide-react';

interface TabNavProps {
    activeTab: TabState;
    setActiveTab: (tab: TabState) => void;
}

export function TabNavigation({ activeTab, setActiveTab }: TabNavProps) {
    const tabs: TabState[] = ['Pending Review', 'Approved', 'Archived/Rejected'];

    return (
        <div className="flex items-center gap-6 border-b border-border w-full overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                        "pb-3 text-sm font-medium transition-all whitespace-nowrap",
                        activeTab === tab
                            ? "text-primary border-b-2 border-primary"
                            : "text-text-secondary hover:text-text-primary border-b-2 border-transparent"
                    )}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}

export function FilterToolbar() {
    return (
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between w-full">
            <div className="relative w-full md:w-80">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-tertiary">
                    <Search className="h-4 w-4" />
                </div>
                <input
                    type="text"
                    className="w-full pl-9 pr-4 py-2 h-9 text-sm bg-surface dark:bg-slate-card border border-border dark:border-slate-border rounded-DEFAULT focus:outline-none focus:ring-1 focus:ring-primary/20 dark:focus:ring-primary/50 transition-all text-text-primary placeholder:text-text-tertiary shadow-sm dark:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]"
                    placeholder="Filter by business name..."
                />
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
                <select className="h-9 px-3 py-1 text-sm bg-surface dark:bg-slate-card border border-border dark:border-slate-border rounded-DEFAULT focus:outline-none focus:ring-1 focus:ring-primary/20 text-text-secondary hover:bg-surface-secondary dark:hover:bg-slate-800 cursor-pointer shadow-sm dark:shadow-none flex-1 md:flex-none max-w-[150px]">
                    <option value="all">All Locations</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bengaluru">Bengaluru</option>
                </select>

                <select className="h-9 px-3 py-1 text-sm bg-surface dark:bg-slate-card border border-border dark:border-slate-border rounded-DEFAULT focus:outline-none focus:ring-1 focus:ring-primary/20 text-text-secondary hover:bg-surface-secondary dark:hover:bg-slate-800 cursor-pointer shadow-sm dark:shadow-none flex-1 md:flex-none min-w-[140px]">
                    <option value="newest">Sort by: Newest</option>
                    <option value="rating">Sort by: Highest Rating</option>
                    <option value="enquiries">Sort by: Most Enquiries</option>
                </select>
            </div>
        </div>
    );
}
