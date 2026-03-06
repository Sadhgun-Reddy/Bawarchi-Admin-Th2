import { MoreVertical, Star, TrendingUp, TrendingDown, Eye, Edit2 } from 'lucide-react';
import { CatererTableProps } from '../../types/caterers';
import { cn } from '../../lib/utils';

export function CatererDataTable({ caterers, isLoading }: CatererTableProps) {
    const getStatusStyles = (status: string) => {
        switch (status) {
            case 'active': return "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20";
            case 'review': return "bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20";
            case 'archived': return "bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-500/10 dark:text-slate-400 dark:border-slate-500/20";
            default: return "bg-slate-50 text-slate-700 border-slate-200";
        }
    };

    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    };

    if (isLoading) {
        return <div className="p-8 text-center text-text-secondary">Loading caterers...</div>;
    }

    return (
        <div className={cn(
            "w-full bg-white dark:bg-slate-card border border-border dark:border-slate-border rounded-xl overflow-hidden transition-all duration-normal ease-smooth",
            "shadow-card dark:shadow-none dark:matte-surface"
        )}>
            <div className="overflow-x-auto no-scrollbar">
                <table className="w-full text-left text-sm whitespace-nowrap table-auto min-w-[1000px]">

                    <thead className="bg-slate-50/50 dark:bg-[#1E293B] border-b border-border dark:border-slate-border text-text-secondary uppercase text-xs tracking-wider">
                        <tr>
                            <th className="px-6 py-4 font-semibold w-auto">Business Info</th>
                            <th className="px-6 py-4 font-semibold w-40">Location</th>
                            <th className="px-6 py-4 font-semibold w-32">Rating</th>
                            <th className="px-6 py-4 font-semibold w-32">Enquiries</th>
                            <th className="px-6 py-4 font-semibold w-40">Profile Views</th>
                            <th className="px-6 py-4 font-semibold w-24">Status</th>
                            <th className="px-6 py-4 w-16 text-right sr-only">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-border dark:divide-slate-800/50">
                        {caterers.map((caterer) => (
                            <tr
                                key={caterer.id}
                                className="group hover:bg-slate-50/80 dark:hover:bg-slate-800/50 hover:border-transparent dark:hover:border-slate-500/50 transition-all duration-normal ease-smooth"
                            >

                                {/* Business Info */}
                                <td className="px-6 py-4 align-middle">
                                    <div className="flex items-center gap-4">
                                        {caterer.logoUrl ? (
                                            <img src={caterer.logoUrl} alt={caterer.name} className="w-12 h-12 rounded-full dark:rounded-lg object-cover border border-border shadow-sm" />
                                        ) : (
                                            <div className="w-12 h-12 rounded-full dark:rounded-lg flex items-center justify-center font-bold text-lg bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 border border-border">
                                                {getInitials(caterer.name)}
                                            </div>
                                        )}
                                        <div className="flex flex-col">
                                            <span className="font-bold text-text-primary dark:text-white group-hover:text-primary transition-colors cursor-pointer text-base">
                                                {caterer.name}
                                            </span>
                                            <div className="flex items-center gap-2 text-xs text-text-tertiary dark:text-slate-400 mt-0.5">
                                                <span>{caterer.email}</span>
                                                <span className="w-1 h-1 rounded-full bg-border"></span>
                                                <span className="font-mono">{caterer.id}</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                {/* Location */}
                                <td className="px-6 py-4 align-middle font-medium text-text-secondary dark:text-slate-300">
                                    {caterer.location}
                                </td>

                                {/* Rating */}
                                <td className="px-6 py-4 align-middle">
                                    <div className="flex items-center gap-1.5">
                                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                        <span className="font-bold text-text-primary dark:text-white">{caterer.rating.toFixed(1)}</span>
                                        <span className="text-xs text-text-tertiary dark:text-slate-500">({caterer.reviewCount})</span>
                                    </div>
                                </td>

                                {/* Enquiries */}
                                <td className="px-6 py-4 align-middle">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-text-primary dark:text-white">{caterer.enquiries.count} <span className="text-text-secondary text-xs font-normal">/mo</span></span>
                                        <div className={cn(
                                            "flex items-center gap-1 text-[11px] font-medium mt-1 w-fit px-1.5 py-0.5 rounded",
                                            caterer.enquiries.trend > 0 ? "text-emerald-700 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-500/10" : "text-amber-700 bg-amber-50 dark:text-amber-400 dark:bg-amber-500/10"
                                        )}>
                                            {caterer.enquiries.trend > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                            {Math.abs(caterer.enquiries.trend)}%
                                        </div>
                                    </div>
                                </td>

                                {/* Profile Views ProgressBar */}
                                <td className="px-6 py-4 align-middle">
                                    <div className="flex flex-col gap-2 relative w-32">
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="font-bold text-text-primary dark:text-white">{caterer.profileViews.count}</span>
                                        </div>
                                        {/* Progress Track */}
                                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                            {/* Progress Fill */}
                                            <div
                                                className="h-full bg-blue-500 dark:bg-blue-400 rounded-full"
                                                style={{ width: `${caterer.profileViews.progress}%` }}
                                            />
                                        </div>
                                    </div>
                                </td>

                                {/* Status */}
                                <td className="px-6 py-4 align-middle">
                                    <span className={cn(
                                        "inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase border",
                                        getStatusStyles(caterer.status)
                                    )}>
                                        {caterer.status === 'review' ? 'Pending' : caterer.status}
                                    </span>
                                </td>

                                {/* Actions */}
                                <td className="px-6 py-4 align-middle text-right">
                                    <div className="flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-normal gap-1">
                                        <button className="flex items-center justify-center p-1.5 text-text-tertiary hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded transition-colors" title="View Details">
                                            <Eye strokeWidth={1.5} className="w-4 h-4" />
                                        </button>
                                        <button className="flex items-center justify-center p-1.5 text-text-tertiary hover:text-text-primary hover:bg-surface-secondary dark:hover:bg-slate-700/50 rounded transition-colors" title="Edit">
                                            <Edit2 strokeWidth={1.5} className="w-4 h-4" />
                                        </button>
                                        <button className="flex items-center justify-center p-1.5 text-text-tertiary hover:text-text-primary hover:bg-surface-secondary dark:hover:bg-slate-700/50 rounded transition-colors" title="More options">
                                            <MoreVertical strokeWidth={1.5} className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
