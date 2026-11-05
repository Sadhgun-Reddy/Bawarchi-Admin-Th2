import { useState } from 'react';
import { HelpCircle, Store, Globe, Settings2, ShieldCheck, History } from 'lucide-react';

export function PlatformSettingsPage() {
    const [maintenanceMode, setMaintenanceMode] = useState(false);
    const [publicRegistration, setPublicRegistration] = useState(true);
    const [autoApproveChefs, setAutoApproveChefs] = useState(false);
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [darkModeDefault, setDarkModeDefault] = useState(false);

    return (
        <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth no-scrollbar">
            <div className="max-w-5xl mx-auto space-y-8 pb-20">

                {/* Page Intro */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold text-text-primary tracking-tight">General Configuration</h1>
                    <p className="text-text-secondary text-lg max-w-2xl font-light">Manage your platform's core settings, contact information, and global preferences.</p>
                </div>

                {/* Tabs */}
                <div className="border-b border-border">
                    <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                        <a href="#" className="border-accent text-accent whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                            General
                        </a>
                        <a href="#" className="border-transparent text-text-secondary hover:text-text-primary hover:border-border-secondary whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors">
                            Notifications
                        </a>
                        <a href="#" className="border-transparent text-text-secondary hover:text-text-primary hover:border-border-secondary whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors">
                            Team Members
                        </a>
                        <a href="#" className="border-transparent text-text-secondary hover:text-text-primary hover:border-border-secondary whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors">
                            Billing
                        </a>
                        <a href="#" className="border-transparent text-text-secondary hover:text-text-primary hover:border-border-secondary whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors">
                            API &amp; Integrations
                        </a>
                    </nav>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Platform Details */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Card 1: Platform Information */}
                        <div className="bg-surface rounded-2xl p-8 shadow-card border border-border">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-accent/10 text-accent rounded-lg">
                                    <Store className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-semibold text-text-primary">Platform Information</h3>
                            </div>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="platform_name" className="block text-sm font-medium text-text-secondary">Platform Name</label>
                                        <input
                                            type="text"
                                            name="platform_name"
                                            id="platform_name"
                                            className="block w-full rounded-lg border-border bg-surface-secondary p-3 text-text-primary placeholder:text-text-tertiary focus:border-accent focus:ring-4 focus:ring-accent/10 sm:text-sm transition-all shadow-input"
                                            placeholder="e.g. Book Bawarchi"
                                            defaultValue="Book Bawarchi Admin"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="support_email" className="block text-sm font-medium text-text-secondary">Support Email</label>
                                        <input
                                            type="email"
                                            name="support_email"
                                            id="support_email"
                                            className="block w-full rounded-lg border-border bg-surface-secondary p-3 text-text-primary placeholder:text-text-tertiary focus:border-accent focus:ring-4 focus:ring-accent/10 sm:text-sm transition-all shadow-input"
                                            placeholder="support@example.com"
                                            defaultValue="help@bookbawarchi.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="description" className="block text-sm font-medium text-text-secondary">Platform Description</label>
                                    <textarea
                                        id="description"
                                        rows={3}
                                        className="block w-full rounded-lg border-border bg-surface-secondary p-3 text-text-primary placeholder:text-text-tertiary focus:border-accent focus:ring-4 focus:ring-accent/10 sm:text-sm transition-all shadow-input resize-none"
                                        defaultValue="The premier catering platform connecting food lovers with expert chefs."
                                    />
                                    <p className="text-xs text-text-tertiary">This description appears on the public directory listings.</p>
                                </div>

                                <div className="pt-4 border-t border-border">
                                    <div className="space-y-2 max-w-xs">
                                        <label htmlFor="commission" className="flex items-center gap-2 block text-sm font-medium text-text-secondary">
                                            Default Commission Rate
                                            <span title="Percentage taken from each order">
                                                <HelpCircle className="w-4 h-4 text-text-tertiary cursor-help" />
                                            </span>
                                        </label>
                                        <div className="relative mt-1 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                name="commission"
                                                id="commission"
                                                className="block w-full rounded-lg border-border bg-surface-secondary p-3 pr-12 text-text-primary placeholder:text-text-tertiary focus:border-accent focus:ring-4 focus:ring-accent/10 sm:text-sm transition-all shadow-input"
                                                placeholder="0.00"
                                                defaultValue="12.5"
                                            />
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                                <span className="text-text-tertiary sm:text-sm">%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Regional Settings */}
                        <div className="bg-surface rounded-2xl p-8 shadow-card border border-border">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-accent/10 text-accent rounded-lg">
                                    <Globe className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-semibold text-text-primary">Regional Settings</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="currency" className="block text-sm font-medium text-text-secondary">Default Currency</label>
                                    <select
                                        id="currency"
                                        name="currency"
                                        className="block w-full rounded-lg border-border bg-surface-secondary p-3 text-text-primary focus:border-accent focus:ring-4 focus:ring-accent/10 sm:text-sm transition-all shadow-input appearance-none"
                                        defaultValue="INR"
                                    >
                                        <option value="USD">USD ($)</option>
                                        <option value="EUR">EUR (€)</option>
                                        <option value="GBP">GBP (£)</option>
                                        <option value="INR">INR (₹)</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="timezone" className="block text-sm font-medium text-text-secondary">Timezone</label>
                                    <select
                                        id="timezone"
                                        name="timezone"
                                        className="block w-full rounded-lg border-border bg-surface-secondary p-3 text-text-primary focus:border-accent focus:ring-4 focus:ring-accent/10 sm:text-sm transition-all shadow-input appearance-none"
                                        defaultValue="IST"
                                    >
                                        <option value="UTC">UTC</option>
                                        <option value="EST">EST (UTC-5)</option>
                                        <option value="PST">PST (UTC-8)</option>
                                        <option value="IST">IST (UTC+5:30)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Toggles & Preferences */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-surface rounded-2xl p-8 shadow-card border border-border h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-accent/10 text-accent rounded-lg">
                                    <Settings2 className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-semibold text-text-primary">System Preferences</h3>
                            </div>

                            <div className="space-y-8">
                                {/* Toggle 1 */}
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-text-primary">Maintenance Mode</span>
                                        <span className="text-xs text-text-secondary">Disable access for all users</span>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" checked={maintenanceMode} onChange={() => setMaintenanceMode(!maintenanceMode)} />
                                        <div className="w-11 h-6 bg-surface-tertiary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent border border-border/50"></div>
                                    </label>
                                </div>

                                {/* Toggle 2 */}
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-text-primary">New User Registration</span>
                                        <span className="text-xs text-text-secondary">Allow public sign-ups</span>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" checked={publicRegistration} onChange={() => setPublicRegistration(!publicRegistration)} />
                                        <div className="w-11 h-6 bg-surface-tertiary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent border border-border/50"></div>
                                    </label>
                                </div>

                                {/* Toggle 3 */}
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-text-primary">Auto-approve Chefs</span>
                                        <span className="text-xs text-text-secondary">Skip manual verification</span>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" checked={autoApproveChefs} onChange={() => setAutoApproveChefs(!autoApproveChefs)} />
                                        <div className="w-11 h-6 bg-surface-tertiary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent border border-border/50"></div>
                                    </label>
                                </div>

                                <div className="h-px bg-border my-4"></div>

                                {/* Toggle 4 */}
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-text-primary">Email Notifications</span>
                                        <span className="text-xs text-text-secondary">System alerts via email</span>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" checked={emailNotifications} onChange={() => setEmailNotifications(!emailNotifications)} />
                                        <div className="w-11 h-6 bg-surface-tertiary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent border border-border/50"></div>
                                    </label>
                                </div>

                                {/* Toggle 5 */}
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-text-primary">Dark Mode Default</span>
                                        <span className="text-xs text-text-secondary">Force dark theme for new users</span>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" checked={darkModeDefault} onChange={() => setDarkModeDefault(!darkModeDefault)} />
                                        <div className="w-11 h-6 bg-surface-tertiary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent border border-border/50"></div>
                                    </label>
                                </div>
                            </div>

                            <div className="mt-8 bg-success/10 rounded-xl p-4 border border-success/20">
                                <div className="flex gap-3">
                                    <ShieldCheck className="w-5 h-5 text-success mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-sm font-semibold text-text-primary">Security Check</p>
                                        <p className="text-xs text-text-secondary mt-1">Last system audit performed 2 days ago. No vulnerabilities found.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Footer Action Bar */}
            <div className="bg-surface border-t border-border p-4 px-8 flex justify-between items-center z-10 sticky bottom-0">
                <div className="flex items-center gap-2 text-sm text-text-tertiary">
                    <History className="w-4 h-4" />
                    <span>Last saved: Today at 10:42 AM</span>
                </div>
                <div className="flex gap-4">
                    <button className="px-5 py-2.5 rounded-lg border border-border text-text-secondary font-medium hover:bg-surface-secondary hover:text-text-primary transition-colors focus:ring-4 focus:ring-surface-tertiary">
                        Cancel
                    </button>
                    <button className="px-5 py-2.5 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent-hover shadow-lg shadow-accent/20 transition-all active:scale-95 focus:ring-4 focus:ring-accent/20">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}
