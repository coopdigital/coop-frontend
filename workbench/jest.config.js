module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'mjs'],
  modulePathIgnorePatterns: ['./node_modules/'],
  moduleNameMapper: {
    '\\.(css|pcss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  testEnvironment: 'jsdom',
  testMatch: ['**/(*.)test.{js,jsx,mjs}'],
  testPathIgnorePatterns: ['./node_modules/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': ['babel-jest', { presets: ['next/babel'] }],
  },
};
