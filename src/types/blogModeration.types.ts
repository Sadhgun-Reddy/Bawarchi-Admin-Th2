export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  thumbnailUrl?: string;
  caterer: {
    name: string;
    avatar: string;
  };
  category: string;
  submittedDate: string;
  status: string;
}

export interface ModerationStat {
  label: string;
  value: string;
  trend?: string;
  icon: string;
}

export interface BlogModerationTableProps {
  posts: BlogPost[];
  loading?: boolean;
  activeTab?: string;
}

export interface ModerationStatsGridProps {
  stats: ModerationStat[];
}

export interface ModerationTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  counts: {
    posts: number;
    comments: number;
    reviews: number;
  };
}
