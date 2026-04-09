import { ModerationTabsProps } from '../../../types/blogModeration.types';

export default function ModerationTabs({ activeTab, onTabChange, counts }: ModerationTabsProps) {
  const tabs = [
    { id: 'posts', label: 'Pending Blog Posts', count: counts.posts },
    { id: 'comments', label: 'Comments', count: counts.comments },
    { id: 'reviews', label: 'Reviews', count: counts.reviews },
  ];

  return (
    <div className="border-b border-border">
      <nav className="flex gap-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              relative px-1 py-3 text-sm font-medium transition-all duration-fast
              ${activeTab === tab.id 
                ? 'text-accent border-b-2 border-accent' 
                : 'text-text-secondary hover:text-text-primary'
              }
            `}
          >
            <span className="flex items-center gap-2">
              {tab.label}
              {tab.count > 0 && (
                <span className={`
                  px-2 py-0.5 text-xs font-semibold rounded-full transition-colors duration-fast
                  ${activeTab === tab.id
                    ? 'bg-orange-100 text-orange-600 dark:bg-orange-500/15 dark:text-orange-400'
                    : 'bg-badge-neutral text-badge-neutral-foreground'
                  }
                `}>
                  {tab.count}
                </span>
              )}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
}
