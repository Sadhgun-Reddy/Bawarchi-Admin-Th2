import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Printer, Share } from 'lucide-react';
import { DonationDetails } from '../../components/food-rescue/DonationDetails';
import { DonationPhotos } from '../../components/food-rescue/DonationPhotos';
import { DonationVerification } from '../../components/food-rescue/DonationVerification';

export function DonationReviewPage() {
    const { id } = useParams<{ id: string }>();

    return (
        <div className="flex-1 overflow-y-auto p-8 scroll-smooth no-scrollbar">
            <div className="max-w-6xl mx-auto space-y-8 pb-24">

                {/* Page Title Section */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                    <div>
                        <Link to="/admin/rescue" className="inline-flex items-center text-accent text-sm font-medium mb-3 hover:underline decoration-accent/30 underline-offset-4 transition-all">
                            <ArrowLeft className="w-4 h-4 mr-1" />
                            Back to Pending
                        </Link>
                        <h1 className="text-3xl font-bold text-text-primary tracking-tight">Review Food Request</h1>
                        <p className="text-text-secondary mt-1 text-sm">Request ID: #{id || 'Req-2023-894'} • Submitted 2 hours ago</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-warning/10 text-warning border border-warning/20 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-warning mr-2"></span>
                            Pending Review
                        </span>
                        <div className="hidden sm:flex items-center gap-2">
                            <button className="p-2 text-text-tertiary hover:text-text-primary rounded-lg border border-transparent hover:bg-surface-secondary hover:border-border transition-all">
                                <Printer className="w-5 h-5" />
                            </button>
                            <button className="p-2 text-text-tertiary hover:text-text-primary rounded-lg border border-transparent hover:bg-surface-secondary hover:border-border transition-all">
                                <Share className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Details (2/3 width) */}
                    <div className="lg:col-span-2 space-y-6">
                        <DonationDetails />
                        <DonationPhotos />
                    </div>

                    {/* Right Column: Actions (1/3 width) */}
                    <div className="lg:col-span-1 space-y-6">
                        <DonationVerification />
                    </div>

                </div>
            </div>
        </div>
    );
}
