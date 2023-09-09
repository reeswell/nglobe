/** @type {import("eslint").Linter.Config} */
const config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  plugins: ['@typescript-eslint', 'tailwindcss'],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended-type-checked',
    'prettier',
    'plugin:tailwindcss/recommended',
  ],
  rules: {
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    '@typescript-eslint/consistent-type-imports': 1,
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    'react/prop-types': 'off',
    'tailwindcss/no-custom-classname': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    'tailwindcss/classnames-order': 'error',
  },
  settings: {
    next: {
      rootDir: ['./'],
    },
  },
}

module.exports = config
