import React from 'react';
import { ChevronLeft, ChevronRight, Eye, PercentSquare, CakeSlice, Briefcase } from 'lucide-react';
import { OffersTableProps } from '../../../types/offersModeration.types';

export const OffersTable: React.FC<OffersTableProps> = ({ offers, isLoading }) => {

    const renderCategoryIcon = (category: string) => {
        switch (category) {
            case 'percentage':
                return (
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-indigo-100/50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                        <PercentSquare className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                );
            case 'cake':
                return (
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-pink-100/50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400">
                        <CakeSlice className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                );
            case 'work':
                return (
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-100/50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                        <Briefcase className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                );
            default:
                return (
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                        <PercentSquare className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                );
        }
    };

    const getInitials = (name: string) => name.substring(0, 2).toUpperCase();

    return (
        <div className="bg-surface rounded-xl shadow-float border border-border dark:bg-slate-800 dark:border-slate-700 overflow-hidden flex flex-col">
            <div className="overflow-x-auto scroller-hide">
                <table className="w-full text-left whitespace-nowrap">
                    <thead>
                        <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-border dark:border-slate-700 text-xs uppercase tracking-wider text-text-secondary font-medium dark:text-slate-400">
                            <th className="px-6 py-4">Offer Details</th>
                            <th className="px-6 py-4">Caterer Name</th>
                            <th className="px-6 py-4">Discount Value</th>
                            <th className="px-6 py-4">Validity Period</th>
                            <th className="px-6 py-4">Submitted</th>
                            <th className="px-6 py-4 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border dark:divide-slate-700 text-sm">
                        {isLoading ? (
                            <tr>
                                <td colSpan={6} className="px-6 py-8 text-center text-text-secondary">
                                    <div className="flex justify-center items-center">
                                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-accent"></div>
                                    </div>
                                </td>
                            </tr>
                        ) : offers.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="px-6 py-8 text-center text-text-secondary dark:text-slate-500">
                                    No offers found for this tab.
                                </td>
                            </tr>
                        ) : (
                            offers.map((offer, index) => (
                                <tr
                                    key={offer.id}
                                    className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors group dark:hover:border-blue-500/20 border-l-2 border-transparent dark:hover:border-l-blue-500 animate-fade-in"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >

                                    {/* Offer Cell */}
                                    <td className="px-6 py-4">
                                        <div className="flex items-center space-x-3">
                                            {renderCategoryIcon(offer.category)}
                                            <div className="flex flex-col">
                                                <span className="font-semibold text-text-primary dark:text-white group-hover:text-accent transition-colors">
                                                    {offer.title}
                                                </span>
                                                <span className="text-xs text-text-tertiary dark:text-slate-400 mt-0.5 truncate max-w-[200px]">
                                                    {offer.description}
                                                </span>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Caterer Cell */}
                                    <td className="px-6 py-4">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-6 h-6 rounded-full bg-accent-muted text-accent flex items-center justify-center font-bold text-[10px] ring-1 ring-border dark:ring-slate-700">
                                                {getInitials(offer.caterer.name)}
                                            </div>
                                            <span className="text-sm font-medium text-text-secondary dark:text-slate-400">
                                                {offer.caterer.name}
                                            </span>
                                        </div>
                                    </td>

                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800 border border-green-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20">
                                            {offer.discountValue}
                                        </span>
                                    </td>

                                    <td className="px-6 py-4">
                                        <span className="text-text-secondary dark:text-slate-400 text-sm">
                                            {offer.validity}
                                        </span>
                                    </td>

                                    <td className="px-6 py-4 text-text-secondary dark:text-slate-400 text-sm">
                                        {offer.submittedAt}
                                    </td>

                                    <td className="px-6 py-4 text-right">
                                        <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold 
                      bg-surface text-text-secondary border border-border 
                      hover:bg-accent hover:text-white hover:border-accent hover:shadow-accent/20
                      dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-blue-600 dark:hover:text-white dark:hover:border-blue-500 dark:hover:shadow-blue-500/20
                      transition-all shadow-sm">
                                            <Eye className="w-3 h-3" strokeWidth={2.5} />
                                            Review Offer
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Footer / Pagination stub */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-border dark:border-slate-700 bg-surface dark:bg-slate-800 mt-auto">
                <div className="text-sm text-text-secondary dark:text-slate-400">
                    Showing <span className="font-medium text-text-primary dark:text-white">{offers.length > 0 ? 1 : 0}</span> to <span className="font-medium text-text-primary dark:text-white">{offers.length}</span> of <span className="font-medium text-text-primary dark:text-white">{offers.length}</span> results
                </div>

                <div className="flex space-x-2">
                    <button className="p-2 rounded-md border border-border text-text-secondary hover:bg-surface-secondary transition-colors disabled:opacity-50 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700" disabled={true}>
                        <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
                    </button>
                    <button className="p-2 rounded-md border border-border text-text-secondary hover:bg-surface-secondary transition-colors disabled:opacity-50 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700" disabled={true}>
                        <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
                    </button>
                </div>
            </div>
        </div>
    );
};
