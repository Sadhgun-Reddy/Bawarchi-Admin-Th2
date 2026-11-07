## 2026-03-05 - Global Accessibility Polish
**Learning:** Icon-only buttons (like in `TopBar`, `Sidebar`, and `CatererDataTable`) must include `aria-label` attributes to ensure screen readers can understand the button's action. This is particularly important for non-text action triggers (e.g. eye icon for "View Details").
**Action:** Added explicit `aria-label` properties (e.g., `aria-label="Logout"`, `aria-label="View Details"`) to all icon-only control buttons across core layout components.
