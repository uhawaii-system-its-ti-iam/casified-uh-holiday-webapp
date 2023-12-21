/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

module.exports = {
    rootDir: './',
    collectCoverageFrom: [
        './**/*.ts*',
    ],
    coveragePathIgnorePatterns: [
        "/cypress/",
        "/tests/"
    ],
    coverageReporters: ['json-summary', 'html'],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx?$': [
            '@swc/jest', 
            { jsc: { transform: { react: { runtime: 'automatic' } } } },
            { tsconfig: { jsx: 'react-jsx' } },
        ],
    },
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
        '<rootDir>/tests/setupJest.ts',
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleDirectories: ["node_modules", "<rootDir>/"],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths)
};
