module.exports = {
  extends: ['./eslintrc.base.js', './eslintrc.prettier.js'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['./eslintrc.ts.js'],
      parserOptions: {
        project: './_internal/tsconfig.json',
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
}
