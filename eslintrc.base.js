module.exports = {
  rules: {
    // off
    'max-classes-per-file': 'off',
    'no-shadow': 'off',
    // error
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
