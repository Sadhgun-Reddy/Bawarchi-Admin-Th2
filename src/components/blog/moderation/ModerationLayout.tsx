import { useState } from 'react';
import ModerationHeader from './ModerationHeader';
import ModerationTabs from './ModerationTabs';
import ModerationStatsGrid from './ModerationStatsGrid';
import BlogModerationTable from './BlogModerationTable';
import { BlogPost, ModerationStat } from '../../../types/blogModeration.types';

interface ModerationLayoutProps {
  posts: BlogPost[];
  stats: ModerationStat[];
  loading?: boolean;
}

export default function ModerationLayout({ posts, stats, loading }: ModerationLayoutProps) {
  const [activeTab, setActiveTab] = useState('posts');

  const tabCounts = {
    posts: posts.length,
    comments: 0,
    reviews: 0,
  };

  return (
    <div className="flex flex-col gap-6 p-6 min-h-screen bg-background">
      <ModerationHeader />
      
      <ModerationTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        counts={tabCounts}
      />
      
      <ModerationStatsGrid stats={stats} />
      
      <BlogModerationTable
        posts={posts}
        loading={loading}
        activeTab={activeTab}
      />
    </div>
  );
}
