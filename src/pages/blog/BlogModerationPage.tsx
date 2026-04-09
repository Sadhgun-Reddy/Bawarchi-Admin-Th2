import ModerationLayout from '../../components/blog/moderation/ModerationLayout';
import { mockBlogPosts, mockModerationStats } from '../../components/blog/moderation/mockData';

export default function BlogModerationPage() {
  return (
    <ModerationLayout
      posts={mockBlogPosts}
      stats={mockModerationStats}
      loading={false}
    />
  );
}
