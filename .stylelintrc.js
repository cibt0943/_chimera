module.exports = {
  extends: [
    'stylelint-config-standard',  // ベースとなるルール
    'stylelint-config-recess-order',
  ],
  plugins: [
    'stylelint-order',
  ],
  ignoreFiles: [
    '**/node_modules/**',
  ],
  rules: {
    'string-quotes': 'single',
    'no-empty-source': null,
  },
}
