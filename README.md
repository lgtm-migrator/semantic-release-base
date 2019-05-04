# 🔮 Fellowship Semantic Release Base

Package contains the shared base configs for automated release management with
Semantic Release. Included configurations will:

- Analyze commits using the ESLint commit standards to determine a semver
  version
- Generate release notes for the release
- Generate changelog updates for the release
- Update the `package.json` version and publish to NPM
- Push a release commit and tag
- Add a comment to Github issues and PRs resolved in the release

## Setup

_1. Install_

```sh
npm i -D @crystal-ball/semantic-release-base
```

_2. Update `package.json`_

```
{
  "release": {
    "extends": ["@crystal-ball/semantic-release-base"]
  }
}
```

## CI/CD configuration

Releases should be configured to trigger on change to master branch in CI/CD.
Configurations must be set as environment values including:

- `GH_TOKEN` Github token
- `NPM_TOKEN` NPM token

_Configuring Travis_

```
deploy:
  provider: script
  skip_cleanup: true
  script:
    - npx semantic-release
```

## Included plugins

- [@semantic-release/commit-analyzer][]
- [@semantic-release/release-notes-generator][]
- [@semantic-release/changelog][]
- [@semantic-release/git][]
- [@semantic-release/github][]
- [@semantic-release/npm][]

 <!-- Links -->

[@semantic-release/commit-analyzer]:
  https://github.com/semantic-release/commit-analyzer
[@semantic-release/release-notes-generator]:
  https://github.com/semantic-release/release-notes-generator
[@semantic-release/changelog]: https://github.com/semantic-release/changelog
[@semantic-release/git]: https://github.com/semantic-release/git
[@semantic-release/github]: https://github.com/semantic-release/github
[@semantic-release/npm]: https://github.com/semantic-release/npm
