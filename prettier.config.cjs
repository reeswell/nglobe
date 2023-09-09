/** @type {import('prettier').Config} */
module.exports = {
  singleQuote: true,
  bracketSpacing: true,
  semi: false,
  tabWidth: 2,
  jsxSingleQuote: false,
  trailingComma: 'es5',
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
}
