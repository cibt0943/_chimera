module.exports = {
  extends: [
    'stylelint-config-standard',  // ベースとなるルール
    'stylelint-prettier/recommended',
  ],
  plugins: [
    'stylelint-scss',
    'stylelint-order',
  ],
  rules: {
    'order/order': [
      'custom-properties',
      'declarations',
    ],
    'order/properties-alphabetical-order': true,  // ABC順に並べる
    'no-empty-source': null,
  },
}
