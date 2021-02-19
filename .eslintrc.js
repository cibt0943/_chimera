module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',  // eslint:recommendedの中でTypeScriptに不要なものをOFFにする設定 (TypeScriptの型チェックで事足りているもの)
    'plugin:@typescript-eslint/recommended',  // 型を必要としない基本ルール
    'plugin:@typescript-eslint/recommended-requiring-type-checking',  // 型を必要とする基本ルール
    'prettier',
    'prettier/@typescript-eslint',  // Prettierでカバーできるルールを無効化
    'prettier/react',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: [
    '@typescript-eslint',
    'prefer-arrow',
    'react',
    'react-hooks',
  ],
  root: true,
  rules: {
    // 'space-before-function-paren': "off",
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        'disallowPrototype': true,
        'singleReturnOnly': false,
        'classPropertiesAllowed': false,
      },
    ],
  },
  overrides: [
    {
      'files': ['*.tsx'],
      'rules': {
        'react/prop-types': 'off',
      },
    },
  ],
}
