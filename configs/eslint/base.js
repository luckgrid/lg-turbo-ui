/// <reference types="./types.d.ts" />

import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import turboConfig from 'eslint-config-turbo/flat';
import eslintPluginImport from 'eslint-plugin-import';
import onlyWarn from 'eslint-plugin-only-warn';
import turboPlugin from 'eslint-plugin-turbo';
import tseslint from 'typescript-eslint';

// All packages and apps that use or access environment variables should add this rule to their eslint config
export const restrictEnvAccess = tseslint.config(
  { ignores: ['**/env.ts', 'dist/**'] },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    rules: {
      'no-restricted-properties': [
        'error',
        {
          object: 'process',
          property: 'env',
          message:
            'Avoid using process.env directly - validate your types with valibot',
        },
      ],
      'no-restricted-imports': [
        'error',
        {
          name: 'process',
          importNames: ['env'],
          message:
            'Avoid using process.env directly - validate your types with valibot',
        },
      ],
    },
  },
);

export default tseslint.config([
  { ignores: ['dist/**', 'node_modules/**'] },
  ...turboConfig,
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
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
      'import/no-cycle': 'warn',
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'type',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
          ],
          alphabetize: {
            order: 'asc',
          },
        },
      ],
    },
  },
  {
    rules: {
      semi: ['error', 'always'],
    },
  },
]);
