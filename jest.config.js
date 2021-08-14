module.exports = {
  verbose: false,
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,vue}",
    "!**/node_modules/**",
    "!src/**/*.mock.js",
  ],
  preset: "@vue/cli-plugin-unit-jest",
};
