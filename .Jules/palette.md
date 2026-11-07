## 2026-11-07 - Accessible Hover Actions in Data Tables
**Learning:** Table row action buttons hidden with `opacity-0 group-hover:opacity-100` are invisible to sighted keyboard users when tabbing, and icon-only buttons lack context for screen readers.
**Action:** Always add `focus-within:opacity-100` to the hover wrapper, apply `focus-visible` styles, and add descriptive `aria-label` attributes to icon-only buttons.
