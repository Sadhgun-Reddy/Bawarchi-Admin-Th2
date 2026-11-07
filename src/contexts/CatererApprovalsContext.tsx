import React, { createContext, useContext, useState, useEffect } from 'react';
import { CatererApplication } from '../types/catererApprovals.types';

const MOCK_APPLICATIONS: CatererApplication[] = [
    { id: 'APP-1042', businessName: 'Spice Route Banquet', ownerName: 'Rajesh Kumar', location: 'Navi Mumbai', experience: '5 Years', submittedDate: 'Today, 10:30 AM', status: 'pending' },
    { id: 'APP-1041', businessName: 'The Golden Ladle', ownerName: 'Anita Sharma', location: 'Andheri West', experience: '8 Years', submittedDate: 'Today, 09:15 AM', status: 'pending' },
    { id: 'APP-1040', businessName: 'Tandoor Nights', ownerName: 'Vikram Singh', location: 'Bandra', experience: '3 Years', submittedDate: 'Yesterday', status: 'pending' },
    { id: 'APP-1039', businessName: 'Royal Treats', ownerName: 'Pooja Desai', location: 'Thane', experience: '12 Years', submittedDate: 'Yesterday', status: 'active' },
    { id: 'APP-1038', businessName: 'Fresh Bites Catering', ownerName: 'Mohammed Ali', location: 'Colaba', experience: '1 Year', submittedDate: 'Oct 24, 2023', status: 'active' },
    { id: 'APP-1037', businessName: 'Gourmet Express', ownerName: 'Neha Mehta', location: 'Powai', experience: '6 Years', submittedDate: 'Oct 23, 2023', status: 'rejected' },
];

interface CatererApprovalsContextType {
    applications: CatererApplication[];
    updateApplicationStatus: (id: string, newStatus: CatererApplication['status']) => void;
}

const CatererApprovalsContext = createContext<CatererApprovalsContextType | undefined>(undefined);

export const CatererApprovalsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [applications, setApplications] = useState<CatererApplication[]>(() => {
        const stored = localStorage.getItem('caterer_approvals_state');
        if (stored) {
            try {
                return JSON.parse(stored);
            } catch (e) {
                console.error("Failed to parse stored applications", e);
            }
        }
        return MOCK_APPLICATIONS;
    });

    useEffect(() => {
        localStorage.setItem('caterer_approvals_state', JSON.stringify(applications));
    }, [applications]);

    const updateApplicationStatus = (id: string, newStatus: CatererApplication['status']) => {
        setApplications(prev => prev.map(a =>
            a.id === id ? { ...a, status: newStatus } : a
        ));
    };

    return (
        <CatererApprovalsContext.Provider value={{ applications, updateApplicationStatus }}>
            {children}
        </CatererApprovalsContext.Provider>
    );
};

export const useCatererApprovals = () => {
    const context = useContext(CatererApprovalsContext);
    if (!context) {
        throw new Error('useCatererApprovals must be used within a CatererApprovalsProvider');
    }
    return context;
};
