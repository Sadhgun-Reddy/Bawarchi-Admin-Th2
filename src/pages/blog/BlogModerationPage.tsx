import ModerationLayout from '../../components/blog/moderation/ModerationLayout';
import { useBlogContext } from '../../contexts/BlogContext';

export function BlogModerationPage() {
  const { posts, stats } = useBlogContext();

  return (
    <ModerationLayout
      posts={posts}
      stats={stats}
      loading={false}
    />
  );
}
