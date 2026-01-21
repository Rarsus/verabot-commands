/**
 * ESLint Configuration for verabot-commands
 * Commands module for VeraBot2.0
 * 
 * Uses shared ESLint rules for consistency with other submodules
 */

const security = require('eslint-plugin-security');
const js = require('@eslint/js');
const sharedConfig = require('../../.eslintrc.shared.js');

module.exports = [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '.git/**',
      'coverage/**',
      'repos/**',
      'eslint.config.js',
      'jest.config.js',
      'package.json',
      'package-lock.json',
    ],
  },
  {
    files: ['eslint.config.js', 'jest.config.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'commonjs',
      globals: sharedConfig.nodeGlobals,
    },
  },
  js.configs.recommended,
  {
    plugins: {
      security,
    },
  },
  // Source files configuration
  sharedConfig.createSourceConfig({
    files: ['src/**/*.js'],
    rules: {
      ...sharedConfig.securityRules,
    },
  }),
  // Test files configuration
  sharedConfig.createTestConfig({
    files: sharedConfig.testFilePatterns,
  }),
];
