import { MoreVertical, Eye, Edit2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { User, UsersTableProps } from '../../types/users';
import { cn } from '../../lib/utils';

export function UsersTable({ users, selectedUserIds, onSelectUser, onSelectAll }: UsersTableProps) {
    const navigate = useNavigate();
    const isAllSelected = users.length > 0 && selectedUserIds.length === users.length;

    // Initials generator for fallback avatar
    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    };

    // Status Badge Styling map
    const getStatusStyles = (status: User['status']) => {
        switch (status) {
            case 'active':
                return "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20";
            case 'pending':
                return "bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20";
            case 'suspended':
            case 'banned':
                return "bg-red-50 text-red-700 border-red-100 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20";
            default:
                return "bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-500/10 dark:text-slate-400 dark:border-slate-500/20";
        }
    };

    // Role Badge Styling map
    const getRoleStyles = (role: User['role']) => {
        switch (role) {
            case 'Admin':
                return "text-text-primary dark:bg-purple-500/10 dark:text-purple-400 dark:border dark:border-purple-500/20 dark:px-2 dark:py-0.5 dark:rounded-md";
            case 'Caterer':
                return "text-text-primary dark:bg-blue-500/10 dark:text-blue-400 dark:border dark:border-blue-500/20 dark:px-2 dark:py-0.5 dark:rounded-md";
            default:
                return "text-text-primary dark:text-slate-text-secondary";
        }
    };

    const getAvatarFallbackColor = (role: User['role']) => {
        switch (role) {
            case 'Admin': return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";
            case 'Caterer': return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
            case 'Vendor': return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400";
            default: return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400";
        }
    };

    return (
        <div className={cn(
            "w-full bg-surface border border-border rounded-[12px] overflow-hidden transition-all duration-normal ease-smooth",
            "shadow-card dark:shadow-none dark:bg-slate-card dark:border-slate-border dark:matte-surface"
        )}>
            <div className="overflow-x-auto no-scrollbar">
                <table className="w-full text-left text-sm whitespace-nowrap table-auto min-w-[800px]">

                    <thead className="bg-slate-50/50 border-b border-border text-text-secondary dark:bg-[#1E293B] uppercase text-xs tracking-wider">
                        <tr>
                            <th className="pl-6 pr-3 py-4 w-12">
                                <input
                                    type="checkbox"
                                    className="rounded border-border text-primary focus:ring-primary/20 w-4 h-4 cursor-pointer"
                                    checked={isAllSelected}
                                    // Custom handler for indeterminate property omitted for Phase A/B brevity unless ref needed
                                    onChange={onSelectAll}
                                />
                            </th>
                            <th className="px-6 py-4 font-semibold text-slate-500 dark:text-slate-400 w-auto">User</th>
                            <th className="px-6 py-4 font-semibold text-slate-500 dark:text-slate-400 w-32">Role</th>
                            <th className="px-6 py-4 font-semibold text-slate-500 dark:text-slate-400 w-32">Status</th>
                            <th className="px-6 py-4 font-semibold text-slate-500 dark:text-slate-400 w-40">Last Active</th>
                            <th className="px-6 py-4 w-16 text-right sr-only">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-border">
                        {users.map((user) => {
                            const isSelected = selectedUserIds.includes(user.id);

                            return (
                                <tr
                                    key={user.id}
                                    className={cn(
                                        "group transition-colors duration-normal ease-smooth",
                                        isSelected ? "bg-primary/5 dark:bg-primary/10" : "hover:bg-slate-50/80 dark:hover:bg-slate-bg/40"
                                    )}
                                >

                                    {/* Checkbox */}
                                    <td className="pl-6 pr-3 py-4 align-middle">
                                        <input
                                            type="checkbox"
                                            className="rounded border-border text-primary focus:ring-primary/20 w-4 h-4 cursor-pointer"
                                            checked={isSelected}
                                            onChange={() => onSelectUser(user.id)}
                                        />
                                    </td>

                                    {/* User Info */}
                                    <td className="px-6 py-4 align-middle">
                                        <div className="flex items-center gap-3">
                                            {user.avatarUrl ? (
                                                <img src={user.avatarUrl} alt={user.name} className="w-10 h-10 rounded-full object-cover border border-border" />
                                            ) : (
                                                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm", getAvatarFallbackColor(user.role))}>
                                                    {getInitials(user.name)}
                                                </div>
                                            )}

                                            <div className="flex flex-col">
                                                <span
                                                    onClick={() => navigate(`/admin/users/${user.id}`)}
                                                    className="font-semibold text-text-primary dark:text-slate-text-main group-hover:text-primary transition-colors cursor-pointer hover:underline"
                                                >
                                                    {user.name}
                                                </span>
                                                <span className="text-xs text-text-tertiary dark:text-slate-text-secondary">
                                                    {user.email}
                                                </span>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Role */}
                                    <td className="px-6 py-4 align-middle font-medium">
                                        <span className={getRoleStyles(user.role)}>{user.role}</span>
                                    </td>

                                    {/* Status */}
                                    <td className="px-6 py-4 align-middle">
                                        <span className={cn(
                                            "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide border",
                                            getStatusStyles(user.status)
                                        )}>
                                            {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                                        </span>
                                    </td>

                                    {/* Last Active */}
                                    <td className="px-6 py-4 text-text-secondary align-middle">
                                        {user.lastActive}
                                    </td>

                                    {/* Hover Actions */}
                                    <td className="px-6 py-4 align-middle text-right">
                                        <div className="flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-normal gap-1">
                                            <button
                                                onClick={() => navigate(`/admin/users/${user.id}`)}
                                                className="flex items-center gap-1 px-2 py-1.5 text-xs font-semibold text-blue-600 hover:text-white hover:bg-blue-600 dark:text-blue-400 dark:hover:text-white dark:hover:bg-blue-500 rounded transition-all"
                                                title="View Details"
                                            >
                                                <Eye strokeWidth={1.5} className="w-4 h-4" />
                                                View
                                            </button>
                                            <button
                                                onClick={() => navigate(`/admin/users/${user.id}`)}
                                                className="p-1.5 text-text-tertiary hover:text-text-primary hover:bg-surface-secondary dark:hover:bg-slate-700/50 rounded transition-colors"
                                                title="Edit User"
                                            >
                                                <Edit2 strokeWidth={1.5} className="w-4 h-4" />
                                            </button>
                                            <button className="p-1.5 text-text-tertiary hover:text-text-primary hover:bg-surface-secondary dark:hover:bg-slate-700/50 rounded transition-colors" title="More options">
                                                <MoreVertical strokeWidth={1.5} className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
