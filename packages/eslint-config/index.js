module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    "airbnb-base",
    "plugin:jest/recommended",
    "plugin:react/recommended"
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  plugins: ["jest"],
  rules: {
    "import/extensions": [
      "error",
      "always",
      {
        ignorePackages: true
      }
    ]
  }
};
