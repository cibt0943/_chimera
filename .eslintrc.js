module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    // eslint:recommendedの中でTypeScriptに不要なものをOFFにする設定 (TypeScriptの型チェックで事足りているもの)
    'plugin:@typescript-eslint/eslint-recommended',
    // TypeScriptで推奨されるものをONにする設定
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  globals: {
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    '@typescript-eslint',
    'react',
  ],
  root: true,
  rules: {
    // 'space-before-function-paren': "off",
    'react/prop-types': 'off',
  },
}
