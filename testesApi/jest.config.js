/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/dist/tests"],
  testMatch: ["**/*.spec.js"],
};