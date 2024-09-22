module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],  // Apunta a jest.setup.ts
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
  };
  