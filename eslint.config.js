import js from "@eslint/js";
import ts from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default ts.config(
  {
    ignores: ["dist", "dist/**", "node_modules", "node_modules/**", "postcss.config.js", "tailwind.config.ts"],
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-empty-pattern": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "no-undef": "off",
      "no-useless-assignment": "off",
      "react-hooks/set-state-in-effect": "off"
    },
  }
);
