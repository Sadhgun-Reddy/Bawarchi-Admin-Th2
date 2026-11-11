## 2026-03-05 - Global Accessibility Polish
**Learning:** Icon-only buttons (like in `TopBar`, `Sidebar`, and `CatererDataTable`) must include `aria-label` attributes to ensure screen readers can understand the button's action. This is particularly important for non-text action triggers (e.g. eye icon for "View Details").
**Action:** Added explicit `aria-label` properties (e.g., `aria-label="Logout"`, `aria-label="View Details"`) to all icon-only control buttons across core layout components.
## 2026-11-11 - Accessibility in Form Fields and Icon Buttons
**Learning:** Discovered a pattern where inputs were missing explicit `htmlFor`-`id` pairings with their labels, reducing screen reader effectiveness. Also, icon-only buttons (like the show/hide password toggle) were missing `aria-label` attributes and title tooltips.
**Action:** Always ensure inputs have a unique `id` that matches their label's `htmlFor`. Always apply an `aria-label` and a `title` to icon-only buttons for both screen reader and tooltip accessibility.
