import { BlogPostDetail, ModerationCheck, AIAnalysis } from '../../../types/blogReview.types';

export const mockBlogPostDetail: BlogPostDetail = {
  id: 'BP-2401',
  title: 'Top 10 Wedding Menu Trends for 2026',
  author: {
    name: 'Royal Feast Catering',
    avatar: 'RF',
  },
  category: 'Trends',
  content: {
    heroImage: '/images/wedding-menu-hero.jpg',
    introduction: 'Wedding catering has evolved dramatically over the past few years, with couples seeking more personalized and memorable dining experiences. In 2026, we\'re seeing a shift towards sustainable, locally-sourced ingredients combined with innovative presentation styles that wow guests while respecting dietary preferences.',
    ingredients: [
      'Locally-sourced seasonal vegetables',
      'Organic free-range proteins',
      'Artisanal bread and pastries',
      'Farm-fresh dairy products',
      'Sustainable seafood options',
      'Exotic spices and herbs',
    ],
    instructions: [
      'Start by consulting with couples about their vision and dietary requirements',
      'Source ingredients from local farms and sustainable suppliers',
      'Design a menu that balances traditional favorites with modern twists',
      'Create tasting sessions to refine flavors and presentation',
      'Coordinate with venue staff for seamless service execution',
      'Prepare backup options for last-minute dietary restrictions',
    ],
    chefTip: 'Always prepare 10-15% extra portions for weddings. Guests tend to eat more at celebrations, and running out of food can ruin the experience. Better to have leftovers than disappointed guests!',
  },
  tags: ['Wedding Catering', 'Menu Planning', 'Trends 2026', 'Event Catering'],
  status: 'pending',
  submittedDate: '2026-03-13T10:30:00Z',
};

export const mockModerationChecks: ModerationCheck[] = [
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
];

export const mockAIAnalysis: AIAnalysis = {
  sentimentScore: 0.85,
  plagiarismCheck: {
    status: 'clear',
    similarity: 12,
  },
};
