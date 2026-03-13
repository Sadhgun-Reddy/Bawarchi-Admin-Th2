import React from 'react';
import { ModerationInsight } from '../../../types/offersModeration.types';
import { Bot, ShieldAlert, Users } from 'lucide-react';

export const ModerationInsightsGrid: React.FC<{ insights: ModerationInsight[] }> = ({ insights }) => {

    const renderIcon = (iconName: string) => {
        switch (iconName) {
            case 'bot':
                return (
                    <div className="p-2 rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                        <Bot className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                );
            case 'shield-alert':
                return (
                    <div className="p-2 rounded-lg bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400">
                        <ShieldAlert className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                );
            case 'users':
                return (
                    <div className="p-2 rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
                        <Users className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {insights.map((insight, idx) => (
                <div key={idx} className="bg-surface rounded-xl p-5 border border-border shadow-sm dark:bg-slate-800 dark:border-slate-700 transition-shadow flex items-start space-x-4">
                    {renderIcon(insight.icon)}
                    <div className="flex flex-col flex-1">
                        <h4 className="text-sm font-semibold text-text-primary dark:text-white mb-0.5">
                            {insight.title}
                        </h4>
                        <p className="text-xs text-text-secondary dark:text-slate-400 mb-2">
                            {insight.description}
                        </p>
                        <div className="text-xl font-bold text-text-primary dark:text-white flex items-center gap-2">
                            {insight.value}

                            {/* Team Status indicator ping effect */}
                            {insight.icon === 'users' && (
                                <span className="relative flex h-2.5 w-2.5 ml-1">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
