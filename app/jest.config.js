module.exports = {
    rootDir: './',
    transform: {
        '^.+\\.tsx?$': ['ts-jest', { tsconfig: { jsx: 'react-jsx' } }],
    },
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect'
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleDirectories: ["node_modules", "<rootDir>/"],
    moduleNameMapper: {
        "@/components/(.*)": "<rootDir>/components/$1",
    },
    collectCoverageFrom: [
        './components/**',
        './pages/**',
    ],
    testEnvironment: 'jsdom',
    coverageReporters: ["json-summary"]
};
