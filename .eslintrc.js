module.exports = {
  extends: ['./eslintrc.base.js', './eslintrc.prettier.js', './eslintrc.ts.js'],
  parserOptions: {
    project: './_internal/tsconfig.json',
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
  },
}
