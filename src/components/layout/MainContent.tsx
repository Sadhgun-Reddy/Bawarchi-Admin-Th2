import React from 'react';

interface MainContentProps {
    children: React.ReactNode;
}

export function MainContent({ children }: MainContentProps) {
    return (
        <main className="flex-1 overflow-auto bg-background transition-colors duration-normal ease-smooth">
            <div className="max-w-7xl mx-auto w-full p-4 lg:p-8">
                {children}
            </div>
        </main>
    );
}
