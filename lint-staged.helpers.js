const wrap = fn => next => (filenames, commands) =>
  next(filenames, commands || []).concat(fn(filenames))

const tap = fn => next => (filenames, commands) => {
  fn(filenames, commands)
  return next(filenames, commands || [])
}

const finish = (filenames, commands) => commands

const gitAdd = wrap(filenames => {
  const cliFileNames = wrapFileNames(filenames)

  // prettier-ignore
  return [
    'git add ' + cliFileNames,
  ]
})

const prettier = wrap(filenames => {
  const cliFileNames = wrapFileNames(filenames)

  // prettier-ignore
  return [
    'yarn prettier --write ' + cliFileNames,
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

const prCmds = tap((filenames, cmds) => console.log('cmds', cmds))

module.exports = {
  operators: {
    wrap,
    tap,
    finish,
  },
  utils: {
    prCmds,
  },
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
