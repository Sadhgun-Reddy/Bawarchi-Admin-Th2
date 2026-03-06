import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { navigationConfig } from '../../config/navigation';
import { useTheme } from '../../contexts/ThemeContext';

export function Sidebar() {
    const { theme } = useTheme();
    const iconStrokeWidth = theme === 'slate-dark' ? 1.5 : 2;

    return (
        <aside className="hidden md:flex flex-col w-[var(--sidebar-width)] h-full shrink-0 transition-all duration-normal ease-smooth
      bg-surface shadow-elevation-3 dark:shadow-none dark:border-r dark:border-border"
        >
            <div className="h-[var(--topbar-height)] flex items-center px-6 shrink-0 border-b border-border transition-colors duration-normal">
                <div className="font-bold text-lg tracking-tight text-text-primary flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-accent flex items-center justify-center">
                        <Icons.Box className="w-3.5 h-3.5 text-accent-foreground" />
                    </div>
                    Bawarchi
                </div>
            </div>

            <nav className="flex-1 overflow-y-auto no-scrollbar py-4 px-3 space-y-6">
                {navigationConfig.map((group, idx) => (
                    <div key={idx} className="space-y-1">
                        <h3 className="px-3 text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-2">
                            {group.title}
                        </h3>
                        <div className="space-y-1">
                            {group.items.map((item) => {
                                const iconName = item.icon as keyof typeof Icons;
                                const IconComponent = Icons[iconName] as React.ElementType;

                                return (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        className={({ isActive }) => `
                      w-full flex items-center gap-3 px-3 py-2 text-sm font-medium transition-all duration-normal ease-smooth outline-none
                      ${isActive
                                                ? 'bg-accent-muted text-accent border-r-2 border-accent dark:bg-accent/10 dark:text-accent dark:border-r-0 dark:drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]'
                                                : 'text-text-secondary hover:bg-surface-secondary hover:text-text-primary border-r-2 border-transparent'}
                      dark:rounded-md dark:border-r-0
                    `}
                                    >
                                        {({ isActive }) => (
                                            <>
                                                {IconComponent && (
                                                    <IconComponent strokeWidth={iconStrokeWidth} className={`w-5 h-5 ${isActive ? 'text-accent' : 'text-text-tertiary group-hover:text-text-secondary'} shrink-0`} />
                                                )}
                                                <span className="flex-1 text-left truncate">{item.label}</span>
                                                {item.badge && (
                                                    <span className="badge-base bg-accent text-accent-foreground dark:bg-accent/20 dark:text-accent text-[10px]">
                                                        {item.badge}
                                                    </span>
                                                )}
                                            </>
                                        )}
                                    </NavLink>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </nav>

            {/* User Profile Stub (Bottom of Sidebar - prominently in Light mode) */}
            <div className={`p-4 border-t border-border shrink-0 ${theme === 'slate-dark' ? 'md:hidden' : 'block'}`}>
                <div className="flex items-center gap-3 hover:bg-surface-secondary p-2 rounded-md transition-colors cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-medium text-sm">
                        A
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <p className="text-sm font-medium text-text-primary leading-tight truncate">Admin User</p>
                        <p className="text-xs text-text-tertiary truncate">admin@bawarchi.app</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
