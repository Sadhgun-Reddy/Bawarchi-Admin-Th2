import React from 'react';
import { Inbox, Clock, CheckCircle } from 'lucide-react';

export const EnquiriesStats: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-surface border border-border p-5 rounded-xl shadow-card hover:border-border-secondary transition-colors relative overflow-hidden group">
                <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Inbox className="w-16 h-16 text-accent" strokeWidth={1} />
                </div>
                <div className="flex justify-between items-start mb-4 relative z-10">
                    <div className="p-2 bg-accent/10 rounded-lg text-accent">
                        <Inbox className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-success bg-success/10 px-2 py-1 rounded-full flex items-center">
                        +12.5%
                    </span>
                </div>
                <p className="text-text-secondary text-sm font-medium relative z-10">Total Enquiries</p>
                <h3 className="text-2xl font-bold text-text-primary mt-1 relative z-10">1,248</h3>
            </div>

            <div className="bg-surface border border-border p-5 rounded-xl shadow-card hover:border-border-secondary transition-colors relative overflow-hidden group">
                <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Clock className="w-16 h-16 text-warning" strokeWidth={1} />
                </div>
                <div className="flex justify-between items-start mb-4 relative z-10">
                    <div className="p-2 bg-warning/10 rounded-lg text-warning">
                        <Clock className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-warning bg-warning/10 px-2 py-1 rounded-full flex items-center">
                        +5.2%
                    </span>
                </div>
                <p className="text-text-secondary text-sm font-medium relative z-10">Pending Response</p>
                <h3 className="text-2xl font-bold text-text-primary mt-1 relative z-10">42</h3>
            </div>

            <div className="bg-surface border border-border p-5 rounded-xl shadow-card hover:border-border-secondary transition-colors relative overflow-hidden group">
                <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <CheckCircle className="w-16 h-16 text-success" strokeWidth={1} />
                </div>
                <div className="flex justify-between items-start mb-4 relative z-10">
                    <div className="p-2 bg-success/10 rounded-lg text-success">
                        <CheckCircle className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-success bg-success/10 px-2 py-1 rounded-full flex items-center">
                        +18%
                    </span>
                </div>
                <p className="text-text-secondary text-sm font-medium relative z-10">Resolved</p>
                <h3 className="text-2xl font-bold text-text-primary mt-1 relative z-10">1,206</h3>
            </div>
        </div>
    );
};
