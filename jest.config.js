module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'mjs'],
  modulePathIgnorePatterns: ['./node_modules/'],
  moduleNameMapper: {
    '\\.(css|pcss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  roots: ['./packages'],
  testEnvironment: 'node',
  testMatch: ['**/(*.)test.{js,jsx,mjs}'],
  testPathIgnorePatterns: ['./node_modules/', './packages/react-ui'],
  transform: {
    '^.+\\.m?jsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
