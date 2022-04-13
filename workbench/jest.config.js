module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'mjs'],
  modulePathIgnorePatterns: ['./node_modules/'],
  moduleNameMapper: {
    '\\.(css|pcss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  testEnvironment: 'node',
  testMatch: ['**/(*.)test.{js,jsx,mjs}'],
  testPathIgnorePatterns: ['./node_modules/'],
  transform: {
    '^.+\\.m?jsx?$': 'babel-jest',
  },
};
