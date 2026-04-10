
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Printer, Share } from 'lucide-react';
import { DonationDetails } from '../../components/food-rescue/DonationDetails';
import { DonationPhotos } from '../../components/food-rescue/DonationPhotos';
import { DonationVerification } from '../../components/food-rescue/DonationVerification';

export function DonationReviewPage() {
    const { id } = useParams<{ id: string }>();

    return (
        <div className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth no-scrollbar">
            <div className="max-w-7xl mx-auto flex flex-col gap-6">

                {/* Breadcrumb & Header */}
                <div className="flex flex-col gap-4">
                    <Link to="/admin/rescue" className="inline-flex items-center gap-1 text-accent hover:text-accent-hover text-sm font-medium transition-colors w-fit">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Pending Donations
                    </Link>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight">Review Donation #{id || 'DN-2023-849'}</h1>
                            <div className="flex items-center gap-2 text-text-tertiary text-sm">
                                <span>Submitted by <strong className="text-text-secondary">Spice Garden Catering</strong></span>
                                <span>•</span>
                                <span>2 hours ago</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-warning/10 border border-warning/20 text-warning text-sm font-medium">
                                <span className="w-2 h-2 rounded-full bg-warning"></span>
                                Pending Review
                            </span>
                            <button className="p-2 text-text-tertiary hover:text-text-primary rounded-lg hover:bg-surface-secondary border border-transparent hover:border-border transition-all">
                                <Printer className="w-5 h-5" />
                            </button>
                            <button className="p-2 text-text-tertiary hover:text-text-primary rounded-lg hover:bg-surface-secondary border border-transparent hover:border-border transition-all">
                                <Share className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column: Details (2/3 width) */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        <DonationDetails />
                        <DonationPhotos />
                    </div>

                    {/* Right Column: Verification & Actions (1/3 width) */}
                    <div className="lg:col-span-1 flex flex-col gap-6">
                        <DonationVerification />
                    </div>
                </div>

            </div>
        </div>
    );
}
