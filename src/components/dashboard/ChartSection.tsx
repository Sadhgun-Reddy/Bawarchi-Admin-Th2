
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { useTheme } from '../../contexts/ThemeContext';

export function ChartSection() {
    const { theme } = useTheme();

    return (
        <div className={cn(
            "relative w-full p-4 md:p-6 bg-surface border border-border rounded-[8px] overflow-hidden transition-all duration-normal ease-smooth",
            "shadow-elevation-1 dark:shadow-none dark:matte-surface dark:bg-[#1E293B]"
        )}>

            {/* Subtle Striped Background Matrix */}
            <div className={cn(
                "absolute inset-0 pointer-events-none opacity-[0.03] transition-opacity duration-slow dark:opacity-[0.01]",
                "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-text-primary via-transparent to-transparent bg-[length:24px_24px]"
            )} />

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                    <h2 className="text-lg font-bold text-text-primary">Platform Growth</h2>
                    <p className="text-sm text-text-secondary">Monthly volume over trailing 30 days</p>
                </div>

                <select className="bg-surface-secondary dark:bg-[#0F172A] border border-border text-sm text-text-secondary font-medium rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-accent-muted cursor-pointer hover:bg-surface transition-colors dark:hover:bg-[#1e293b]">
                    <option>Last 30 Days</option>
                    <option>Last 3 Months</option>
                    <option>Year to Date</option>
                </select>
            </div>

            <div className="w-full aspect-video md:aspect-[21/9] bg-surface-secondary/30 dark:bg-[#0F172A]/30 rounded-md border border-border/50 relative overflow-hidden flex items-end">
                {/* SVG Chart Stub */}
                <svg viewBox="0 0 1000 300" preserveAspectRatio="none" className="w-full h-full absolute inset-0">
                    <defs>
                        <linearGradient id="chartGradientLight" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#635bff" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#635bff" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="chartGradientDark" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#2a8ff4" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#2a8ff4" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        d="M0,300 L0,200 C150,220 250,120 400,160 C550,200 650,50 800,100 C900,130 950,90 1000,80 L1000,300 Z"
                        fill={`url(#${theme === 'slate-dark' ? 'chartGradientDark' : 'chartGradientLight'})`}
                    />
                    <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        d="M0,200 C150,220 250,120 400,160 C550,200 650,50 800,100 C900,130 950,90 1000,80"
                        fill="none"
                        stroke={theme === 'slate-dark' ? '#2a8ff4' : '#635bff'}
                        strokeWidth={theme === 'slate-dark' ? 2 : 3}
                    />
                </svg>

                {/* Chart Axis Labels Mockup */}
                <div className="absolute bottom-2 left-4 right-4 flex justify-between text-xs text-text-tertiary">
                    <span>01 Mar</span>
                    <span>15 Mar</span>
                    <span>30 Mar</span>
                </div>
            </div>
        </div>
    );
}
