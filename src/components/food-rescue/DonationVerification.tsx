import React from 'react';
import { ShieldCheck, CheckCircle, X, Check } from 'lucide-react';

export const DonationVerification: React.FC = () => {
    return (
        <div className="bg-surface border border-border rounded-xl p-6 shadow-card sticky top-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-text-primary flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-text-tertiary" />
                    Verification
                </h3>
            </div>

            <form action="#" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4 mb-6">
                    <label className="text-xs font-semibold text-text-tertiary uppercase tracking-wider block mb-2">Safety Checklist</label>

                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-secondary/30 hover:bg-surface-secondary/50 transition-colors border border-transparent hover:border-border-secondary cursor-pointer">
                        <input type="checkbox" id="check_temp" className="mt-0.5 rounded border-border bg-surface-secondary text-accent focus:ring-offset-surface focus:ring-accent h-4 w-4" />
                        <label htmlFor="check_temp" className="text-sm text-text-primary cursor-pointer select-none">
                            Temperature Check Passed
                            <span className="block text-xs text-text-tertiary font-normal mt-0.5">Food stored at correct temps</span>
                        </label>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-secondary/30 hover:bg-surface-secondary/50 transition-colors border border-transparent hover:border-border-secondary cursor-pointer">
                        <input type="checkbox" id="check_pack" className="mt-0.5 rounded border-border bg-surface-secondary text-accent focus:ring-offset-surface focus:ring-accent h-4 w-4" />
                        <label htmlFor="check_pack" className="text-sm text-text-primary cursor-pointer select-none">
                            Packaging Intact
                            <span className="block text-xs text-text-tertiary font-normal mt-0.5">No leaks or damage visible</span>
                        </label>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-secondary/30 hover:bg-surface-secondary/50 transition-colors border border-transparent hover:border-border-secondary cursor-pointer">
                        <input type="checkbox" id="check_allergen" className="mt-0.5 rounded border-border bg-surface-secondary text-accent focus:ring-offset-surface focus:ring-accent h-4 w-4" />
                        <label htmlFor="check_allergen" className="text-sm text-text-primary cursor-pointer select-none">
                            Allergen Labels Present
                            <span className="block text-xs text-text-tertiary font-normal mt-0.5">Nuts, Dairy, Gluten marked</span>
                        </label>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-secondary/30 hover:bg-surface-secondary/50 transition-colors border border-transparent hover:border-border-secondary cursor-pointer">
                        <input type="checkbox" id="check_kitchen" disabled checked className="mt-0.5 rounded border-border bg-surface-secondary text-accent focus:ring-offset-surface focus:ring-accent h-4 w-4 opacity-50" />
                        <label htmlFor="check_kitchen" className="text-sm text-text-secondary cursor-pointer select-none">
                            Source Verified
                            <span className="block text-xs text-text-tertiary font-normal mt-0.5">Auto-verified by system</span>
                        </label>
                        <CheckCircle className="ml-auto text-success w-[18px] h-[18px]" />
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="notes" className="text-xs font-semibold text-text-tertiary uppercase tracking-wider block mb-2">Internal Notes</label>
                    <textarea
                        id="notes"
                        rows={3}
                        placeholder="Add notes for the logistics team..."
                        className="w-full bg-surface-secondary text-text-primary text-sm rounded-lg border-border focus:border-accent focus:ring-1 focus:ring-accent placeholder-text-tertiary resize-none"
                    ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border">
                    <button className="flex items-center justify-center gap-2 px-4 py-3 bg-destructive/10 hover:bg-destructive/20 text-destructive border border-destructive/20 rounded-lg text-sm font-semibold transition-all">
                        <X className="w-5 h-5" />
                        Reject
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 py-3 bg-accent hover:bg-accent-hover text-accent-foreground rounded-lg text-sm font-semibold shadow-elevation-2 transition-all">
                        <Check className="w-5 h-5" />
                        Approve
                    </button>
                </div>
            </form>
        </div>
    );
};
