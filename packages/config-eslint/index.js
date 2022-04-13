module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:jest/recommended'],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ['jest'],
  rules: {
    'no-plusplus': [
      1,
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'max-len': [
      'warn',
      {
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreTemplateLiterals: true,
        code: 100,
      },
    ],
    'arrow-body-style': 'off',
    'import/extensions': [
      'error',
      'always',
      {
        ignorePackages: true,
      },
    ],
  },
};
