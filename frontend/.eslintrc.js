module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended', // 型を必要としない基本ルール
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // 型を必要とする基本ルール
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['frontend'],
      },
    },
  },
  globals: {},
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'jsx-a11y',
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
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off', //なぜか[Unable to resolve path to module 'ky']って言われるのでとりあえずチェックしない
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          // returns: false,
          // arguments: false,
          attributes: false,
          // properties: false,
          // variables: false,
        },
      },
    ],
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
}
