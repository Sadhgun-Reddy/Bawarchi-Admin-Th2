import { useNavigate } from 'react-router-dom';
import { BlogModerationTableProps } from '../../../types/blogModeration.types';
import { Eye, ChevronLeft, ChevronRight } from 'lucide-react';

const categoryColors: Record<string, string> = {
  'Trends': 'bg-purple-100 text-purple-700 dark:bg-purple-500/15 dark:text-purple-400',
  'Recipe': 'bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400',
  'Technique': 'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400',
  'Business Tips': 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400',
  'Seasonal': 'bg-teal-100 text-teal-700 dark:bg-teal-500/15 dark:text-teal-400',
};

export default function BlogModerationTable({ posts, loading }: BlogModerationTableProps) {
  const navigate = useNavigate();

  const handleReviewPost = (postId: string) => {
    navigate(`/admin/blog/review/${postId}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12 bg-surface border border-border rounded-lg shadow-card">
        <p className="text-text-secondary">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-x-auto bg-surface border border-border rounded-lg shadow-card">
        <table className="w-full">
          <thead className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-border">
            <tr>
              <th className="px-6 py-3.5 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">
                Post ID
              </th>
              <th className="px-6 py-3.5 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">
                Post Title
              </th>
              <th className="px-6 py-3.5 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">
                Caterer Name
              </th>
              <th className="px-6 py-3.5 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3.5 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">
                Submitted Date
              </th>
              <th className="px-6 py-3.5 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {posts.map((post, index) => (
              <tr 
                key={post.id} 
                className="hover:bg-slate-50/80 dark:hover:bg-slate-700/50 dark:hover:border-accent/20 transition-all duration-fast animate-fade-in group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-text-tertiary">
                  {post.id}
                </td>
                <td className="px-6 py-4 max-w-md">
                  <div className="flex items-start gap-3">
                    {post.thumbnailUrl && (
                      <div className="w-12 h-12 flex-shrink-0 bg-surface-secondary rounded-md dark:rounded overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5" />
                      </div>
                    )}
                    <div className="flex flex-col gap-1 min-w-0">
                      <p className="text-sm font-semibold text-text-primary dark:text-white truncate">
                        {post.title}
                      </p>
                      <p className="text-sm text-text-secondary line-clamp-1">
                        {post.subtitle}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 flex items-center justify-center bg-gradient-to-br from-accent/10 to-accent/5 border border-border rounded-full text-xs font-semibold text-accent">
                      {post.caterer.avatar}
                    </div>
                    <span className="text-sm font-medium text-text-primary dark:text-slate-400">
                      {post.caterer.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full ${categoryColors[post.category] || 'bg-badge-neutral text-badge-neutral-foreground'}`}>
                    {post.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                  {new Date(post.submittedDate).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button 
                    onClick={() => handleReviewPost(post.id)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-accent-foreground bg-accent border border-accent rounded-lg hover:bg-accent-hover transition-all duration-fast shadow-elevation-1 dark:shadow-accent/20 group-hover:shadow-elevation-2"
                  >
                    <Eye className="w-4 h-4" strokeWidth={1.5} />
                    Review Post
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between px-6 py-4 bg-surface border border-border rounded-lg shadow-card">
        <p className="text-sm text-text-secondary">
          Showing <span className="font-medium text-text-primary">{posts.length}</span> of <span className="font-medium text-text-primary">{posts.length}</span> results
        </p>
        <div className="flex items-center gap-2">
          <button 
            className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-text-primary bg-surface border border-border rounded-lg hover:bg-surface-secondary transition-colors duration-fast disabled:opacity-40 disabled:cursor-not-allowed shadow-elevation-1" 
            disabled
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
            Previous
          </button>
          <button className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-text-primary bg-surface border border-border rounded-lg hover:bg-surface-secondary transition-colors duration-fast shadow-elevation-1">
            Next
            <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
