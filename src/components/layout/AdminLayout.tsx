import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { MainContent } from './MainContent';

export function AdminLayout() {
    return (
        <div className="flex flex-row h-screen w-full overflow-hidden bg-background text-text-primary text-sm font-sans transition-colors duration-normal ease-smooth">
            <Sidebar />
            <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
                <TopBar />
                <MainContent>
                    {/* The nested routes will render here */}
                    <Outlet />
                </MainContent>
            </div>
        </div>
    );
}
