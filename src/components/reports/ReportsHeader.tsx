import React from 'react';
import { Search, Bell } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export function ReportsHeader() {
    const { theme } = useTheme();

    return (
        <div className="sticky top-0 z-20 flex flex-col md:flex-row justify-between items-start md:items-center bg-background/80 backdrop-blur-md dark:bg-[#0F172A]/80 pb-4 pt-4 border-b border-border gap-4">
            <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">Reports & Exports</h1>
                <p className="text-text-secondary mt-1 text-sm">Generate and manage data extracts across your workspace.</p>
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto">
                {/* Global Search */}
                <div className="relative flex-1 md:w-64">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-tertiary">
                        <Search className="h-4 w-4" />
                    </div>
                    <input
                        type="text"
                        className="w-full pl-9 pr-4 py-2 h-10 text-sm bg-surface dark:bg-[#1E293B] border border-border rounded-DEFAULT focus:outline-none focus:ring-1 focus:ring-border-secondary transition-all text-text-primary placeholder:text-text-tertiary shadow-sm dark:shadow-none"
                        placeholder="Search exports..."
                    />
                </div>

                {/* Notification Toggle */}
                <button className="w-10 h-10 shrink-0 flex items-center justify-center rounded-DEFAULT bg-surface dark:bg-[#1E293B] border border-border text-text-secondary hover:text-text-primary hover:bg-surface-secondary dark:hover:bg-[#2C3849] transition-colors shadow-sm dark:shadow-none relative">
                    <Bell className="w-5 h-5" />
                    {/* Active Dot */}
                    <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-accent ring-2 ring-surface dark:ring-[#1E293B]" />
                </button>
            </div>
        </div>
    );
}
