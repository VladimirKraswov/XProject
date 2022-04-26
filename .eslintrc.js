module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': 'error',
    'no-shadow': 0,
    'import/newline-after-import': ['warn', {count: 1}],
    'sort-imports': [
      'warn',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none'],
        allowSeparatedGroups: true,
      },
    ],
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'sibling',
          'index',
          'parent',
          'unknown',
          'type',
          'object',
        ],
        pathGroups: [
          {
            pattern: '@app/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@src/**',
            group: 'index',
          },
          {
            pattern: '@assets/**',
            group: 'object',
            position: 'after',
          },
          {
            pattern: '@theme',
            group: 'object',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order:
            'desc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          caseInsensitive: true /* ignore case. Options: [true, false] */,
        },
      },
    ],
  },
};
