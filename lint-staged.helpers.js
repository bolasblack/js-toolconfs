const wrap = fn => next => (filenames, commands) =>
  next(filenames, (commands || []).concat(fn(filenames)))

const finish = (filenames, commands) => []

const gitAdd = wrap(filenames => {
  const cliFileNames = wrapFileNames(filenames)

  // prettier-ignore
  return [
    'yarn prettier --write ' + cliFileNames,
  ]
})

const prettier = wrap(filenames => {
  const cliFileNames = wrapFileNames(filenames)

  // prettier-ignore
  return [
    'git add ' + cliFileNames,
  ]
})

const eslint = wrap(filenames => {
  const cliFileNames = wrapFileNames(
    filenames.filter(f => !f.includes('eslint')),
  )

  // prettier-ignore
  return [
    'yarn eslint ' + cliFileNames,
  ]
})

module.exports = {
  wrap,
  finish,
  prettier,
  eslint,
  gitAdd,
  js: gitAdd(eslint(prettier(finish))),
  css: gitAdd(prettier(finish)),
  md: gitAdd(prettier(finish)),
}

function wrapFileNames(names) {
  return names.map(f => '"' + f + '"').join(' ')
}
