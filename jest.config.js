module.exports = {
  setupFiles: ['./test/unit/setup.js'],
  moduleFileExtensions: ['ts', 'js', 'vue'],
  extensionsToTreatAsEsm: ['.ts'],
  testEnvironment: 'node',
  testEnvironmentOptions: { url: 'http://localhost/' },
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.ts?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.test.json',
        useESM: true,
      },
    ],
    '^.+\\.svg$': '<rootDir>/test/jest-svg-transformer.js',
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
