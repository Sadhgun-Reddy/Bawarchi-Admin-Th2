import React, { createContext, useContext, useState, useEffect } from 'react';
import { ExportRecord, ReportStats } from '../types/reports';
import { mockReportStats, mockExports } from '../components/reports/mockData';

interface ReportsContextType {
    stats: ReportStats[];
    exports: ExportRecord[];
    addExport: (newExport: ExportRecord) => void;
    deleteExport: (id: string) => void;
    retryExport: (id: string) => void;
}

const ReportsContext = createContext<ReportsContextType | undefined>(undefined);

export const ReportsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [stats] = useState<ReportStats[]>(() => {
        const stored = localStorage.getItem('reports_stats');
        return stored ? JSON.parse(stored) : mockReportStats;
    });

    const [exports, setExports] = useState<ExportRecord[]>(() => {
        const stored = localStorage.getItem('reports_exports');
        return stored ? JSON.parse(stored) : mockExports;
    });

    useEffect(() => {
        localStorage.setItem('reports_stats', JSON.stringify(stats));
    }, [stats]);

    useEffect(() => {
        localStorage.setItem('reports_exports', JSON.stringify(exports));
    }, [exports]);

    const addExport = (newExport: ExportRecord) => {
        setExports(prev => [newExport, ...prev]);
    };

    const deleteExport = (id: string) => {
        setExports(prev => prev.filter(e => e.id !== id));
    };

    const retryExport = (id: string) => {
        setExports(prev => prev.map(e => e.id === id ? { ...e, status: 'processing' } : e));
    };

    return (
        <ReportsContext.Provider value={{ stats, exports, addExport, deleteExport, retryExport }}>
            {children}
        </ReportsContext.Provider>
    );
};

export const useReportsContext = () => {
    const context = useContext(ReportsContext);
    if (!context) {
        throw new Error('useReportsContext must be used within a ReportsProvider');
    }
    return context;
};
