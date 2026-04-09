interface ReviewHeaderProps {
  status: string;
  onBack: () => void;
}

export default function ReviewHeader({ status, onBack }: ReviewHeaderProps) {
  return (
    <div className="sticky top-0 z-10 bg-background border-b border-border px-6 py-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors w-fit"
          >
            <span>←</span>
            <span>Back to Queue</span>
          </button>
          <h1 className="text-2xl font-semibold text-text-primary">
            Review Blog Post
          </h1>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 text-sm font-medium bg-surface border border-border rounded-lg text-text-secondary">
            {status}
          </span>
        </div>
      </div>
    </div>
  );
}
