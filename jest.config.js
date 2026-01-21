module.exports = {
  testEnvironment: 'node',
  verbose: true,
  testMatch: ['**/tests/**/*.js', '**/*.test.js', '**/*.spec.js'],
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/index.js',
    '!src/**/*.js.old',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  collectCoverage: process.env.CI === 'true' || process.env.GITHUB_ACTIONS === 'true',
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  setupFilesAfterEnv: [],
};
