import { Mail, Phone, Calendar, Monitor, Star, IndianRupee, CalendarCheck } from 'lucide-react';
import { UserDetails } from '../../types/users';
import { cn } from '../../lib/utils';

export function ProfileHeroCard({ user }: { user: UserDetails }) {

    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    };

    return (
        <div className={cn(
            "w-full bg-white dark:bg-slate-card rounded-[16px] p-6 lg:p-8 transition-all duration-normal ease-smooth",
            "shadow-float border border-border dark:border-slate-800 dark:shadow-none dark:matte-surface"
        )}>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                {/* Avatar Row */}
                <div className="flex items-center gap-6 lg:w-1/3">
                    <div className="relative">
                        {user.avatarUrl ? (
                            <img src={user.avatarUrl} alt={user.name} className="w-24 h-24 rounded-full object-cover border-[4px] border-white dark:border-slate-800 shadow-md" />
                        ) : (
                            <div className="w-24 h-24 rounded-full flex items-center justify-center font-bold text-2xl bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-400 border-[4px] border-white dark:border-slate-800 shadow-md">
                                {getInitials(user.name)}
                            </div>
                        )}
                        {/* Status Indicator */}
                        <span className={cn(
                            "absolute bottom-2 right-2 w-5 h-5 rounded-full border-4 border-white dark:border-slate-800",
                            user.status === 'active' ? 'bg-green-500' : 'bg-red-500'
                        )} />
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-text-primary dark:text-white leading-tight mb-1">{user.name}</h2>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide bg-blue-50 text-blue-700 border border-blue-100 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20">
                            {user.role}
                        </span>
                    </div>
                </div>

                {/* Contact & Activity Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 flex-1">

                    {/* Contact Info */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-text-tertiary dark:text-slate-400 mb-1">Contact Information</h3>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center">
                                <Mail className="w-4 h-4 text-indigo-500 dark:text-indigo-400" strokeWidth={1.5} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[11px] font-semibold text-text-tertiary dark:text-slate-400 uppercase tracking-wider">Email Address</span>
                                <span className="text-sm font-medium text-text-primary dark:text-white">{user.email}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-green-50 dark:bg-green-500/10 flex items-center justify-center">
                                <Phone className="w-4 h-4 text-green-600 dark:text-green-400" strokeWidth={1.5} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[11px] font-semibold text-text-tertiary dark:text-slate-400 uppercase tracking-wider">Phone Number</span>
                                <span className="text-sm font-medium text-text-primary dark:text-white">{user.phone}</span>
                            </div>
                        </div>
                    </div>

                    {/* Account Activity */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-text-tertiary dark:text-slate-400 mb-1">Account Activity</h3>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center">
                                <Calendar className="w-4 h-4 text-orange-600 dark:text-orange-400" strokeWidth={1.5} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[11px] font-semibold text-text-tertiary dark:text-slate-400 uppercase tracking-wider">Registration Date</span>
                                <span className="text-sm font-medium text-text-primary dark:text-white">{user.registrationDate}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700/50 flex items-center justify-center">
                                <Monitor className="w-4 h-4 text-slate-600 dark:text-slate-400" strokeWidth={1.5} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[11px] font-semibold text-text-tertiary dark:text-slate-400 uppercase tracking-wider">Last Login</span>
                                <span className="text-sm font-medium text-text-primary dark:text-white">{user.lastLogin.date} (IP: {user.lastLogin.ip})</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Aggregated Stats Row */}
            <div className="mt-8 lg:mt-10 pt-6 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400 rounded-lg">
                        <IndianRupee className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div>
                        <div className="text-sm font-medium text-text-secondary dark:text-slate-400">Lifetime Spend</div>
                        <div className="text-2xl font-bold text-indigo-700 dark:text-indigo-400 tracking-tight">₹3,15,000</div>
                    </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30">
                    <div className="p-3 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 rounded-lg">
                        <CalendarCheck className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div>
                        <div className="text-sm font-medium text-text-secondary dark:text-slate-400">Total Bookings</div>
                        <div className="text-2xl font-bold text-text-primary dark:text-white tracking-tight">12</div>
                    </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30">
                    <div className="p-3 bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 rounded-lg">
                        <Star className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div>
                        <div className="text-sm font-medium text-text-secondary dark:text-slate-400">Avg Rating Given</div>
                        <div className="text-2xl font-bold text-text-primary dark:text-white tracking-tight">4.8 <span className="text-sm font-medium text-text-tertiary">/ 5.0</span></div>
                    </div>
                </div>
            </div>

        </div>
    );
}
