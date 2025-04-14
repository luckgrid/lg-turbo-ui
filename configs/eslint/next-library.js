import js from '@eslint/js';
import pluginNext from '@next/eslint-plugin-next';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import baseConfig from './base.js';

export default tseslint.config([
  ...baseConfig,
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
      },
    },
  },
  {
    plugins: {
      '@next/next': pluginNext,
    },
    rules: {
      // Set specific rules for internal Next.js libraries
      '@next/next/no-html-link-for-pages': 'off', // No access to pages directory
      '@next/next/no-img-element': 'warn', // Warn but don't error on <img>
      '@next/next/no-head-element': 'error', // Use Next.js Head component
      '@next/next/google-font-display': 'error', // Ensure proper font loading
      '@next/next/google-font-preconnect': 'error', // Ensure proper font loading
      '@next/next/inline-script-id': 'error', // Ensure script tags have IDs
      '@next/next/no-title-in-document-head': 'error', // Use page-level titles
      '@next/next/no-typos': 'error', // Catch common Next.js API typos
      '@next/next/no-unwanted-polyfillio': 'error', // Prevent duplicate polyfills
    },
  },
  {
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      // React scope no longer necessary with new JSX transform.
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/no-children-prop': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      // Additional React rules for internal Next.js libraries
      'react/no-unknown-property': ['error', { ignore: ['css'] }], // Allow css prop
      'react/jsx-no-leaked-render': 'error', // Prevent common SSR issues
      'react/jsx-no-useless-fragment': 'warn', // Keep bundle size small
      'react/jsx-handler-names': [
        'warn',
        {
          // Consistent event handler naming
          eventHandlerPrefix: 'handle',
          eventHandlerPropPrefix: 'on',
        },
      ],
    },
  },
]);
