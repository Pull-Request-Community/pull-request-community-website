module.exports = {
  arrowParens: 'always',
  printWidth: 100,
  singleQuote: true,
  tabWidth: 2,
  endOfLine: 'auto',
  overrides: [
    {
      files: '*.scss',
      options: {
        singleQuote: false,
      },
    },
  ],
};
