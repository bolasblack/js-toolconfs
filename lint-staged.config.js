const commonProcess = ['yarn prettier --write', 'git add']

module.exports = {
  '*.{ts,tsx}': [...commonProcess],
  '*.{js,jsx}': [...commonProcess],
  '*.{css,scss,sass,less}': [...commonProcess],
  '*.{md,mdx}': [...commonProcess],
}
