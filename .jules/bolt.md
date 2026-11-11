## 2024-11-20 - Unnecessary computations in render loops
**Learning:** Found that `TopBar` was running a `flatMap` on `navigationConfig` on every single render to get the list of all routes. In addition, the `.filter` inside it was executing `searchQuery.toLowerCase()` on every iteration rather than computing it once per filter loop.
**Action:** When filtering a static list against a changing string input in React, ensure the static list calculation is outside the component (or memoized heavily), wrap the filtered result in `useMemo`, and hoist any loop-invariant computations (like `toLowerCase()`) outside the inner callback.

## 2024-11-20 - [CRITICAL] Prevent Sensitive Data Logging in Frontend Forms
**Vulnerability:** The authentication component (`LoginPage.tsx`) was logging the entire `formData` object to the browser console upon submission, including the plaintext password.
**Learning:** Frontend logging must be carefully curated. When debugging forms, it's a common anti-pattern to log the entire state object. In a production environment, this exposes sensitive user credentials (passwords, tokens, PII) to anyone with access to the browser's developer tools or to malicious scripts that might intercept console output.
**Prevention:** Never log raw form data objects directly. Specifically extract and log only non-sensitive identifiers (like the user's email) and avoid logging secrets. Enforce linting rules (like `no-console` or specific custom rules) if possible to prevent accidental console logging in production builds.

## 2024-11-20 - Prevent Information Leakage in Error Logs
**Vulnerability:** The application was logging raw error objects directly to the browser console (`console.error(err)`) during a failed login attempt in `LoginPage.tsx`.
**Learning:** While this may seem harmless in development, in production, raw error objects can contain stack traces, internal paths, or API response details that could aid an attacker in understanding the system's architecture or finding other vulnerabilities.
**Prevention:** Always use safe, static, or generic error messages when logging to the client-side console (e.g., `console.error('Login failed')`). Any detailed logging should be securely recorded on the server side where it cannot be accessed by end users.

## 2024-11-20 - Fixing Build Issue with undefined variables
**Learning:** Encountered an issue where an undeclared mock array variable `MOCK_DONATIONS` was used in `src/pages/food-rescue/FoodRescuePage.tsx`. It caused a TypeScript compile error `error TS2304: Cannot find name 'MOCK_DONATIONS'`.
**Action:** Refactored the code to use the actual state array `donations` provided from context instead of `MOCK_DONATIONS` to allow the code to compile, preventing build issues. Ensure you always use correct references to state.
