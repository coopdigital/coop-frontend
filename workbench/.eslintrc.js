module.exports = {
  //plugins: ['eslint-plugin-react', 'eslint-plugin-react-hooks'],

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
  },
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ['jest'],
  rules: {
    'jsx-a11y/anchor-is-valid': [0, 'never'],
    'arrow-body-style': [0, 'never'],
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
