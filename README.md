# js-toolconfs

Some configuration files for my favorite tools

- [`commitlintrc.js`](https://github.com/conventional-changelog/commitlint/): commitlint checks if your commit messages meet the [conventional commit format](https://conventionalcommits.org/).

  ```js
  // .commitlintrc.js
  module.exports = {
    extends: ['@c4605/toolconfs/commitlintrc'],
    rules: {},
  }
  ```

- [`prettierrc.yml`](https://github.com/prettier/prettier): Prettier is an opinionated code formatter.

  ```json
  // package.json
  {
    "prettier": "@c4605/toolconfs/prettierrc"
  }
  ```

- [`renovate.json`](https://renovatebot.com/docs/): Automated dependency updates service.

  ```json
  {
    "extends": ["github>bolasblack/js-toolconfs:renovate"]
  }
  ```

- [`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html): The presence of a `tsconfig.json` file in a directory indicates that the directory is the root of a TypeScript project. The `tsconfig.json` file specifies the root files and the compiler options required to compile the project.

  ```json
  {
    "extends": "@c4605/toolconfs/tsconfig",
    "extends": "@c4605/toolconfs/tsconfig-node",
    "extends": "@c4605/toolconfs/tsconfig-esModule"
  }
  ```

- [`tslint.yml`](https://palantir.github.io/tslint/usage/configuration/): An extensible linter for the TypeScript language.

  ```yml
  extends: '@c4605/toolconfs/tslint'
  ```

- [`.githooks`](https://github.com/bolasblack/git-hook-pure): git hook more freely and quickly
