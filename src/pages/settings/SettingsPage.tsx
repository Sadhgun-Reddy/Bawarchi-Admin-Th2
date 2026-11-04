import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';

export function SettingsPage() {
    const { user } = useAuth();
    const { theme, toggleTheme } = useTheme();
    const [name, setName] = useState(user?.name || '');
    const [email, setEmail] = useState(user?.email || '');
    const [notifications, setNotifications] = useState(true);

    return (
        <div className="flex-1 overflow-y-auto p-6 md:p-10 no-scrollbar">
            <div className="max-w-3xl mx-auto space-y-8">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight">System Settings</h1>
                    <p className="text-text-secondary text-sm mt-1">Manage your account preferences and application settings.</p>
                </div>

                <div className="bg-surface rounded-xl shadow-card border border-border p-6 space-y-6">
                    <h2 className="text-lg font-semibold text-text-primary border-b border-border pb-2">Profile Information</h2>

                    <div className="space-y-4 max-w-md">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-text-secondary">Full Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-surface border border-border text-text-primary text-sm rounded-lg focus:ring-1 focus:ring-accent focus:border-accent p-2.5 shadow-input"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-text-secondary">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-surface border border-border text-text-primary text-sm rounded-lg focus:ring-1 focus:ring-accent focus:border-accent p-2.5 shadow-input"
                            />
                        </div>

                        <button className="bg-accent hover:bg-accent-hover text-accent-foreground shadow-elevation-2 font-medium py-2 px-4 rounded-lg text-sm transition-all">
                            Save Profile
                        </button>
                    </div>
                </div>

                <div className="bg-surface rounded-xl shadow-card border border-border p-6 space-y-6">
                    <h2 className="text-lg font-semibold text-text-primary border-b border-border pb-2">Preferences</h2>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-sm font-medium text-text-primary">Theme Appearance</h3>
                                <p className="text-xs text-text-secondary mt-1">Switch between Stripe Light and Slate Dark mode.</p>
                            </div>
                            <button
                                onClick={toggleTheme}
                                className="bg-surface border border-border px-4 py-2 rounded-full shadow-elevation-1 hover:bg-surface-secondary transition-all text-sm font-medium text-text-primary"
                            >
                                {theme === 'stripe-light' ? '🌙 Switch to Dark' : '☀️ Switch to Light'}
                            </button>
                        </div>

                        <div className="flex items-center justify-between border-t border-border pt-4">
                            <div>
                                <h3 className="text-sm font-medium text-text-primary">Email Notifications</h3>
                                <p className="text-xs text-text-secondary mt-1">Receive daily summaries and alerts.</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={notifications}
                                    onChange={() => setNotifications(!notifications)}
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-surface-secondary border border-border rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                            </label>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
