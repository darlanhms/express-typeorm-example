
/** Uncomment to typescript paths config  */
// const { compilerOptions } = require('./tsconfig.json');
// const { pathsToModuleNameMapper } = require('ts-jest/utils');

module.exports = {
    transform: {'^.+\\.ts?$': 'ts-jest'},
    testEnvironment: 'node',
    roots: ['<rootDir>/src'],
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    testRegex: '\\.(test|spec)?\\.(ts|tsx)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    clearMocks: true,
    preset: 'ts-jest',
    /** Uncomment to typescript paths config  */
    // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src' }),
    /** Uncomment to setup script */
    // setupFilesAfterEnv: ['./jest.setup.js'],
}
