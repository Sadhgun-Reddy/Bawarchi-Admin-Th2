import { Link } from 'react-router-dom';

export function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full p-8 text-center animate-fade-in">
            <h1 className="text-6xl font-bold text-text-primary mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-text-secondary mb-6">Page Not Found</h2>
            <p className="text-text-tertiary max-w-md mb-8">
                The page you are looking for doesn't exist or has been moved.
            </p>
            <Link
                to="/admin/dashboard"
                className="bg-accent hover:bg-accent-hover text-accent-foreground px-6 py-3 rounded-lg font-medium shadow-elevation-2 transition-all"
            >
                Back to Dashboard
            </Link>
        </div>
    );
}
