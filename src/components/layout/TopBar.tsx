
import { Search } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export function TopBar() {
    const { theme } = useTheme();

    return (
        <header className="flex items-center justify-between h-[var(--topbar-height)] px-4 shrink-0 transition-colors duration-normal ease-smooth
      bg-surface shadow-elevation-1 dark:shadow-none dark:border-b dark:border-border"
        >
            <div className="flex items-center flex-1">
                {/* Search Component Stub */}
                <div className="relative w-full max-w-md hidden md:block">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-tertiary">
                        <Search className="h-4 w-4" />
                    </div>
                    <input
                        type="text"
                        className="input-base w-full pl-9 pr-12 h-9 text-sm"
                        placeholder="Search..."
                    />
                    <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
                        <span className="badge-base bg-badge-neutral text-badge-neutral-foreground text-[10px] tracking-wider font-semibold px-1.5 py-0.5 rounded">
                            ⌘K
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4">
                {/* User Profile Stub (Right of TopBar - prominently in Dark mode, but keeping it responsive) */}
                <div className={`flex items-center gap-3 ${theme === 'stripe-light' ? 'md:hidden' : 'flex'}`}>
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-medium text-text-primary leading-none">Admin User</p>
                        <p className="text-xs text-text-tertiary mt-1">Super Admin</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-accent-muted flex items-center justify-center text-accent font-semibold text-sm">
                        AU
                    </div>
                </div>
            </div>
        </header>
    );
}
