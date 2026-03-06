import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Calendar, Database } from 'lucide-react';
import { ReportConfig } from '../../types/reports';
import { cn } from '../../lib/utils';
import { useTheme } from '../../contexts/ThemeContext';

export function ReportGenerator() {
    const { theme } = useTheme();
    const [isExpanded, setIsExpanded] = useState(true);
    const [format, setFormat] = useState<ReportConfig['format']>('csv');
    const [includeDrafts, setIncludeDrafts] = useState(false);

    return (
        <div className={cn(
            "flex flex-col bg-surface border border-border rounded-[8px] overflow-hidden transition-all duration-normal ease-smooth",
            "shadow-elevation-1 dark:shadow-none dark:bg-[#1E293B] dark:matte-surface"
        )}>

            {/* Header / Collapse Toggle */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center justify-between p-4 md:p-6 w-full text-left focus:outline-none hover:bg-surface-secondary/50 dark:hover:bg-[#2C3849]/50 transition-colors"
            >
                <div>
                    <h2 className="text-lg font-bold text-text-primary">Create New Export</h2>
                    <p className="text-sm text-text-secondary mt-1">Configure data sources and output formats.</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-surface-secondary dark:bg-[#0F172A] flex items-center justify-center text-text-secondary border border-transparent dark:border-border">
                    <ChevronDown className={cn("w-5 h-5 transition-transform duration-normal", isExpanded && "rotate-180")} />
                </div>
            </button>

            <AnimatePresence initial={false}>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="p-4 md:p-6 pt-0 border-t border-border">

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

                                {/* Date Range Group */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-text-primary">Date Range</label>
                                    <div className="flex items-center gap-2">
                                        <div className="relative flex-1">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-tertiary">
                                                <Calendar className="h-4 w-4" />
                                            </div>
                                            <input type="date" className="w-full pl-9 pr-3 py-2 text-sm bg-surface border border-border rounded focus:outline-none focus:ring-1 focus:ring-accent-muted dark:bg-[#0F172A] text-text-primary" />
                                        </div>
                                        <span className="text-text-tertiary">to</span>
                                        <div className="relative flex-1">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-tertiary">
                                                <Calendar className="h-4 w-4" />
                                            </div>
                                            <input type="date" className="w-full pl-9 pr-3 py-2 text-sm bg-surface border border-border rounded focus:outline-none focus:ring-1 focus:ring-accent-muted dark:bg-[#0F172A] text-text-primary" />
                                        </div>
                                    </div>
                                </div>

                                {/* Source Selector */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-text-primary">Data Source</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-tertiary">
                                            <Database className="h-4 w-4" />
                                        </div>
                                        <select className="w-full pl-9 pr-3 py-2 text-sm bg-surface border border-border rounded focus:outline-none focus:ring-1 focus:ring-accent-muted dark:bg-[#0F172A] text-text-primary appearance-none hover:bg-surface-secondary dark:hover:bg-[#1e293b] cursor-pointer">
                                            <option>Transactions & Sales</option>
                                            <option>Inventory Depletion</option>
                                            <option>User Activity</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Format Selector (Segmented Control) */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-text-primary">Export Format</label>
                                    <div className="flex rounded-DEFAULT border border-border overflow-hidden bg-slate-100 p-1 gap-1 dark:bg-[#0F172A] dark:border-border">
                                        {(['csv', 'excel', 'pdf'] as const).map((f) => (
                                            <button
                                                key={f}
                                                onClick={() => setFormat(f)}
                                                className={cn(
                                                    "flex-1 py-1.5 text-sm font-medium rounded uppercase tracking-wider transition-all duration-normal",
                                                    format === f
                                                        ? "bg-white text-text-primary shadow-sm ring-1 ring-black/5 dark:bg-[#1E293B] dark:ring-border dark:text-white"
                                                        : "text-text-secondary hover:text-text-primary dark:hover:bg-[#1E293B]/50"
                                                )}
                                            >
                                                {f}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                            </div>

                            {/* Footer Actions */}
                            <div className="flex flex-col sm:flex-row justify-between items-center mt-8 pt-4 border-t border-border gap-4">
                                <label className="flex items-center gap-2 text-sm text-text-secondary cursor-pointer hover:text-text-primary transition-colors">
                                    <input
                                        type="checkbox"
                                        checked={includeDrafts}
                                        onChange={(e) => setIncludeDrafts(e.target.checked)}
                                        className="rounded border-border text-accent focus:ring-accent-muted w-4 h-4"
                                    />
                                    Include draft & pending records
                                </label>

                                <div className="flex items-center gap-3 w-full sm:w-auto">
                                    <button className="flex-1 sm:flex-none px-4 py-2 bg-transparent text-text-secondary hover:text-text-primary text-sm font-medium transition-colors">
                                        Cancel
                                    </button>
                                    <button className={cn(
                                        "flex-1 sm:flex-none px-6 py-2 text-sm font-medium rounded-DEFAULT transition-all duration-normal shadow-elevation-1 hover:-translate-y-0.5",
                                        "bg-accent text-accent-foreground hover:bg-accent-hover dark:shadow-none", // Default accent
                                        theme === 'slate-dark' && "bg-white text-slate-900 hover:bg-slate-100 border border-transparent hover:border-slate-300" // Dark mode focal polish
                                    )}>
                                        Generate Now
                                    </button>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
