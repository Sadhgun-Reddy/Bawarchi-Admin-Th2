
import { HelpCircle } from 'lucide-react';

export function UsersHeader() {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
                {/* Breadcrumb Stub */}
                <div className="flex items-center text-sm font-medium text-text-tertiary mb-1">
                    <span className="hover:text-text-primary cursor-pointer transition-colors">Home</span>
                    <span className="mx-2">/</span>
                    <span className="text-text-primary">Users</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">Users List</h1>
            </div>

            <div className="flex items-center">
                <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-secondary dark:hover:bg-[#1E293B] rounded transition-colors">
                    <HelpCircle className="w-4 h-4" />
                    Support / Help
                </button>
            </div>
        </div>
    );
}
