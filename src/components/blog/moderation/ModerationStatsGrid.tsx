import { ModerationStatsGridProps } from '../../../types/blogModeration.types';
import { Clock, FileText, CheckCircle, TrendingDown, TrendingUp } from 'lucide-react';

const iconMap = {
  Clock,
  FileText,
  CheckCircle,
};

export default function ModerationStatsGrid({ stats }: ModerationStatsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, index) => {
        const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
        const isPositiveTrend = stat.trend?.startsWith('-') && index === 0; // Negative time is good
        const isNegativeTrend = stat.trend?.startsWith('+') && index === 1; // More pending is concerning
        const isGoodTrend = stat.trend?.startsWith('+') && index === 2; // Higher approval is good
        
        return (
          <div
            key={index}
            className={`
              p-6 bg-surface border border-border rounded-lg shadow-card
              transition-all duration-normal hover:shadow-elevation-3 hover:border-border-secondary
              ${index === 0 ? 'bg-gradient-to-br from-indigo-50/50 to-transparent dark:from-indigo-500/5 dark:to-transparent' : ''}
            `}
          >
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-text-secondary">
                  {stat.label}
                </p>
                <p className="text-3xl font-semibold text-text-primary">
                  {stat.value}
                </p>
              </div>
              <div className="p-2.5 bg-surface-secondary rounded-lg">
                {IconComponent && (
                  <IconComponent 
                    className="w-5 h-5 text-accent" 
                    strokeWidth={1.5}
                  />
                )}
              </div>
            </div>
            
            {stat.trend && (
              <div className="mt-4 flex items-center gap-1.5">
                {(isPositiveTrend || isGoodTrend) ? (
                  <TrendingDown className="w-3.5 h-3.5 text-success" strokeWidth={2} />
                ) : (
                  <TrendingUp className="w-3.5 h-3.5 text-warning" strokeWidth={2} />
                )}
                <span className={`text-xs font-semibold ${
                  isPositiveTrend || isGoodTrend
                    ? 'text-success-foreground dark:text-success' 
                    : 'text-warning-foreground dark:text-warning'
                }`}>
                  {stat.trend}
                </span>
                <span className="text-xs text-text-tertiary">vs last period</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
