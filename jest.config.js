module.exports = {
  setupFiles: ['./test/unit/setup.js'],
  moduleFileExtensions: ['ts', 'js', 'vue'],
  testEnvironment: 'node',
  testEnvironmentOptions: { url: 'http://localhost/' },
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/.+.(js)$'],
  roots: ['<rootDir>', '<rootDir>/src'],
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['**/src/(components|common)/**/*.spec.(js|jsx|ts|tsx)'],
  globals: {
    window: true,
    'vue-jest': {
      experimentalCSSCompile: false,
    },
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  cache: false,
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '/test/'],
};
