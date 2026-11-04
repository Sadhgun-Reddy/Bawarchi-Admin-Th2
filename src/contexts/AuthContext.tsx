import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    user: { name: string; email: string } | null;
    login: (email: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    // Basic mock auth state
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
        () => localStorage.getItem('auth_token') === 'mock_token'
    );
    const [user, setUser] = useState<{ name: string; email: string } | null>(
        () => {
            const stored = localStorage.getItem('auth_user');
            return stored ? JSON.parse(stored) : null;
        }
    );

    const login = async (email: string) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 800));
        const mockUser = { name: 'Admin User', email };

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

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
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
