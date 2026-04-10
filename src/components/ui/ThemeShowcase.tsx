

export function ThemeShowcase() {
    return (
        <div className="p-8 md:p-12 space-y-8 bg-background text-text-primary min-h-screen font-sans">
            <header>
                <h1 className="text-3xl font-bold tracking-tight">Theme Configuration Showcase</h1>
                <p className="text-text-secondary mt-2">Displaying the dynamic visual adaptations</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Adaptive Card */}
                <div className="card-surface p-6">
                    <h2 className="text-xl font-semibold mb-4">Adaptive Card Surface</h2>
                    <p className="text-text-secondary mb-6 leading-relaxed">
                        In <strong>Stripe Light</strong>, this inherits generous <code>rounded-[12px]</code> and uses massive soft shadows with no hard borders.
                        <br /><br />
                        In <strong>Slate Dark</strong>, this tightens to <code>rounded-[8px]</code> (or 10px depending on scales) and uses a matte slate border (<code>1px solid #334155</code>) with minimal inset-like shadow.
                    </p>
                    <div className="flex gap-4">
                        <button className="bg-accent text-accent-foreground px-4 py-2 rounded-md hover:bg-accent-hover transition-colors font-medium">
                            Primary Action
                        </button>
                        <button className="border border-border text-text-primary px-4 py-2 rounded-md hover:bg-surface-secondary transition-colors font-medium">
                            Secondary
                        </button>
                    </div>
                </div>

                {/* Inputs & Badges */}
                <div className="card-surface p-6 space-y-6">
                    <h2 className="text-xl font-semibold">Forms & Elements</h2>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-text-secondary">Email Address</label>
                        <input type="text" className="input-base w-full" placeholder="name@example.com" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-text-secondary">Semantic Badges</label>
                        <div className="flex gap-2 flex-wrap">
                            <span className="badge-base bg-success-muted text-success-foreground">Active</span>
                            <span className="badge-base bg-warning-muted text-warning-foreground">Pending</span>
                            <span className="badge-base bg-destructive-muted text-destructive-foreground">Failed</span>
                            <span className="badge-base bg-badge-neutral text-badge-neutral-foreground">Draft</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-surface p-8 space-y-6">
                <h2 className="text-2xl font-bold mb-6">Typography System (Inter)</h2>
                <div className="space-y-6">
                    <div>
                        <span className="text-xs text-text-tertiary uppercase tracking-wider font-semibold mb-1 block">Display</span>
                        <h1 className="text-4xl font-extrabold text-balance">The Quick Brown Fox</h1>
                    </div>
                    <div>
                        <span className="text-xs text-text-tertiary uppercase tracking-wider font-semibold mb-1 block">Heading 2</span>
                        <h2 className="text-3xl font-bold">Jumps Over The Lazy Dog</h2>
                    </div>
                    <div>
                        <span className="text-xs text-text-tertiary uppercase tracking-wider font-semibold mb-1 block">Heading 3</span>
                        <h3 className="text-2xl font-semibold">Sphynx of black quartz</h3>
                    </div>

                    <div className="border-t border-border pt-6 mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <span className="text-xs text-text-tertiary uppercase tracking-wider font-semibold mb-1 block">Body Primary</span>
                            <p className="text-base text-text-primary">
                                Pack my box with five dozen liquor jugs. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div>
                            <span className="text-xs text-text-tertiary uppercase tracking-wider font-semibold mb-1 block">Body Secondary</span>
                            <p className="text-base text-text-secondary">
                                This text is slightly muted for secondary information, descriptions, and supporting details.
                            </p>
                        </div>
                        <div>
                            <span className="text-xs text-text-tertiary uppercase tracking-wider font-semibold mb-1 block">Body Tertiary</span>
                            <p className="text-sm text-text-tertiary">
                                Even smaller and more muted for captions, timestamps, inside inputs, and metadata.
                            </p>
                        </div>
                    </div>

                    <div className="pt-4">
                        <span className="text-xs text-text-tertiary uppercase tracking-wider font-semibold mb-2 block">Monospace (Source Code Pro)</span>
                        <p className="font-mono text-sm bg-surface-secondary border border-border p-4 rounded-md text-text-primary overflow-x-auto">
                            {`const userStyles = {
  theme: 'stripe-light',
  awesome: true
};`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
