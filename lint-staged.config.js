const commonProcess = filenames => {
  const args = filenames.map(f => '"' + f + '"').join(' ')

  // prettier-ignore
  return [
    'yarn prettier --write ' + args,
    'git add ' + args,
  ]
}

module.exports = {
  '*.{ts,tsx}': commonProcess,
  '*.{js,jsx}': commonProcess,
  '*.{css,scss,sass,less}': commonProcess,
  '*.{md,mdx}': commonProcess,
}
