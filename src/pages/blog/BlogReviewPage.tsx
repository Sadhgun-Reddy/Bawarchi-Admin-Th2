import { useNavigate } from 'react-router-dom';
import BlogReviewLayout from '../../components/blog/review/BlogReviewLayout';
import { mockBlogPostDetail } from '../../components/blog/review/mockData';

export default function BlogReviewPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/admin/blog/moderation');
  };

  const handleApprove = () => {
    console.log('Post approved');
    // Add approval logic here
  };

  const handleRequestChanges = (notes: string) => {
    console.log('Changes requested:', notes);
    // Add request changes logic here
  };

  const handleReject = (notes: string) => {
    console.log('Post rejected:', notes);
    // Add rejection logic here
  };

  return (
    <BlogReviewLayout
      post={mockBlogPostDetail}
      onBack={handleBack}
      onApprove={handleApprove}
      onRequestChanges={handleRequestChanges}
      onReject={handleReject}
    />
  );
}
