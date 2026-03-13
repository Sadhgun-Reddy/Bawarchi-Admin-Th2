import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface ReviewHeaderProps {
    businessName: string;
}

export const ReviewHeader: React.FC<ReviewHeaderProps> = ({ businessName }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="sticky top-0 z-10 w-full flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 px-6 md:px-8 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-border shadow-sm mb-6"
        >
            <div className="flex flex-col space-y-2">
                <a href="#" className="flex items-center text-sm font-medium text-text-secondary hover:text-accent transition-colors">
                    <ChevronLeft className="w-4 h-4 mr-1" strokeWidth={1.5} />
                    Back to Pending List
                </a>
                <div className="flex items-center space-x-3">
                    <h1 className="text-xl md:text-2xl font-bold text-text-primary tracking-tight">
                        Review Application: {businessName}
                    </h1>
                    <span className="inline-flex items-center py-1 px-2.5 rounded-full text-xs font-semibold bg-warning text-white shadow-sm shadow-warning/20">
                        Pending
                    </span>
                </div>
            </div>
        </motion.div>
    );
};
