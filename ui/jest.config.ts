import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
    dir: './',
});

const config: Config = {
    clearMocks: true,
    collectCoverageFrom: [
        './src/**/*.ts*',
    ],
    coveragePathIgnorePatterns: [
        './src/components/ui', // Ignore shadcn/ui components
    ],
    coverageReporters: ['json-summary', 'text', 'html'],
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
        customExportConditions: []
    },
    setupFilesAfterEnv: [
        '<rootDir>/tests/setup-jest.tsx'
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleDirectories: ['node_modules', '<rootDir>'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    }
};

export default createJestConfig(config);
