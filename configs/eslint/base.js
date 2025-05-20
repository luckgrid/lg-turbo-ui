/// <reference types="./types.d.ts" />

import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import turboConfig from "eslint-config-turbo/flat";
import eslintPluginImport from "eslint-plugin-import";
import onlyWarn from "eslint-plugin-only-warn";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";

// All packages and apps that use or access environment variables should add this rule to their eslint config
export const restrictEnvAccess = tseslint.config(
  { ignores: ["**/env.ts", "dist/**"] },
  {
    files: ["**/*.js", "**/*.ts", "**/*.tsx"],
    rules: {
      "no-restricted-properties": [
        "error",
        {
          object: "process",
          property: "env",
          message:
            "Avoid using process.env directly - validate your types with Zod.",
        },
      ],
      "no-restricted-imports": [
        "error",
        {
          name: "process",
          importNames: ["env"],
          message:
            "Avoid using process.env directly - validate your types with Zod.",
        },
      ],
    },
  }
);

export default tseslint.config([
  { ignores: ["dist/**", "node_modules/**"] },
  ...turboConfig,
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    plugins: {
      import: eslintPluginImport,
    },
    rules: {
      "import/no-cycle": "warn",
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
            "object",
          ],
          pathGroups: [
            {
              pattern: "*.{css,sass,scss,less}",
              group: "object",
              position: "before",
            },
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            {
              pattern: "next",
              group: "external",
              position: "before",
            },
            {
              pattern: "@workspace/**",
              group: "internal",
              position: "before",
            },
            {
              pattern: "@/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "../**",
              group: "parent",
              position: "before",
            },
            {
              pattern: "./**",
              group: "sibling",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
            orderImportKind: "asc",
          },
          "newlines-between": "always",
          distinctGroup: true,
          warnOnUnassignedImports: true,
        },
      ],
    },
  },
  {
    rules: {
      semi: ["error", "always"],
    },
  },
]);
