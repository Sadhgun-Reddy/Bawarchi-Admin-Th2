import { PostMetaCardProps } from '../../../types/blogReview.types';

export default function PostMetaCard({ post }: PostMetaCardProps) {
  return (
    <div className="p-6 bg-surface border border-border rounded-lg">
      <div className="flex flex-col gap-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-text-primary">
          {post.title}
        </h2>
        
        {/* Author & Meta Info */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center bg-surface-secondary border border-border rounded-full text-sm font-semibold text-text-primary">
              {post.author.avatar}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-text-primary">
                {post.author.name}
              </span>
              <span className="text-xs text-text-secondary">
                {new Date(post.submittedDate).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-xs text-text-tertiary">Post ID:</span>
            <span className="text-xs font-mono text-text-secondary">{post.id}</span>
          </div>
        </div>
        
        {/* Category & Tags */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 text-xs font-medium bg-surface-secondary border border-border rounded text-text-primary">
              {post.category}
            </span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs text-text-secondary bg-surface-secondary border border-border rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
