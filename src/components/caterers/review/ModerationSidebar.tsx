import React, { useState } from 'react';
import { ChecklistItem } from '../../../types/catererReview.types';
import { CheckCircle2, Circle, Check } from 'lucide-react';

interface ModerationSidebarProps {
    initialChecklist: ChecklistItem[];
}

export const ModerationSidebar: React.FC<ModerationSidebarProps> = ({ initialChecklist }) => {
    const [checklist, setChecklist] = useState<ChecklistItem[]>(initialChecklist);

    const toggleCheck = (id: string) => {
        setChecklist(prev =>
            prev.map(item =>
                item.id === id ? { ...item, isVerified: !item.isVerified } : item
            )
        );
    };

    return (
        <div className="sticky top-24 space-y-6">

            {/* Moderation Checklist block */}
            <div className="card-surface p-6 rounded-3xl shadow-massive dark:border dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-lg font-bold text-text-primary tracking-tight mb-4">Moderation Checklist</h3>
                <div className="space-y-4">
                    {checklist.map(item => (
                        <label
                            key={item.id}
                            className="flex items-start gap-3 p-3 -mx-3 rounded-xl hover:bg-surface-secondary dark:hover:bg-slate-950 transition-colors cursor-pointer group"
                        >
                            <div
                                className="mt-0.5 flex-shrink-0"
                                onClick={() => toggleCheck(item.id)}
                            >
                                {item.isVerified ? (
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-accent" />
                                ) : (
                                    <Circle className="w-5 h-5 text-border-secondary group-hover:text-text-tertiary transition-colors" />
                                )}
                            </div>
                            <div className="flex flex-col">
                                <span className={`text-sm font-bold transition-colors ${item.isVerified ? 'text-slate-700 dark:text-slate-300' : 'text-text-primary'}`}>
                                    {item.label}
                                </span>
                                <span className="text-xs text-text-secondary mt-0.5 leading-relaxed">
                                    {item.subLabel}
                                </span>
                            </div>
                        </label>
                    ))}
                </div>
            </div>

            {/* Remarks block */}
            <div className="card-surface p-6 rounded-3xl shadow-massive dark:border dark:border-slate-800 dark:bg-slate-900 flex flex-col">
                <h3 className="text-lg font-bold text-text-primary tracking-tight mb-4">Reviewer Remarks</h3>
                <textarea
                    className="w-full h-32 p-3 text-sm resize-none input-base bg-surface-secondary dark:bg-slate-950"
                    placeholder="Add internal notes about this caterer application..."
                ></textarea>
            </div>

            {/* Decision Actions */}
            <div className="flex flex-col gap-3">
                <button className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-semibold bg-emerald-500 hover:bg-emerald-600 shadow-sm shadow-emerald-100 dark:shadow-none transition-all active:scale-95">
                    <Check className="w-5 h-5" strokeWidth={2.5} />
                    Approve Caterer
                </button>
                <button className="w-full py-3 px-4 text-sm font-semibold rounded-xl text-destructive hover:bg-destructive/10 border border-transparent hover:border-destructive/20 transition-all active:scale-95">
                    Reject Application
                </button>
            </div>

        </div>
    );
};
