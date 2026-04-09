import { useState } from 'react';
import ReviewHeader from './ReviewHeader';
import PostMetaCard from './PostMetaCard';
import ArticleBody from './ArticleBody';
import ModerationPanel from './ModerationPanel';
import { BlogReviewLayoutProps } from '../../../types/blogReview.types';

export default function BlogReviewLayout({
  post,
  onBack,
  onApprove,
  onRequestChanges,
  onReject,
}: BlogReviewLayoutProps) {
  const [checks, setChecks] = useState([
    {
      id: 'check-1',
      label: 'Content Guidelines',
      description: 'Post follows community guidelines and professional standards',
      isChecked: false,
    },
    {
      id: 'check-2',
      label: 'Originality',
      description: 'Content is original and not plagiarized',
      isChecked: false,
    },
    {
      id: 'check-3',
      label: 'Image Safety',
      description: 'Images are appropriate and properly licensed',
      isChecked: false,
    },
    {
      id: 'check-4',
      label: 'Formatting',
      description: 'Post is well-formatted and easy to read',
      isChecked: false,
    },
  ]);

  const aiAnalysis = {
    sentimentScore: 0.85,
    plagiarismCheck: {
      status: 'clear' as const,
      similarity: 12,
    },
  };

  const handleCheckChange = (id: string) => {
    setChecks(prev =>
      prev.map(check =>
        check.id === id ? { ...check, isChecked: !check.isChecked } : check
      )
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <ReviewHeader status={post.status} onBack={onBack} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        {/* Content Preview Column */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <PostMetaCard post={post} />
          <ArticleBody content={post.content} />
        </div>
        
        {/* Moderation Panel */}
        <div className="lg:col-span-1">
          <ModerationPanel
            checks={checks}
            aiAnalysis={aiAnalysis}
            onCheckChange={handleCheckChange}
            onApprove={onApprove}
            onRequestChanges={onRequestChanges}
            onReject={onReject}
          />
        </div>
      </div>
    </div>
  );
}
