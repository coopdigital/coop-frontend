export default {
  moduleFileExtensions: ["js", "jsx", "mjs"],
  modulePathIgnorePatterns: ["./node_modules/"],
  roots: ["./src"],
  testEnvironment: "jsdom",
  testMatch: ["**/(*.)test.{js,jsx,mjs}"],
  testPathIgnorePatterns: ["./node_modules/"],
  transform: {
    "^.+\\.m?jsx?$": "babel-jest",
  },
};
