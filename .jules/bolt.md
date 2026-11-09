## 2024-11-06 - Unnecessary computations in render loops
**Learning:** Found that `TopBar` was running a `flatMap` on `navigationConfig` on every single render to get the list of all routes. In addition, the `.filter` inside it was executing `searchQuery.toLowerCase()` on every iteration rather than computing it once per filter loop.
**Action:** When filtering a static list against a changing string input in React, ensure the static list calculation is outside the component (or memoized heavily), wrap the filtered result in `useMemo`, and hoist any loop-invariant computations (like `toLowerCase()`) outside the inner callback.

## 2026-11-09 - Expensive O(n) string lowercasing inside filters
**Learning:** In `FoodRescuePage`, the string `toLowerCase()` method was being called 3 times per iteration inside a filter callback that ran on every render. Because the filter operated on mock data that was supposed to be state from context (`MOCK_DONATIONS` vs `donations`), this blocked performance and correctness.
**Action:** Use `useMemo` and extract the `toLowerCase()` operation outside of the filter to improve rendering time.
