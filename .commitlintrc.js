module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'chore',
        'publish',
        'perf',
        'revert',
        'test',
        'build',
        'ci'
      ]
    ],
    'subject-case': [0, 'never']
  }
}
