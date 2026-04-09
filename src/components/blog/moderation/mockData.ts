import { BlogPost, ModerationStat } from '../../../types/blogModeration.types';

export const mockBlogPosts: BlogPost[] = [
  {
    id: 'BP-2401',
    title: 'Top 10 Wedding Menu Trends for 2026',
    subtitle: 'Discover the hottest catering trends that will make your wedding unforgettable',
    thumbnailUrl: '/images/wedding-menu.jpg',
    caterer: {
      name: 'Royal Feast Catering',
      avatar: 'RF',
    },
    category: 'Trends',
    submittedDate: '2026-03-13T10:30:00Z',
    status: 'pending',
  },
  {
    id: 'BP-2402',
    title: 'Vegetarian Delights: A Complete Guide',
    subtitle: 'Explore creative vegetarian dishes that will impress even the most devoted meat lovers',
    caterer: {
      name: 'Green Plate Kitchen',
      avatar: 'GP',
    },
    category: 'Recipe',
    submittedDate: '2026-03-13T08:15:00Z',
    status: 'pending',
  },
  {
    id: 'BP-2403',
    title: 'Mastering the Art of Tandoori Cooking',
    subtitle: 'Professional techniques for achieving authentic tandoori flavors in your catering business',
    caterer: {
      name: 'Spice Route Catering',
      avatar: 'SR',
    },
    category: 'Technique',
    submittedDate: '2026-03-12T16:45:00Z',
    status: 'pending',
  },
  {
    id: 'BP-2404',
    title: 'Budget-Friendly Corporate Lunch Ideas',
    subtitle: 'How to deliver quality corporate meals without breaking the bank',
    caterer: {
      name: 'Office Bites Co.',
      avatar: 'OB',
    },
    category: 'Business Tips',
    submittedDate: '2026-03-12T14:20:00Z',
    status: 'pending',
  },
  {
    id: 'BP-2405',
    title: 'Seasonal Ingredients: Spring Edition',
    subtitle: 'Make the most of fresh spring produce in your catering menu',
    caterer: {
      name: 'Farm Fresh Catering',
      avatar: 'FF',
    },
    category: 'Seasonal',
    submittedDate: '2026-03-11T11:00:00Z',
    status: 'pending',
  },
];

export const mockModerationStats: ModerationStat[] = [
  {
    label: 'Avg Review Time',
    value: '2.4 hrs',
    trend: '-12%',
    icon: 'Clock',
  },
  {
    label: 'Pending Items',
    value: '23',
    trend: '+5%',
    icon: 'FileText',
  },
  {
    label: 'Approval Rate',
    value: '87%',
    trend: '+3%',
    icon: 'CheckCircle',
  },
];
