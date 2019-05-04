'use strict'

module.exports = {
  branch: 'master',
  // Option is passed to all plugins to configure using ESLint commit format
  preset: 'eslint',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    // Create release notes and changelog updates before handling git/npm tasks
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/github',
  ],
}
