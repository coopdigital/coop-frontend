module.exports = {
  extends: [
    '../node_modules/eslint-config-next',
    '../node_modules/eslint-config-next/core-web-vitals',
    '../packages/config-eslint/index.js',
  ],
  settings: {
    react: {
      version: '16',
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ['jest'],
  rules: {
    'jsx-a11y/anchor-is-valid': [0, 'never'],
    'import/extensions': [
      0,
      'never',
      {
        ignorePackages: true,
      },
    ],
  },
};
