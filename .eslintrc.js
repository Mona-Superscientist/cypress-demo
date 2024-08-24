module.exports = {
    env: {
        'browser': true,
        'es2021': true,
        'node': true
    },
    extends: [
        'eslint:recommended',
        'plugin:cypress/recommended'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        indent: ['error', 4, {
            SwitchCase: 1,
            MemberExpression: 1
        }],
        'eol-last': ['error', 'unix'],
        'no-unused-vars': ['error'],
        'no-console': 'error',
    },
    ignorePatterns: ['node_modules/*', 'results/*']
}
