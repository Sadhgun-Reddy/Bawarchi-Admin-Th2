import { useParams, useNavigate } from 'react-router-dom';
import BlogReviewLayout from '../../components/blog/review/BlogReviewLayout';
import { useBlogContext } from '../../contexts/BlogContext';

export function BlogReviewPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { postDetail, updatePostStatus } = useBlogContext();

  const handleApprove = () => {
    if (id) {
       updatePostStatus(id, 'approved');
       navigate('/admin/blog/moderation');
    }
  };

  const handleReject = () => {
     if (id) {
       updatePostStatus(id, 'rejected');
       navigate('/admin/blog/moderation');
    }
  };

  const handleRequestChanges = () => {
      if (id) {
          updatePostStatus(id, 'changes_requested');
          navigate('/admin/blog/moderation');
      }
  }

  const handleBack = () => {
      navigate('/admin/blog/moderation');
  }


  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-64px)] pb-12">
      <BlogReviewLayout
        post={postDetail!}
        onApprove={handleApprove}
        onReject={handleReject}
        onRequestChanges={handleRequestChanges}
        onBack={handleBack}
      />
    </div>
  );
}
