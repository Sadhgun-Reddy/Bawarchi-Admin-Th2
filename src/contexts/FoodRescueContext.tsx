import React, { createContext, useContext, useState, useEffect } from 'react';
import { Donation } from '../types/food-rescue.types';

const MOCK_DONATIONS: Donation[] = [
    {
        id: 'DON-701',
        donorName: 'Grand Plaza Hotel',
        foodDescription: {
            title: 'Vegetable Biryani & Curries',
            details: 'Contains Dairy, Nuts'
        },
        quantity: '15 kg',
        pickupLocation: 'Sector 45, Loading Bay',
        expiryTime: {
            value: 'Today, 23:00',
            urgency: 'high'
        },
        status: 'pending'
    },
    {
        id: 'DON-702',
        donorName: 'Spice Garden Catering',
        foodDescription: {
            title: 'Assorted Naan & Paneer',
            details: 'Contains Gluten, Dairy'
        },
        quantity: '8 kg',
        pickupLocation: 'Main Kitchen, Rear Entry',
        expiryTime: {
            value: 'Tomorrow, 10:00',
            urgency: 'medium'
        },
        status: 'pending'
    },
    {
        id: 'DON-703',
        donorName: 'Urban Corporate Kitchen',
        foodDescription: {
            title: 'Mixed Salad Bowls',
            details: 'Vegan, Gluten Free'
        },
        quantity: '12 kg',
        pickupLocation: 'Building C, Cafeteria',
        expiryTime: {
            value: 'Tomorrow, 14:00',
            urgency: 'medium'
        },
        status: 'pending'
    },
    {
        id: 'DON-704',
        donorName: 'Bakery Delights',
        foodDescription: {
            title: 'Sourdough Loaves & Bagels',
            details: 'Contains Gluten'
        },
        quantity: '5 kg',
        pickupLocation: 'Storefront, Side Door',
        expiryTime: {
            value: 'Oct 28, 09:00',
            urgency: 'low'
        },
        status: 'pending'
    },
    {
        id: 'DON-705',
        donorName: 'Events Inc.',
        foodDescription: {
            title: 'Grilled Chicken & Vegetables',
            details: 'High Protein'
        },
        quantity: '20 kg',
        pickupLocation: 'Convention Center, Hall A',
        expiryTime: {
            value: 'Today, 21:00',
            urgency: 'high'
        },
        status: 'pending'
    },
    {
        id: 'DON-706',
        donorName: 'Sushi Spot',
        foodDescription: {
            title: 'California Rolls & Miso',
            details: 'Seafood, Soy'
        },
        quantity: '4 kg',
        pickupLocation: 'Downtown Branch, Kitchen',
        expiryTime: {
            value: 'Today, 20:30',
            urgency: 'high'
        },
        status: 'pending'
    }
];

interface FoodRescueContextType {
    donations: Donation[];
    updateDonationStatus: (id: string, newStatus: Donation['status']) => void;
}

const FoodRescueContext = createContext<FoodRescueContextType | undefined>(undefined);

export const FoodRescueProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [donations, setDonations] = useState<Donation[]>(() => {
        const stored = localStorage.getItem('food_rescue_state');
        if (stored) {
            try {
                return JSON.parse(stored);
            } catch (e) {
                console.error("Failed to parse stored donations", e);
            }
        }
        return MOCK_DONATIONS;
    });

    useEffect(() => {
        localStorage.setItem('food_rescue_state', JSON.stringify(donations));
    }, [donations]);

    const updateDonationStatus = (id: string, newStatus: Donation['status']) => {
        setDonations(prev => prev.map(d =>
            d.id === id ? { ...d, status: newStatus } : d
        ));
    };

    return (
        <FoodRescueContext.Provider value={{ donations, updateDonationStatus }}>
            {children}
        </FoodRescueContext.Provider>
    );
};

export const useFoodRescue = () => {
    const context = useContext(FoodRescueContext);
    if (!context) {
        throw new Error('useFoodRescue must be used within a FoodRescueProvider');
    }
    return context;
};
