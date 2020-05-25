module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript',
  testMatch: ['**/src/components/**/*.spec.ts'],
  cache: false,
  setupFiles: ['./test/unit/setup.js'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  moduleFileExtensions: ['ts', 'js'],
  testEnvironment: 'node',
  testURL: 'http://localhost/',
};
