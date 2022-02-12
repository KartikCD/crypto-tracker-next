# Crypto Tracker

## Tools Required

- NodeJS
- Yarn
- NextJS

## Setup

### Installation

- Clone the repository
- CD to the project directory.
- Run the below command in the root of the project directory `yarn`

### Run in Development Server

- CD to the project directory and run the below commands

```
yarn dev
```

- If the build is successful navigate to [localhost](http://localhost:8100/)

### Run in Production Server

- CD to the project directory and run the below commands

```
yarn build
yarn start
```

- If the build is successful navigate to [localhost](http://localhost:8100/)

## Contributing

### Branching

- Clone the repository
- Create a separate branch with the following format "Type/Feature"
  - Type will be either "feature" (For new feature), or "bugfix" (For bugs) or "hotfix" (For hotfixes).
  - Example feature/page-header (For new feature).
  - Example bugfix/fetch-list (For bugfixes).

### Committing the code.

- Ensure there are no lint errors by running `yarn lint`.

- Ensure there are no build errors by running `yarn build`.

- The commit message should have the format "type: message"

- Must be one of the following:

  - test — Adding missing tests
  - feat — A new feature
  - fix — A bug fix
  - chore — Build process or auxiliary tool changes
  - docs — Documentation only changes
  - refactor — A code change that neither fixes a bug or adds a feature
  - style — Markup, white-space, formatting, missing semi-colons...
  - ci — CI related changes
  - perf — A code change that improves performance

- Push the code to the remote repository and raise a PR.
- Ensure that the branch is deleted after the PR is merged.
