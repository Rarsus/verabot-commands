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
  moduleNameMapper: {
    '^verabot-utils/(.*)$': '<rootDir>/../verabot-utils/src/$1',
    '^verabot-core/(.*)$': '<rootDir>/../verabot-core/src/$1',
    '^verabot-commands/(.*)$': '<rootDir>/src/$1',
  },
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
