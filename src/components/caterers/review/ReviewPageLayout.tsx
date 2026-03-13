import React from 'react';
import { ReviewHeader } from './ReviewHeader';
import { ApplicationInfoSections } from './ApplicationInfoSections';
import { ModerationSidebar } from './ModerationSidebar';
import { CatererApplicationDetail } from '../../../types/catererReview.types';

// Mock Data matching the screenshot / specifications
const MOCK_APPLICATION: CatererApplicationDetail = {
    id: 'APP-1082',
    businessName: 'Royal Bawarchi',
    contactPerson: 'Arun Singh',
    email: 'arun@royalbawarchi.in',
    phone: '+91 98765 43210',
    address: 'Shop 14, Food Street, Hiranandani Estate, Thane West, Maharashtra 400615',
    capacity: '500-1000 orders/day',
    cuisines: ['North Indian', 'Mughlai', 'Chinese', 'Biryani'],
    documents: [
        { name: 'FSSAI_License_2024.pdf', type: 'PDF', size: '2.4 MB', uploadDate: 'Oct 24, 2023' },
        { name: 'GST_Certificate.pdf', type: 'PDF', size: '1.1 MB', uploadDate: 'Oct 24, 2023' },
        { name: 'Owner_Aadhar_Card.pdf', type: 'PDF', size: '3.5 MB', uploadDate: 'Oct 24, 2023' },
        { name: 'Kitchen_Photos.zip', type: 'ZIP', size: '15.8 MB', uploadDate: 'Oct 24, 2023' },
    ],
    checklist: [
        { id: 'chk-1', label: 'Verify FSSAI License', subLabel: 'Check validity and matched address.', isVerified: true },
        { id: 'chk-2', label: 'GST Number Verification', subLabel: 'Cross-check with govt portal.', isVerified: true },
        { id: 'chk-3', label: 'Kitchen Hygiene Check', subLabel: 'Review provided photos/video tour.', isVerified: false },
        { id: 'chk-4', label: 'Identity Verification', subLabel: 'Match ID with applicant name.', isVerified: false },
    ]
};

export const ReviewPageLayout: React.FC = () => {
    return (
        <div className="w-full flex flex-col min-h-screen">
            <ReviewHeader businessName={MOCK_APPLICATION.businessName} />

            <div className="w-full px-4 md:px-8 pb-12">
                {/* Split View Container */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                    {/* Main Context - Span 2 */}
                    <div className="lg:col-span-2 w-full">
                        <ApplicationInfoSections application={MOCK_APPLICATION} />
                    </div>

                    {/* Moderation Sidebar - Span 1 */}
                    <div className="lg:col-span-1 w-full relative">
                        <ModerationSidebar initialChecklist={MOCK_APPLICATION.checklist || []} />
                    </div>

                </div>
            </div>
        </div>
    );
};
