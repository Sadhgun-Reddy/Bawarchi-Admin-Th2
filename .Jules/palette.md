## 2026-03-05 - Global Accessibility Polish
**Learning:** Icon-only buttons (like in `TopBar`, `Sidebar`, and `CatererDataTable`) must include `aria-label` attributes to ensure screen readers can understand the button's action. This is particularly important for non-text action triggers (e.g. eye icon for "View Details").
**Action:** Added explicit `aria-label` properties (e.g., `aria-label="Logout"`, `aria-label="View Details"`) to all icon-only control buttons across core layout components.
## 2023-11-08 - [Focus rings and Context Storage for Auth Testing]
**Learning:** Local testing of application paths using Playwright can bypass UI login flows by injecting mock auth into localStorage.
**Action:** When running visual tests with Playwright on specific protected dashboard routes, inject `auth_token` and `auth_user` into the page context's localStorage before navigating.
