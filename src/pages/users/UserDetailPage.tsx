import { DetailHeader } from '../../components/users/DetailHeader';
import { ProfileHeroCard } from '../../components/users/ProfileHeroCard';
import { HistorySplitView } from '../../components/users/HistorySplitView';
import { AdminNotesSection } from '../../components/users/AdminNotesSection';
import { mockUserDetails, mockUserBookings, mockUserTickets } from '../../components/users/userDetailMockData';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export function UserDetailPage() {
    const { id } = useParams();

    // In a real app, use the ID to fetch user details over API
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div className="flex flex-col w-full h-full animate-fade-in relative max-w-[1600px] mx-auto pb-10 gap-6">
            <DetailHeader userName={mockUserDetails.name} userId={mockUserDetails.id} />
            <ProfileHeroCard user={mockUserDetails} />
            <HistorySplitView bookings={mockUserBookings} tickets={mockUserTickets} />
            <AdminNotesSection />
        </div>
    );
}
