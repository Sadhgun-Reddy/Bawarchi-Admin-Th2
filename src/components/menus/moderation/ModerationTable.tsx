import React from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { ModerationTableProps, MenuCategory } from '../../../types/menuModeration.types';

export const ModerationTable: React.FC<ModerationTableProps> = ({ applications, isLoading }) => {

    const renderCategoryBadge = (category: MenuCategory) => {
        // Specific category colors as requested
        switch (category) {
            case 'Wedding':
                return <span className="inline-flex px-2 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400 border border-transparent dark:border-purple-500/20">Wedding</span>;
            case 'Corporate':
                return <span className="inline-flex px-2 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border border-transparent dark:border-blue-500/20">Corporate</span>;
            case 'Events':
                return <span className="inline-flex px-2 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400 border border-transparent dark:border-orange-500/20">Events</span>;
            case 'Vegan':
                return <span className="inline-flex px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400 border border-transparent dark:border-green-500/20">Vegan</span>;
            case 'Seasonal':
                return <span className="inline-flex px-2 py-1 rounded-full text-xs font-medium bg-yellow-50 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400 border border-transparent dark:border-yellow-500/20">Seasonal</span>;
            default:
                return <span className="inline-flex px-2 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">Other</span>;
        }
    };

    const getInitials = (name: string) => name.substring(0, 2).toUpperCase();

    return (
        <div className="bg-surface rounded-xl shadow-stripe border border-border dark:bg-slate-900 border-none dark:border-solid dark:border-slate-800 overflow-hidden flex flex-col">
            <div className="overflow-x-auto scroller-hide">
                <table className="w-full text-left whitespace-nowrap">
                    <thead>
                        <tr className="bg-slate-50/50 dark:bg-slate-900/50 border-b border-border text-xs uppercase tracking-wider text-text-secondary font-medium">
                            <th className="px-6 py-4">Menu Name</th>
                            <th className="px-6 py-4">Caterer Name</th>
                            <th className="px-6 py-4">Category</th>
                            <th className="px-6 py-4">Items Count</th>
                            <th className="px-6 py-4">Submitted Date</th>
                            <th className="px-6 py-4 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border text-sm">
                        {isLoading ? (
                            <tr>
                                <td colSpan={6} className="px-6 py-8 text-center text-text-secondary">
                                    <div className="flex justify-center items-center">
                                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-accent"></div>
                                    </div>
                                </td>
                            </tr>
                        ) : applications.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="px-6 py-8 text-center text-text-secondary dark:text-slate-500">
                                    No menus found for this tab.
                                </td>
                            </tr>
                        ) : (
                            applications.map((app, index) => (
                                <tr
                                    key={app.id}
                                    className="hover:bg-slate-50/80 dark:hover:bg-white/5 transition-colors group dark:hover:border-accent/20 border-l-2 border-transparent dark:hover:border-l-accent animate-fade-in"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >

                                    {/* Menu Cell */}
                                    <td className="px-6 py-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 shrink-0 bg-slate-100 dark:bg-slate-800 rounded-md dark:rounded-sm overflow-hidden flex items-center justify-center text-slate-400">
                                                {/* Placeholder for real image */}
                                                <span className="text-[10px] font-mono">{app.thumbnailUrl}</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-semibold text-text-primary dark:text-white group-hover:text-accent transition-colors">
                                                    {app.name}
                                                </span>
                                                <span className="text-xs text-text-tertiary dark:text-slate-400 font-mono mt-0.5">
                                                    {app.id}
                                                </span>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Caterer Cell */}
                                    <td className="px-6 py-4">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-6 h-6 rounded-full bg-accent-muted text-accent flex items-center justify-center font-bold text-[10px] ring-1 ring-border">
                                                {getInitials(app.catererName)}
                                            </div>
                                            <span className="text-sm font-medium text-text-secondary dark:text-slate-400">
                                                {app.catererName}
                                            </span>
                                        </div>
                                    </td>

                                    <td className="px-6 py-4">
                                        {renderCategoryBadge(app.category)}
                                    </td>

                                    <td className="px-6 py-4">
                                        {/* Orange pill as an alternative style requested for items requiring attention, but we'll use a standard numeric display here */}
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-surface-secondary text-text-secondary border border-border/50 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700">
                                            {app.itemsCount} items
                                        </span>
                                    </td>

                                    <td className="px-6 py-4 text-text-secondary dark:text-slate-400 text-sm">
                                        {app.submittedDate}
                                    </td>

                                    <td className="px-6 py-4 text-right">
                                        <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold 
                      bg-surface text-text-secondary border border-border 
                      hover:bg-accent hover:text-white hover:border-accent hover:shadow-primary/20
                      dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-blue-600 dark:hover:text-white dark:hover:border-blue-500
                      transition-all shadow-sm">
                                            <Play className="w-3 h-3" strokeWidth={2.5} />
                                            Review Menu
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Footer / Pagination stub */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-border bg-surface dark:bg-slate-900 mt-auto">
                <div className="text-sm text-text-secondary dark:text-slate-400">
                    Showing <span className="font-medium text-text-primary dark:text-white">{applications.length > 0 ? 1 : 0}</span> to <span className="font-medium text-text-primary dark:text-white">{applications.length}</span> of <span className="font-medium text-text-primary dark:text-white">{applications.length}</span> results
                </div>

                <div className="flex space-x-2">
                    <button className="p-2 rounded-md border border-border text-text-secondary hover:bg-surface-secondary transition-colors disabled:opacity-50 dark:border-slate-700 dark:hover:bg-slate-800" disabled={true}>
                        <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
                    </button>
                    <button className="p-2 rounded-md border border-border text-text-secondary hover:bg-surface-secondary transition-colors disabled:opacity-50 dark:border-slate-700 dark:hover:bg-slate-800" disabled={true}>
                        <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
                    </button>
                </div>
            </div>
        </div>
    );
};
