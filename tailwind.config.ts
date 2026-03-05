import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
                mono: ["Source Code Pro", "monospace"],
            },
            colors: {
                background: "var(--color-background)",
                foreground: "var(--color-foreground)",
                surface: {
                    DEFAULT: "var(--color-surface)",
                    secondary: "var(--color-surface-secondary)",
                    tertiary: "var(--color-surface-tertiary)",
                },
                border: {
                    DEFAULT: "var(--color-border)",
                    secondary: "var(--color-border-secondary)",
                },
                text: {
                    primary: "var(--color-text-primary)",
                    secondary: "var(--color-text-secondary)",
                    tertiary: "var(--color-text-tertiary)",
                    inverse: "var(--color-text-inverse)",
                },
                accent: {
                    DEFAULT: "var(--color-accent)",
                    hover: "var(--color-accent-hover)",
                    muted: "var(--color-accent-muted)",
                    foreground: "var(--color-accent-foreground)",
                },
                success: {
                    DEFAULT: "var(--color-success)",
                    muted: "var(--color-success-muted)",
                    foreground: "var(--color-success-foreground)",
                },
                warning: {
                    DEFAULT: "var(--color-warning)",
                    muted: "var(--color-warning-muted)",
                    foreground: "var(--color-warning-foreground)",
                },
                destructive: {
                    DEFAULT: "var(--color-destructive)",
                    muted: "var(--color-destructive-muted)",
                    foreground: "var(--color-destructive-foreground)",
                },
                input: {
                    DEFAULT: "var(--color-input-background)",
                    border: "var(--color-input-border)",
                    focus: "var(--color-input-focus)",
                },
                sidebar: {
                    background: "var(--color-sidebar-background)",
                    foreground: "var(--color-sidebar-foreground)",
                    active: "var(--color-sidebar-active)",
                    "active-foreground": "var(--color-sidebar-active-foreground)",
                    hover: "var(--color-sidebar-hover)",
                    border: "var(--color-sidebar-border)",
                },
                topbar: {
                    background: "var(--color-topbar-background)",
                    foreground: "var(--color-topbar-foreground)",
                    border: "var(--color-topbar-border)",
                },
                badge: {
                    neutral: "var(--color-badge-neutral)",
                    "neutral-foreground": "var(--color-badge-neutral-foreground)",
                },
            },
            borderRadius: {
                sm: "var(--radius-sm)",
                DEFAULT: "var(--radius-default)",
                md: "var(--radius-md)",
                lg: "var(--radius-lg)",
                xl: "var(--radius-xl)",
            },
            boxShadow: {
                "elevation-1": "var(--shadow-elevation-1)",
                "elevation-2": "var(--shadow-elevation-2)",
                "elevation-3": "var(--shadow-elevation-3)",
                "elevation-4": "var(--shadow-elevation-4)",
                input: "var(--shadow-input)",
                "input-focus": "var(--shadow-input-focus)",
                card: "var(--shadow-card)",
                dropdown: "var(--shadow-dropdown)",
                modal: "var(--shadow-modal)",
            },
            spacing: {
                "sidebar-width": "var(--sidebar-width)",
                "sidebar-collapsed": "var(--sidebar-collapsed-width)",
                "topbar-height": "var(--topbar-height)",
            },
            transitionDuration: {
                DEFAULT: "150ms",
                fast: "100ms",
                normal: "200ms",
                slow: "300ms",
            },
            transitionTimingFunction: {
                "ease-smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
                "ease-bounce": "cubic-bezier(0.34, 1.56, 0.64, 1)",
            },
            keyframes: {
                "fade-in": {
                    "0%": { opacity: "0", transform: "translateY(4px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "slide-in-left": {
                    "0%": { opacity: "0", transform: "translateX(-8px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                "scale-in": {
                    "0%": { opacity: "0", transform: "scale(0.96)" },
                    "100%": { opacity: "1", transform: "scale(1)" },
                },
            },
            animation: {
                "fade-in": "fade-in 200ms ease-out",
                "slide-in-left": "slide-in-left 200ms ease-out",
                "scale-in": "scale-in 150ms ease-out",
            },
        },
    },
    plugins: [],
};

export default config;
