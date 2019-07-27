module.exports = {
  extends: ['prettier'],
  rules: {
    // off
    'max-classes-per-file': 'off',
    // warn
    'no-shadow': ['warn', { builtinGlobals: true, hoist: 'never' }],
    'no-unused-vars': [
      'warn',
      {
        args: 'none',
        caughtErrors: 'none',
      },
    ],
    curly: ['warn', 'multi-line'],
  },
}
