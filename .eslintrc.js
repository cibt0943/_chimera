module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    // eslint:recommendedの中でTypeScriptに不要なものをOFFにする設定 (TypeScriptの型チェックで事足りているもの)
    'plugin:@typescript-eslint/eslint-recommended',
    // TypeScriptで推奨されるものをONにする設定
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
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
    'prettier',
    'react',
  ],
  root: true,
  rules: {
    // 'space-before-function-paren': "off",
    // 'react/prop-types': 0,
  },
  // settings: {
  //   react: {
  //     // pragma: "React", // Pragma to use, default to "React"
  //     version: "detect",  // React version. "detect" automatically picks the version you have installed.
  //                         // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
  //                         // default to latest and warns if missing
  //                         // It will default to "detect" in the future
  //   },
  // },
}
