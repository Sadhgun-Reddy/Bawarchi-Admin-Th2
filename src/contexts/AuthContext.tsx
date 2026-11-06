import { createContext, useContext, useState, ReactNode } from 'react';

export interface User {
    name: string;
    email: string;
    role: string;
    avatarUrl?: string;
}

interface AuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    login: (email: string) => Promise<void>;
    logout: () => void;
    updateUser: (user: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    // Basic mock auth state
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
        () => localStorage.getItem('auth_token') === 'mock_token'
    );
    const [user, setUser] = useState<User | null>(
        () => {
            const stored = localStorage.getItem('auth_user');
            return stored ? JSON.parse(stored) : null;
        }
    );

    const login = async (email: string) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 800));
        const mockUser = {
            name: email.split('@')[0].split('.').map(n => n.charAt(0).toUpperCase() + n.slice(1)).join(' '),
            email,
            role: 'Super Admin'
        };

        localStorage.setItem('auth_token', 'mock_token');
        localStorage.setItem('auth_user', JSON.stringify(mockUser));

        setIsAuthenticated(true);
        setUser(mockUser);
    };

    const logout = () => {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_user');
        setIsAuthenticated(false);
        setUser(null);
    };

    const updateUser = (updates: Partial<User>) => {
        if (!user) return;
        const updatedUser = { ...user, ...updates };
        setUser(updatedUser);
        localStorage.setItem('auth_user', JSON.stringify(updatedUser));
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
