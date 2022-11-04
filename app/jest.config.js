module.exports = {
    transform: {
        '^.+\\.tsx?$': ['ts-jest', { tsconfig: { jsx: 'react-jsx' } }],
    },
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect'
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testEnvironment: 'jsdom'
};
