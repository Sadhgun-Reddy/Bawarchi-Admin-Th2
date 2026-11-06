
import { Search, LogOut } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';
import { useState, useEffect, useRef } from 'react';
import { navigationConfig } from '../../config/navigation';
import { useNavigate } from 'react-router-dom';
import * as Icons from 'lucide-react';

export function TopBar() {
    const { theme } = useTheme();
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const searchInputRef = useRef<HTMLInputElement>(null);

    const allLinks = navigationConfig.flatMap(group => group.items);
    const filteredLinks = allLinks.filter(item =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsSearchOpen(true);
            }

            if (e.key === 'Escape') {
                setIsSearchOpen(false);
                setSearchQuery('');
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchOpen]);

    useEffect(() => {
        setSelectedIndex(0);
    }, [searchQuery]);

    const handleSearchKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex(prev => (prev + 1) % Math.max(filteredLinks.length, 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex(prev => (prev - 1 + filteredLinks.length) % Math.max(filteredLinks.length, 1));
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (filteredLinks.length > 0) {
                navigate(filteredLinks[selectedIndex].path);
                setIsSearchOpen(false);
                setSearchQuery('');
            }
        }
    };

    return (
        <header className="flex items-center justify-between h-[var(--topbar-height)] px-4 shrink-0 transition-colors duration-normal ease-smooth
      bg-surface shadow-elevation-1 dark:shadow-none dark:border-b dark:border-border relative z-40"
        >
            <div className="flex items-center flex-1">
                {/* Search Component */}
                <div className="relative w-full max-w-md hidden md:block">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-tertiary">
                        <Search className="h-4 w-4" />
                    </div>
                    <input
                        type="text"
                        className="input-base w-full pl-9 pr-12 h-9 text-sm cursor-pointer"
                        placeholder="Search..."
                        onClick={() => setIsSearchOpen(true)}
                        readOnly
                    />
                    <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
                        <span className="badge-base bg-badge-neutral text-badge-neutral-foreground text-[10px] tracking-wider font-semibold px-1.5 py-0.5 rounded">
                            ⌘K
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4">
                {/* User Profile (Right of TopBar - prominently in Dark mode, but keeping it responsive) */}
                <div className={`flex items-center gap-3 ${theme === 'stripe-light' ? 'md:hidden' : 'flex'}`}>
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-medium text-text-primary leading-none">{user?.name || 'User'}</p>
                        <p className="text-xs text-text-tertiary mt-1">{user?.role || 'User'}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-accent-muted flex items-center justify-center text-accent font-semibold text-sm">
                        {user?.name?.substring(0, 2).toUpperCase() || 'U'}
                    </div>
                    <button
                        onClick={logout}
                        className="p-1.5 ml-2 text-text-tertiary hover:text-text-primary hover:bg-surface-secondary rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        title="Logout"
                        aria-label="Logout"
                    >
                        <LogOut size={16} />
                    </button>
                </div>
            </div>

            {/* Command-K Search Modal */}
            {isSearchOpen && (
                <>
                    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 transition-opacity" onClick={() => setIsSearchOpen(false)} />
                    <div className="fixed left-[50%] top-[20%] z-50 w-full max-w-lg translate-x-[-50%] p-4">
                        <div className="bg-surface rounded-xl shadow-elevation-4 border border-border overflow-hidden flex flex-col">
                            <div className="flex items-center border-b border-border px-4">
                                <Search className="w-5 h-5 text-text-tertiary mr-3" />
                                <input
                                    ref={searchInputRef}
                                    type="text"
                                    className="flex h-14 w-full bg-transparent py-3 text-sm outline-none placeholder:text-text-tertiary text-text-primary"
                                    placeholder="Search pages..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onKeyDown={handleSearchKeyDown}
                                />
                                <button onClick={() => setIsSearchOpen(false)} className="text-xs border border-border rounded px-2 py-1 text-text-tertiary hover:bg-surface-secondary">
                                    ESC
                                </button>
                            </div>

                            <div className="max-h-[300px] overflow-y-auto p-2">
                                {filteredLinks.length === 0 ? (
                                    <div className="py-6 text-center text-sm text-text-tertiary">
                                        No results found.
                                    </div>
                                ) : (
                                    <div className="flex flex-col gap-1">
                                        {filteredLinks.map((link, idx) => {
                                            const iconName = link.icon as keyof typeof Icons;
                                            const IconComponent = Icons[iconName] as React.ElementType;
                                            const isSelected = idx === selectedIndex;

                                            return (
                                                <button
                                                    key={link.path}
                                                    onClick={() => {
                                                        navigate(link.path);
                                                        setIsSearchOpen(false);
                                                        setSearchQuery('');
                                                    }}
                                                    onMouseEnter={() => setSelectedIndex(idx)}
                                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm w-full text-left transition-colors ${
                                                        isSelected ? 'bg-accent/10 text-accent' : 'text-text-secondary hover:bg-surface-secondary hover:text-text-primary'
                                                    }`}
                                                >
                                                    {IconComponent && <IconComponent className={`w-4 h-4 ${isSelected ? 'text-accent' : 'text-text-tertiary'}`} />}
                                                    <span>{link.label}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
}
