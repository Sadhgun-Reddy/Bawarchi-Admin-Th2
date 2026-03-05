import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Loader2 } from 'lucide-react';

interface SaaSLoginForm {
    email: string;
    password: string;
    rememberMe: boolean;
}

export function LoginPage() {
    const [formData, setFormData] = useState<SaaSLoginForm>({
        email: '',
        password: '',
        rememberMe: false,
    });

    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const validate = () => {
        const newErrors: { email?: string; password?: string } = {};
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);
            // Simulate API call
            setTimeout(() => {
                setIsSubmitting(false);
                console.log('Login Form Data: ', formData);
            }, 1500);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4 font-sans text-text-primary transition-colors duration-normal">
            <div className="w-full max-w-md">

                {/* Core Auth Card */}
                {/* Stripe Light: rounded-[12px], no border, massive soft shadow (shadow-modal) */}
                {/* Slate Dark: rounded-[8px], 1px border in var(--color-border), matte bg (bg-surface) */}
                <div className="bg-surface rounded-[12px] dark:rounded-[8px] p-8 sm:p-10 transition-all duration-normal dark:border dark:border-border shadow-modal dark:shadow-none">

                    <div className="text-center mb-10">
                        {/* Minimalist Logo */}
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent-muted text-accent mb-6">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold tracking-tight">Login to Dashboard</h1>
                        <p className="text-text-secondary text-sm mt-2">Welcome back to the modern workspace</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-text-secondary block">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-tertiary">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <input
                                    type="email"
                                    className={`input-base w-full pl-10 ${errors.email ? 'border-destructive focus:border-destructive shadow-[0_0_0_3px_rgba(239,68,68,0.15)]' : ''}`}
                                    placeholder="name@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    disabled={isSubmitting}
                                />
                            </div>
                            {errors.email && <p className="text-sm text-destructive mt-1 animate-fade-in">{errors.email}</p>}
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium text-text-secondary block">Password</label>
                                <a href="#" className="text-sm font-medium text-accent hover:text-accent-hover transition-colors">Forgot Password?</a>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-tertiary">
                                    <Lock className="h-5 w-5" />
                                </div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className={`input-base w-full pl-10 pr-10 ${errors.password ? 'border-destructive focus:border-destructive shadow-[0_0_0_3px_rgba(239,68,68,0.15)]' : ''}`}
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    disabled={isSubmitting}
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-text-tertiary hover:text-text-secondary focus:outline-none"
                                    onClick={() => setShowPassword(!showPassword)}
                                    disabled={isSubmitting}
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                            {errors.password && <p className="text-sm text-destructive mt-1 animate-fade-in">{errors.password}</p>}
                        </div>

                        {/* Options Row */}
                        <div className="flex items-center">
                            <input
                                id="remember"
                                type="checkbox"
                                className="h-4 w-4 rounded border-input-border text-accent focus:ring-accent-muted bg-input transition-colors cursor-pointer"
                                checked={formData.rememberMe}
                                onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                                disabled={isSubmitting}
                            />
                            <label htmlFor="remember" className="ml-2 block text-sm text-text-secondary cursor-pointer">
                                Keep me signed in
                            </label>
                        </div>

                        {/* Primary Action Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full flex justify-center items-center gap-2 bg-accent hover:bg-accent-hover text-accent-foreground font-medium py-2.5 px-4 rounded-[6px] transition-all duration-normal disabled:opacity-70 disabled:cursor-not-allowed shadow-elevation-1 focus:outline-none focus:ring-2 focus:ring-accent-muted focus:border-transparent mt-2"
                        >
                            {isSubmitting ? (
                                <Loader2 className="h-5 w-5 animate-spin" />
                            ) : (
                                <>
                                    Login to Dashboard
                                    <ArrowRight className="h-5 w-5" />
                                </>
                            )}
                        </button>

                    </form>
                </div>

                {/* Footer Area */}
                <p className="text-center text-sm text-text-tertiary mt-8">
                    By signing in, you agree to our <a href="#" className="underline hover:text-text-secondary transition-colors">Terms of Service</a>.
                </p>
            </div>
        </div>
    );
}
