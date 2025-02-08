import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: {
        AudioWorkletGlobalScope: true,
      },
    },
    rules: {
      'no-undef': 'off',
    },
  }
];