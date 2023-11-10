/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

module.exports = {
    rootDir: './',
    clearMocks: true,
    collectCoverageFrom: [
        './**/*.ts*',
    ],
    coveragePathIgnorePatterns: [
        '/cypress/'
    ],
    coverageReporters: ['json-summary', 'text', 'html'],
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
        customExportConditions: []
    },
    transform: {
        '^.+\\.tsx?$': [
            '@swc/jest', 
            { jsc: { transform: { react: { runtime: 'automatic' } } } },
            { tsconfig: { jsx: 'react-jsx' } },
        ],
    },
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
        '<rootDir>/jest.setup.ts',
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleDirectories: ["node_modules", "<rootDir>/"],
    moduleNameMapper: {
        ...pathsToModuleNameMapper(compilerOptions.paths),
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
    }
};
