import React from 'react';
import { ChevronRight, ArrowUpDown } from 'lucide-react';
import { AuditLog } from '../../types/audit';
import { cn } from '../../lib/utils';
import { useTheme } from '../../contexts/ThemeContext';

interface AuditTableProps {
    data: AuditLog[];
}

export function AuditTable({ data }: AuditTableProps) {
    const { theme } = useTheme();

    return (
        <div className="w-full bg-surface dark:bg-[#1E293B] border border-border rounded-[8px] overflow-hidden shadow-elevation-1 dark:shadow-none transition-all duration-normal ease-smooth dark:matte-surface">
            <div className="overflow-x-auto no-scrollbar">
                <table className="w-full text-left text-sm whitespace-nowrap table-auto">

                    <thead className="bg-surface-secondary/50 border-b border-border text-text-secondary sticky top-0 z-10">
                        <tr>
                            <th className="px-6 py-4 font-semibold w-48 group cursor-pointer hover:text-text-primary transition-colors">
                                <div className="flex items-center justify-between">
                                    Timestamp
                                    <ArrowUpDown className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </th>
                            <th className="px-6 py-4 font-semibold">Actor</th>
                            <th className="px-6 py-4 font-semibold">Action / Event</th>
                            <th className="px-6 py-4 font-semibold">Resource</th>
                            <th className="px-6 py-4 font-semibold w-32">IP Address</th>
                            <th className="px-6 py-4 font-semibold text-center w-24">Status</th>
                            <th className="px-6 py-4 w-12 text-center sr-only">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-border">
                        {data.map((log) => (
                            <tr
                                key={log.id}
                                className="group hover:bg-surface-secondary/80 dark:hover:bg-[#2C3849] transition-colors duration-normal ease-smooth cursor-pointer"
                            >

                                {/* Timestamp */}
                                <td className="px-6 py-4 text-text-secondary border-t-0 align-middle">
                                    {new Date(log.timestamp).toLocaleString('en-US', {
                                        dateStyle: 'medium',
                                        timeStyle: 'medium'
                                    })}
                                </td>

                                {/* Actor */}
                                <td className="px-6 py-4 align-middle">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-accent-muted flex items-center justify-center text-accent font-semibold text-xs shrink-0">
                                            {log.actor.initials}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-medium text-text-primary">{log.actor.name}</span>
                                            <span className="text-xs text-text-tertiary">{log.actor.role}</span>
                                        </div>
                                    </div>
                                </td>

                                {/* Action */}
                                <td className="px-6 py-4 align-middle text-text-primary">
                                    {log.action}
                                </td>

                                {/* Resource */}
                                <td className="px-6 py-4 align-middle">
                                    <span className="font-mono text-xs px-2 py-1 rounded bg-surface-secondary dark:bg-[#0F172A] text-text-secondary border border-transparent dark:border-border group-hover:text-accent decoration-accent underline-offset-4 group-hover:underline transition-all duration-normal">
                                        {log.resourceId}
                                    </span>
                                </td>

                                {/* IP Address */}
                                <td className="px-6 py-4 align-middle text-text-tertiary">
                                    <span className="font-mono text-xs">{log.ipAddress}</span>
                                </td>

                                {/* Status Badge */}
                                <td className="px-6 py-4 align-middle text-center">
                                    <span className={cn(
                                        "inline-flex items-center justify-center px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide border",
                                        log.status === 'success' && "bg-success-muted/50 text-success-foreground border-success/20 dark:bg-success/10 dark:text-success dark:border-success/20",
                                        log.status === 'warning' && "bg-warning-muted/50 text-warning-foreground border-warning/20 dark:bg-warning/10 dark:text-warning dark:border-warning/20",
                                        log.status === 'failure' && "bg-destructive-muted/50 text-destructive-foreground border-destructive/20 dark:bg-destructive/10 dark:text-destructive dark:border-destructive/20"
                                    )}>
                                        {log.status}
                                    </span>
                                </td>

                                {/* Action Chevron */}
                                <td className="px-6 py-4 align-middle text-right text-text-tertiary">
                                    <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-normal" />
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Table Pagination Placeholder */}
            <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 border-t border-border bg-surface-secondary/30 dark:bg-transparent">
                <span className="text-sm text-text-secondary mb-4 sm:mb-0">
                    Showing <span className="font-semibold text-text-primary">1</span> to <span className="font-semibold text-text-primary">6</span> of <span className="font-semibold text-text-primary">423</span> results
                </span>

                <div className="flex items-center gap-1">
                    <button className="px-3 py-1.5 text-sm font-medium text-text-secondary rounded border border-border hover:bg-surface-secondary hover:text-text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed hidden sm:block">
                        Previous
                    </button>

                    <button className="w-8 h-8 rounded bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shadow-sm">1</button>
                    <button className="w-8 h-8 rounded text-text-secondary hover:bg-surface-secondary hover:text-text-primary flex items-center justify-center text-sm transition-colors">2</button>
                    <button className="w-8 h-8 rounded text-text-secondary hover:bg-surface-secondary hover:text-text-primary flex items-center justify-center text-sm transition-colors">3</button>
                    <span className="text-text-tertiary px-1">...</span>
                    <button className="w-8 h-8 rounded text-text-secondary hover:bg-surface-secondary hover:text-text-primary flex items-center justify-center text-sm transition-colors">42</button>

                    <button className="px-3 py-1.5 text-sm font-medium text-text-secondary rounded border border-border hover:bg-surface-secondary hover:text-text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed hidden sm:block ml-2">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
