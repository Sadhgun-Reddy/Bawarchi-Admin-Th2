import { useState } from 'react';
import { Plus, Shield, ChevronDown, CheckSquare, Square, AlertTriangle } from 'lucide-react';

interface PermissionRow {
    module: string;
    view: boolean | 'disabled';
    create: boolean | 'disabled';
    edit: boolean | 'disabled';
    delete: boolean | 'disabled';
    approve: boolean | 'disabled';
}

const initialPermissions: PermissionRow[] = [
    { module: 'User Management', view: true, create: false, edit: true, delete: 'disabled', approve: false },
    { module: 'Recipe Inventory', view: true, create: true, edit: true, delete: true, approve: true },
    { module: 'Financial Reports', view: true, create: false, edit: false, delete: 'disabled', approve: false },
    { module: 'Reviews & Comments', view: true, create: 'disabled', edit: true, delete: true, approve: true },
    { module: 'System Configuration', view: false, create: 'disabled', edit: 'disabled', delete: 'disabled', approve: 'disabled' },
];

export function RolesPermissionsPage() {
    const [permissions, setPermissions] = useState<PermissionRow[]>(initialPermissions);

    const togglePermission = (index: number, field: keyof Omit<PermissionRow, 'module'>) => {
        setPermissions(prev => {
            const newPermissions = [...prev];
            const current = newPermissions[index][field];
            if (current !== 'disabled') {
                newPermissions[index][field] = !current;
            }
            return newPermissions;
        });
    };

    const renderCheckbox = (value: boolean | 'disabled', onClick: () => void) => {
        if (value === 'disabled') {
            return (
                <div className="flex justify-center">
                    <Square className="w-5 h-5 text-surface-tertiary cursor-not-allowed opacity-50" />
                </div>
            );
        }
        return (
            <div className="flex justify-center cursor-pointer" onClick={onClick}>
                {value ? (
                    <CheckSquare className="w-5 h-5 text-accent" />
                ) : (
                    <Square className="w-5 h-5 text-text-tertiary hover:text-accent transition-colors" />
                )}
            </div>
        );
    };

    return (
        <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth no-scrollbar">
            <div className="max-w-5xl mx-auto space-y-8 pb-24">

                {/* Page Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-text-secondary text-sm mb-1">
                            <span>System Settings</span>
                            <span className="text-[16px]">&gt;</span>
                            <span className="text-text-primary">Roles &amp; Permissions</span>
                        </div>
                        <h2 className="text-3xl font-bold text-text-primary tracking-tight">Roles &amp; Permissions</h2>
                        <p className="text-text-secondary text-sm max-w-2xl">Manage roles, fine-tune access controls, and configure permissions across the platform.</p>
                    </div>
                    <button className="bg-accent hover:bg-accent-hover text-accent-foreground font-medium py-2.5 px-5 rounded-lg shadow-lg shadow-accent/20 transition-all flex items-center gap-2 text-sm whitespace-nowrap">
                        <Plus className="w-5 h-5" />
                        Create New Role
                    </button>
                </div>

                {/* Tabs Navigation */}
                <div className="border-b border-border flex gap-8 mt-2">
                    <a href="#" className="pb-3 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors border-b-2 border-transparent">
                        General
                    </a>
                    <a href="#" className="pb-3 text-sm font-medium text-accent border-b-2 border-accent">
                        Roles &amp; Permissions
                    </a>
                    <a href="#" className="pb-3 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors border-b-2 border-transparent">
                        Security
                    </a>
                    <a href="#" className="pb-3 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors border-b-2 border-transparent">
                        Audit Logs
                    </a>
                </div>

                {/* Role Selection Card */}
                <div className="bg-surface border border-border rounded-xl p-5 shadow-sm">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10 text-accent shrink-0">
                            <Shield className="w-6 h-6" />
                        </div>
                        <div className="flex-1 w-full">
                            <label htmlFor="role-select" className="block text-sm font-medium text-text-secondary mb-1.5">Editing Role</label>
                            <div className="relative max-w-md">
                                <select id="role-select" className="w-full bg-surface-secondary border border-border text-text-primary text-sm rounded-lg focus:ring-accent focus:border-accent block p-2.5 pl-3 pr-10 appearance-none cursor-pointer hover:border-text-tertiary transition-colors">
                                    <option value="moderator">Content Moderator</option>
                                    <option value="admin">Super Admin</option>
                                    <option value="manager">Restaurant Manager</option>
                                    <option value="viewer">Viewer</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-secondary">
                                    <ChevronDown className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                        <div className="hidden sm:flex flex-col items-end justify-center h-full">
                            <span className="text-xs text-text-secondary bg-surface-secondary px-2 py-1 rounded border border-border">Role ID: MOD-042</span>
                        </div>
                    </div>
                </div>

                {/* Permissions Matrix */}
                <div className="bg-surface border border-border rounded-xl overflow-hidden shadow-sm flex flex-col flex-1">
                    <div className="p-5 border-b border-border flex justify-between items-center bg-surface-secondary/30">
                        <h3 className="text-lg font-semibold text-text-primary">Permissions Matrix</h3>
                        <div className="flex items-center gap-2 text-sm text-text-secondary cursor-pointer hover:text-text-primary">
                            <span>Select All</span>
                            <Square className="w-5 h-5" />
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-surface-secondary text-text-secondary uppercase text-xs font-semibold tracking-wider">
                                <tr>
                                    <th scope="col" className="px-6 py-4 min-w-[200px]">Module Name</th>
                                    <th scope="col" className="px-4 py-4 text-center w-24">View</th>
                                    <th scope="col" className="px-4 py-4 text-center w-24">Create</th>
                                    <th scope="col" className="px-4 py-4 text-center w-24">Edit</th>
                                    <th scope="col" className="px-4 py-4 text-center w-24">Delete</th>
                                    <th scope="col" className="px-4 py-4 text-center w-24">Approve</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border text-text-primary">
                                {permissions.map((row, index) => (
                                    <tr key={index} className="hover:bg-surface-secondary/50 transition-colors group">
                                        <td className="px-6 py-4 font-medium flex items-center gap-3">
                                            {row.module}
                                        </td>
                                        <td className="px-4 py-4 text-center">
                                            {renderCheckbox(row.view, () => togglePermission(index, 'view'))}
                                        </td>
                                        <td className="px-4 py-4 text-center">
                                            {renderCheckbox(row.create, () => togglePermission(index, 'create'))}
                                        </td>
                                        <td className="px-4 py-4 text-center">
                                            {renderCheckbox(row.edit, () => togglePermission(index, 'edit'))}
                                        </td>
                                        <td className="px-4 py-4 text-center">
                                            {renderCheckbox(row.delete, () => togglePermission(index, 'delete'))}
                                        </td>
                                        <td className="px-4 py-4 text-center">
                                            {renderCheckbox(row.approve, () => togglePermission(index, 'approve'))}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Spacer for fixed bottom bar */}
                <div className="h-16"></div>
            </div>

            {/* Sticky Bottom Action Bar */}
            <div className="fixed bottom-0 left-0 md:left-[var(--sidebar-width)] right-0 z-10 bg-surface border-t border-border px-6 py-4 flex items-center justify-between shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-warning" />
                    <span className="text-sm text-text-secondary hidden sm:inline">Unsaved changes will affect 14 users assigned to this role.</span>
                </div>
                <div className="flex items-center gap-4">
                    <button className="text-text-secondary hover:text-text-primary text-sm font-medium px-4 py-2 transition-colors">
                        Cancel
                    </button>
                    <button className="bg-accent hover:bg-accent-hover text-accent-foreground font-medium py-2 px-6 rounded-lg shadow-lg shadow-accent/20 transition-all text-sm">
                        Save Permissions
                    </button>
                </div>
            </div>
        </div>
    );
}
