export default {
  moduleFileExtensions: [
    'js',
    'jsx',
    'mjs',
  ],
  modulePathIgnorePatterns: [
    './node_modules/',
  ],
  moduleNameMapper: {
    '\\.(css|pcss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
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
