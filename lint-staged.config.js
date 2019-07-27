const commonProcess = filenames => {
  const wrapFileName = f => '"' + f + '"'
  const allFiles = filenames.map(wrapFileName).join(' ')
  const eslintFiles = filenames
    .filter(
      f => !f.includes('eslint') && (f.endsWith('.js') || f.endsWith('.ts')),
    )
    .map(wrapFileName)
    .join(' ')

  // prettier-ignore
  return [
    'yarn prettier --write ' + allFiles,
    'yarn eslint ' + eslintFiles,
    'git add ' + allFiles,
  ]
}

module.exports = {
  '*.{ts,tsx}': commonProcess,
  '*.{js,jsx}': commonProcess,
  '*.{css,scss,sass,less}': commonProcess,
  '*.{md,mdx}': commonProcess,
}
