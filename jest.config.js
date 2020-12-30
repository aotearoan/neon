module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript',
  setupFiles: ['./test/unit/setup.js'],
  moduleFileExtensions: ['ts', 'js'],
  testEnvironment: 'node',
  testURL: 'http://localhost/',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/.+.(js)$'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['**/src/(components|common)/**/*.spec.(js|jsx|ts|tsx)'],
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  cache: false,
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '/test/'],
};
