export default {
  moduleFileExtensions: [
    'js',
    'jsx',
    'mjs',
  ],
  modulePathIgnorePatterns: [
    './node_modules/',
  ],
  roots: [
    './packages',
  ],
  testEnvironment: 'node',
  testMatch: [
    '**/(*.)test.{js,jsx,mjs}',
  ],
  testPathIgnorePatterns: [
    './node_modules/',
  ],
  transform: {
    '^.+\\.m?jsx?$': 'babel-jest',
  },
};
