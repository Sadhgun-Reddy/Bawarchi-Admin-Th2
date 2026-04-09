import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../pages/auth/LoginPage';
import { ThemeShowcase } from '../components/ui/ThemeShowcase';
import { AdminLayout } from '../components/layout/AdminLayout';
import { DashboardOverview } from '../pages/dashboard/DashboardOverview';
import { AuditLogsPage } from '../pages/audit/AuditLogsPage';
import { ReportsExportsPage } from '../pages/reports/ReportsExportsPage';
import { UsersPage } from '../pages/users/UsersPage';
import { UserDetailPage } from '../pages/users/UserDetailPage';
import { CatererManagementPage } from '../pages/caterers/CatererManagement';
import { CatererApprovalsPage } from '../pages/caterers/CatererApprovalsPage';
import { CatererReviewPage } from '../pages/caterers/CatererReviewPage';
import { CatererComplaintsPage } from '../pages/caterers/CatererComplaintsPage';
import { MenuModerationPage } from '../pages/menus/MenuModerationPage';
import { OffersModerationPage } from '../pages/offers/OffersModerationPage';
import BlogModerationPage from '../pages/blog/BlogModerationPage';
import BlogReviewPage from '../pages/blog/BlogReviewPage';

export function AppRoutes() {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<LoginPage />} />

            {/* Protected View Layout */}
            <Route path="/admin" element={<AdminLayout />}>
                {/* Redirect base admin to dashboard overview */}
                <Route index element={<Navigate to="/admin/dashboard" replace />} />

                {/* Child Routes rendered in AdminLayout Outlet */}
                <Route path="dashboard" element={<DashboardOverview />} />
                <Route path="audit-logs" element={<AuditLogsPage />} />
                <Route path="reports" element={<ReportsExportsPage />} />
                <Route path="users" element={<UsersPage />} />
                <Route path="users/:id" element={<UserDetailPage />} />
                <Route path="caterers" element={<CatererManagementPage />} />
                <Route path="caterers/approvals" element={<CatererApprovalsPage />} />
                <Route path="caterers/review/:id" element={<CatererReviewPage />} />
                <Route path="caterers/complaints" element={<CatererComplaintsPage />} />
                <Route path="menus/moderation" element={<MenuModerationPage />} />
                <Route path="offers/moderation" element={<OffersModerationPage />} />
                <Route path="blog/moderation" element={<BlogModerationPage />} />
                <Route path="blog/review/:id" element={<BlogReviewPage />} />
                <Route path="showcase" element={<ThemeShowcase />} />
            </Route>

            {/* Catch-All to keep the app flow robust */}
            <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
        </Routes>
    );
}
