
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { AppRoutes } from './routes';

function FloatingThemeTools() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="fixed bottom-4 right-4 z-[100] flex gap-2">
            <button
                onClick={toggleTheme}
                className="bg-surface border border-border px-4 py-2 rounded-full shadow-elevation-2 hover:bg-surface-secondary transition-all text-sm font-medium text-text-primary"
            >
                {theme === 'stripe-light' ? '🌙 Slate Dark' : '☀️ Stripe Light'}
            </button>
        </div>
    );
}

function AppContent() {
    return (
        <BrowserRouter>
            {/* Floating Tools globally visible */}
            <FloatingThemeTools />

            {/* Route Execution Matrix */}
            <AppRoutes />
        </BrowserRouter>
    );
}

function App() {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    );
}

export default App;
