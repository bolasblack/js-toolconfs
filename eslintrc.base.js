module.exports = {
  extends: ['prettier'],
  rules: {
    // off
    'max-classes-per-file': 'off',
    // error
    'no-shadow': ['error', { builtinGlobals: true, hoist: 'never' }],
    'no-unused-vars': [
      'error',
      {
        args: 'none',
        caughtErrors: 'none',
      },
    ],
    curly: ['error', 'multi-line'],
  },
}
