module.exports = {
  testEnvironment: 'node',
  collectCoverage: process.env.CI !== undefined,
  coveragePathIgnorePatterns: [
    '__test__'
  ]
}
