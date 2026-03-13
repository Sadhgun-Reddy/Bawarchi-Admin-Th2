import React, { useEffect, useState } from 'react';
import { ApprovalsTableProps, CatererApplication } from '../../../types/catererApprovals.types';
import { TableFooter } from './TableFooter';

export const ApprovalsTable: React.FC<ApprovalsTableProps> = ({ applications }) => {
    // Key state is used to trigger re-animation when data changes
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        setAnimationKey(prev => prev + 1);
    }, [applications]);

    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .substring(0, 2)
            .toUpperCase();
    };

    // Predefined background colors for initials to create visual variety
    const getAvatarBg = (id: string) => {
        const colors = [
            'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400',
            'bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400',
            'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400',
            'bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400',
            'bg-pink-100 text-pink-700 dark:bg-pink-500/20 dark:text-pink-400',
        ];
        // Use last char of ID to pick a consistent color
        const num = id.charCodeAt(id.length - 1);
        return colors[num % colors.length];
    };

    return (
        <div className="card-surface overflow-hidden flex flex-col">
            <div className="overflow-x-auto scroller-hide">
                <table className="w-full text-left" key={animationKey}>
                    <thead>
                        <tr className="bg-surface-secondary border-b border-border text-xs uppercase tracking-wider text-text-secondary font-medium">
                            <th className="px-6 py-4">App ID</th>
                            <th className="px-6 py-4">Business Name</th>
                            <th className="px-6 py-4">Owner Name</th>
                            <th className="px-6 py-4">Location</th>
                            <th className="px-6 py-4">Experience</th>
                            <th className="px-6 py-4">Submitted Date</th>
                            <th className="px-6 py-4text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border text-sm">
                        {applications.length === 0 ? (
                            <tr>
                                <td colSpan={7} className="px-6 py-8 text-center text-text-secondary">
                                    No applications found.
                                </td>
                            </tr>
                        ) : (
                            applications.map((app, index) => (
                                <tr
                                    key={app.id}
                                    className="hover:bg-surface-secondary dark:hover:bg-border/20 transition-colors animate-fade-in group"
                                    style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
                                >
                                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                                        {app.id}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center space-x-3">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-xs ${getAvatarBg(app.id)}`}>
                                                {getInitials(app.businessName)}
                                            </div>
                                            <span className="font-medium text-text-primary group-hover:text-accent transition-colors">
                                                {app.businessName}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-text-secondary">
                                        {app.ownerName}
                                    </td>
                                    <td className="px-6 py-4 text-text-secondary">
                                        {app.location}
                                    </td>
                                    <td className="px-6 py-4 text-text-secondary">
                                        {app.experience}
                                    </td>
                                    <td className="px-6 py-4 text-text-secondary">
                                        {app.submittedDate}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="px-3 py-1.5 rounded-md text-xs font-medium 
                      bg-accent/10 text-accent hover:bg-accent/20 
                      dark:shadow-sm dark:shadow-accent/20 transition-all">
                                            Review
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            <TableFooter start={1} end={applications.length} total={applications.length} />
        </div>
    );
};
