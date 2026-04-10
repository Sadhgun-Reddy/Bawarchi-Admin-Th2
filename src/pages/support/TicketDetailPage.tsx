
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share, CheckCircle } from 'lucide-react';
import { TicketChat } from '../../components/support/TicketChat';
import { TicketMetadata } from '../../components/support/TicketMetadata';

export function TicketDetailPage() {
    const { id } = useParams<{ id: string }>();

    return (
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
            <div className="max-w-7xl mx-auto h-full flex flex-col gap-6">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div>
                        <Link to="/admin/support" className="text-text-secondary hover:text-accent transition-colors flex items-center gap-1 text-sm font-medium mb-2">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Tickets
                        </Link>
                        <div className="flex items-center gap-3">
                            <h1 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight">Login Issue</h1>
                            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-destructive/10 text-destructive border border-destructive/20">Open</span>
                        </div>
                        <p className="text-text-secondary text-sm mt-1">Ticket #{id || '39201'} • Created 2 hours ago via Web</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-surface hover:bg-surface-secondary text-text-primary border border-border rounded-lg text-sm font-medium transition-colors shadow-sm">
                            <Share className="w-4 h-4" />
                            Share
                        </button>
                        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-success hover:bg-success-muted text-success-foreground rounded-lg text-sm font-medium transition-colors shadow-sm">
                            <CheckCircle className="w-4 h-4" />
                            Resolve
                        </button>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full min-h-[600px] lg:h-[calc(100vh-200px)]">
                    {/* Left Column: Chat */}
                    <div className="lg:col-span-2 flex flex-col h-full">
                        <TicketChat />
                    </div>

                    {/* Right Column: Metadata */}
                    <div className="lg:col-span-1 h-full overflow-y-auto scroller-hide">
                        <TicketMetadata />
                    </div>
                </div>

            </div>
        </div>
    );
}
