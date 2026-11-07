import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockCaterers } from '../components/caterers/catererMockData';
import { Caterer } from '../types/caterers';

interface CatererContextType {
    caterers: Caterer[];
    updateCatererStatus: (id: string, newStatus: Caterer['status']) => void;
}

const CatererContext = createContext<CatererContextType | undefined>(undefined);

export const CatererProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [caterers, setCaterers] = useState<Caterer[]>(() => {
        const stored = localStorage.getItem('caterers_state');
        if (stored) {
            try {
                return JSON.parse(stored);
            } catch (e) {
                console.error("Failed to parse stored caterers", e);
            }
        }
        return mockCaterers;
    });

    useEffect(() => {
        localStorage.setItem('caterers_state', JSON.stringify(caterers));
    }, [caterers]);

    const updateCatererStatus = (id: string, newStatus: Caterer['status']) => {
        setCaterers(prev => prev.map(c =>
            c.id === id ? { ...c, status: newStatus } : c
        ));
    };

    return (
        <CatererContext.Provider value={{ caterers, updateCatererStatus }}>
            {children}
        </CatererContext.Provider>
    );
};

export const useCaterers = () => {
    const context = useContext(CatererContext);
    if (!context) {
        throw new Error('useCaterers must be used within a CatererProvider');
    }
    return context;
};
