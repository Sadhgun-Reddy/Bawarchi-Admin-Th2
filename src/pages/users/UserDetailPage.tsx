import { DetailHeader } from '../../components/users/DetailHeader';
import { ProfileHeroCard } from '../../components/users/ProfileHeroCard';
import { HistorySplitView } from '../../components/users/HistorySplitView';
import { AdminNotesSection } from '../../components/users/AdminNotesSection';
import { useUsersContext } from '../../contexts/UsersContext';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export function UserDetailPage() {
    const { id } = useParams();
    const { userDetails, userBookings } = useUsersContext();

    // Use specific user logic if the backend was connected, for now falling back to the first available mock detail info since we don't have detail for every mock user

    // In a real app, use the ID to fetch user details over API
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div className="flex flex-col w-full h-full animate-fade-in relative max-w-[1600px] mx-auto pb-10 gap-6">
            <DetailHeader userName={userDetails.name} userId={userDetails.id} />
            <ProfileHeroCard user={userDetails} />
            <HistorySplitView bookings={userBookings} tickets={[]} />
            <AdminNotesSection />
        </div>
    );
}
