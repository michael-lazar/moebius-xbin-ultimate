# Project Context

- This is a legacy electron codebase that has been forked several times and has had maintainers with various levels of javascript / electron experience.
- There are no unit tests.
- There is linting and formatting with eslint and prettier.
- Manual application testing will be used to verify behavior and fixes.
- Follow existing project conventions when adding new features.
- Do not make large, sweeping changes that cannot be easily verified.
- Avoid _hacky_ patches that mock out functions or have other unintuitive side effects.
- When changes involve ICP messages, carefully consider the interaction between the main process and the renderer process.
- Add comments when it makes sense to do so, but do not comment trivial behavior.
- PRs should always be made against origin/main and never the upstream repo.
