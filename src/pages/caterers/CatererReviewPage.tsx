
import { ReviewPageLayout } from '../../components/caterers/review/ReviewPageLayout';

export function CatererReviewPage() {
    return (
        <div className="flex flex-col w-full h-full animate-fade-in relative max-w-[1600px] mx-auto bg-background transition-colors dark:bg-slate-950">
            <ReviewPageLayout />
        </div>
    );
}
