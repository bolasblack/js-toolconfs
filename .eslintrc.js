module.exports = {
  extends: ['./eslintrc-ts.js'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
  },
}
