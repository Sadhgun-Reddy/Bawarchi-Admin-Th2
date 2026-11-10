## 2026-03-05 - Global Accessibility Polish
**Learning:** Icon-only buttons (like in `TopBar`, `Sidebar`, and `CatererDataTable`) must include `aria-label` attributes to ensure screen readers can understand the button's action. This is particularly important for non-text action triggers (e.g. eye icon for "View Details").
**Action:** Added explicit `aria-label` properties (e.g., `aria-label="Logout"`, `aria-label="View Details"`) to all icon-only control buttons across core layout components.

## 2023-10-27 - Contextual ARIA labels in tables
**Learning:** Generic ARIA labels on table action buttons (like just "Approve" or "Reject") create an ambiguous and confusing screen reader experience when tabbing through rows, as the user loses the context of which item they are acting upon.
**Action:** Always include contextual information from the row (e.g., `aria-label="Approve ${app.businessName}"`) in action buttons within data tables to ensure the specific target of the action is clearly communicated to assistive technologies.
