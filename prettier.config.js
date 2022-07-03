/** @type {import('prettier').Config} */
module.exports = {
  arrowParens: 'always',
  printWidth: 100,
  singleQuote: true,
  tabWidth: 2,
  endOfLine: 'lf',
  useTabs: false,
  overrides: [
    {
      files: '*.scss',
      options: {
        singleQuote: false,
      },
    },
  ],
};
