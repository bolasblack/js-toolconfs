# js-toolconfs

Some configuration files for my favorite tools

* [`commitlintrc.js`](https://github.com/conventional-changelog/commitlint/): commitlint checks if your commit messages meet the [conventional commit format](https://conventionalcommits.org/).

* [`prettierrc.yml`](https://github.com/prettier/prettier): Prettier is an opinionated code formatter.

* [`renovate.json`](https://renovatebot.com/docs/): Automated dependency updates service.

    ```json
    {
      "extends": [
        "github>bolasblack/js-toolconfs:renovate"
      ]
    }
    ```

* [`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html): The presence of a `tsconfig.json` file in a directory indicates that the directory is the root of a TypeScript project. The `tsconfig.json` file specifies the root files and the compiler options required to compile the project.

* [`tslint.yml`](https://palantir.github.io/tslint/usage/configuration/): An extensible linter for the TypeScript language.

* [`.githooks`](https://github.com/bolasblack/git-hook-pure): git hook more freely and quickly
