import { Save } from 'lucide-react';

export function AdminNotesSection() {
    return (
        <div className="bg-white dark:bg-slate-card rounded-xl p-6 lg:p-8 mt-2 border border-border dark:border-slate-800 shadow-sm dark:shadow-none transition-all duration-normal">
            <h3 className="text-lg font-bold text-text-primary dark:text-white mb-4 tracking-tight">Administrative Notes</h3>
            <p className="text-sm text-text-secondary dark:text-slate-400 mb-4">
                Private notes visible only to administrators. These notes are not shared with the user.
            </p>

            <div className="flex flex-col gap-4">
                <textarea
                    className="w-full min-h-[120px] p-4 text-sm bg-surface dark:bg-[#0F172A] border border-border dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-blue-500/20 transition-all resize-y text-text-primary dark:text-slate-300 placeholder:text-text-tertiary select-auto"
                    placeholder="Add notes about this user account, previous interactions, or special requirements..."
                ></textarea>

                <div className="flex justify-end">
                    <button className="flex items-center justify-center gap-2 h-10 px-6 text-sm font-medium text-white bg-primary hover:bg-accent-hover rounded-lg transition-all shadow-md shadow-primary/20 dark:bg-blue-600 dark:hover:bg-blue-500 dark:shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:-translate-y-0.5">
                        <Save className="w-4 h-4" />
                        Save Note
                    </button>
                </div>
            </div>
        </div>
    );
}
