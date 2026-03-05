import React, { useState, useEffect } from 'react';
import { LoginPage } from './pages/auth/LoginPage';
import { ThemeShowcase } from './components/ui/ThemeShowcase';

function App() {
    const [theme, setTheme] = useState<'stripe-light' | 'slate-dark'>('stripe-light');
    const [view, setView] = useState<'login' | 'showcase'>('login');

    useEffect(() => {
        if (theme === 'slate-dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'stripe-light' ? 'slate-dark' : 'stripe-light'));
    };

    return (
        <div className="min-h-screen bg-background text-text-primary font-sans transition-colors duration-normal">
            <div className="fixed top-4 right-4 z-50 flex gap-2">
                <button
                    onClick={() => setView(view === 'login' ? 'showcase' : 'login')}
                    className="bg-surface border border-border px-4 py-2 rounded-full shadow-elevation-2 hover:bg-surface-secondary transition-all text-sm font-medium"
                >
                    {view === 'login' ? 'See Style Showcase' : 'View Login Flow'}
                </button>
                <button
                    onClick={toggleTheme}
                    className="bg-surface border border-border px-4 py-2 rounded-full shadow-elevation-2 hover:bg-surface-secondary transition-all text-sm font-medium"
                >
                    {theme === 'stripe-light' ? '🌙 Switch to Slate Dark' : '☀️ Switch to Stripe Light'}
                </button>
            </div>

            {view === 'login' ? <LoginPage /> : <ThemeShowcase />}
        </div>
    );
}

export default App;
