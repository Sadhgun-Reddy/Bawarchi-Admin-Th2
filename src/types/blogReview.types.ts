export interface BlogPostDetail {
  id: string;
  title: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  content: {
    heroImage?: string;
    introduction: string;
    ingredients?: string[];
    instructions?: string[];
    chefTip?: string;
  };
  tags: string[];
  status: string;
  submittedDate: string;
}

export interface ModerationCheck {
  id: string;
  label: string;
  description: string;
  isChecked: boolean;
}

export interface AIAnalysis {
  sentimentScore: number;
  plagiarismCheck: {
    status: 'clear' | 'warning' | 'flagged';
    similarity: number;
  };
}

export interface BlogReviewLayoutProps {
  post: BlogPostDetail;
  onBack: () => void;
  onApprove: () => void;
  onRequestChanges: (notes: string) => void;
  onReject: (notes: string) => void;
}

export interface PostMetaCardProps {
  post: BlogPostDetail;
}

export interface ArticleBodyProps {
  content: BlogPostDetail['content'];
}

export interface ModerationPanelProps {
  checks: ModerationCheck[];
  aiAnalysis: AIAnalysis;
  onCheckChange: (id: string) => void;
  onApprove: () => void;
  onRequestChanges: (notes: string) => void;
  onReject: (notes: string) => void;
}
