module.exports = {
  globalSetup: '<rootDir>/test/unit/globalSetup.js',
  setupFiles: ['./test/unit/setup.ts'],
  preset: 'ts-jest/presets/default-esm',
  moduleFileExtensions: ['ts', 'js', 'vue'],
  extensionsToTreatAsEsm: ['.ts'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost/',
    customExportConditions: ['node', 'node-addons'],
  },
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.(t|j)s?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.test.json',
        isolatedModules: true,
        useESM: true,
      },
    ],
    '^.+\\.svg$': '<rootDir>/test/unit/jest-svg-transformer.cjs',
  },
  transformIgnorePatterns: ['/node_modules/.+.(js)$'],
  roots: ['<rootDir>/src'],
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['**/(components|common)/**/*.spec.ts'],
  globals: {
    window: true,
    'vue-jest': {
      experimentalCSSCompile: false,
    },
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  cache: false,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/components/**/*.vue', '<rootDir>/src/common/utils/*.ts'],
  coverageDirectory: '<rootDir>/coverage',
  coverageProvider: 'v8',
  coveragePathIgnorePatterns: ['/node_modules/', '/test/', '/dist/'],
};
