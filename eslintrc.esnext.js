module.exports = {
  extends: ['./eslintrc.es6'],
  parserOptions: {
    ecmaVersion: 10,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
}
