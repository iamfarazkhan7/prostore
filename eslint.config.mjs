import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create an instance of FlatCompat for extending ESLint configs
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Extend configurations (including Next.js and TypeScript)
const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',  // or 'error' if stricter linting is needed
    },
  },
];

export default eslintConfig;
