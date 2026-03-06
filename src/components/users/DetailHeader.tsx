import { Key, Edit2, ShieldAlert, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function DetailHeader({ userName, userId }: { userName: string; userId: string }) {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
                {/* Breadcrumb Stub */}
                <div className="flex items-center text-sm font-medium text-text-tertiary mb-1">
                    <button onClick={() => navigate('/admin/users')} className="hover:text-text-primary transition-colors flex items-center gap-1">
                        <ArrowLeft className="w-4 h-4" /> Users
                    </button>
                    <span className="mx-2">/</span>
                    <span className="text-text-primary">User Details</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                    {userName} <span className="text-text-tertiary text-xl font-medium ml-1">#{userId}</span>
                </h1>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                <button className="flex items-center justify-center gap-2 h-9 px-4 text-sm font-medium text-text-secondary bg-surface dark:bg-[#1E293B] border border-border rounded hover:bg-surface-secondary dark:hover:bg-[#2C3849] transition-colors shadow-sm dark:shadow-none whitespace-nowrap">
                    <Key className="w-4 h-4" />
                    Reset Password
                </button>
                <button className="flex items-center justify-center gap-2 h-9 px-4 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded hover:bg-blue-50 dark:hover:bg-blue-500/20 transition-all shadow-sm dark:shadow-[0_0_15px_rgba(30,58,138,0.2)] whitespace-nowrap">
                    <Edit2 className="w-4 h-4" />
                    Edit Profile
                </button>
                <button className="flex items-center justify-center gap-2 h-9 px-4 text-sm font-medium text-red-600 dark:text-red-400 bg-red-50/50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded hover:bg-red-50 dark:hover:bg-red-500/20 transition-colors shadow-sm dark:shadow-none whitespace-nowrap">
                    <ShieldAlert className="w-4 h-4" />
                    Suspend
                </button>
            </div>
        </div>
    );
}
