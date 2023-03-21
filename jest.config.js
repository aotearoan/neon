module.exports = {
  setupFiles: ["./test/unit/setup.js"],
  moduleFileExtensions: ["ts", "js", "vue"],
  extensionsToTreatAsEsm: [".ts"],
  testEnvironment: "node",
  testEnvironmentOptions: { url: "http://localhost/" },
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\.ts?$": ["ts-jest", {
      tsconfig: "tsconfig.test.json",
      useESM: true
    }]
  },
  transformIgnorePatterns: ["/node_modules/.+.(js)$"],
  roots: ["<rootDir>/src"],
  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: ["**/(components|common)/**/*.spec.ts"],
  globals: {
    window: true,
    "vue-jest": {
      experimentalCSSCompile: false
    }
  },
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1"
  },
  cache: false,
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/components/**/*.vue", "<rootDir>/src/common/utils/*.ts"],
  coverageDirectory: "<rootDir>/coverage",
  coveragePathIgnorePatterns: ["/node_modules/", "/test/", "/dist/"]
};
