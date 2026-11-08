import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuditLog } from '../types/audit';
import { mockAuditLogs } from '../components/audit/mockData';

interface AuditContextType {
    logs: AuditLog[];
}

const AuditContext = createContext<AuditContextType | undefined>(undefined);

export const AuditProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [logs] = useState<AuditLog[]>(() => {
        const stored = localStorage.getItem('audit_logs');
        return stored ? JSON.parse(stored) : mockAuditLogs;
    });

    useEffect(() => {
        localStorage.setItem('audit_logs', JSON.stringify(logs));
    }, [logs]);

    return (
        <AuditContext.Provider value={{ logs }}>
            {children}
        </AuditContext.Provider>
    );
};

export const useAuditContext = () => {
    const context = useContext(AuditContext);
    if (!context) {
        throw new Error('useAuditContext must be used within an AuditProvider');
    }
    return context;
};
