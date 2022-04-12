module.exports = {
  extends: [
    '../node_modules/eslint-config-next',
    '../node_modules/eslint-config-next/core-web-vitals',
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
    'arrow-body-style': 'off',
    'max-len': [
      'warn',
      {
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreComments: true,
        code: 100,
      },
    ],
    'jsx-a11y/anchor-is-valid': [0, 'never'],
    'object-curly-newline': [0, 'never'],
    'no-plusplus': [
      1,
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'import/extensions': [
      0,
      'never',
      {
        ignorePackages: true,
      },
    ],
  },
};
