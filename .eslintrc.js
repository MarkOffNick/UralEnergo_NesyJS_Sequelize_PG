module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:nestjs'
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'no-trailing-spaces': [2, { skipBlankLines: false }],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 1 }],
    'object-curly-spacing': ['error', 'always'],
    'comma-spacing': [2, { before: false, after: true }],
    'arrow-spacing': ['error', { before: true, after: true }],
    'space-infix-ops': ['error', { int32Hint: false }],
    'space-after-keywords': 'off',
    'keyword-spacing': [2, { before: true, after: true }],
    'max-len': ['error', { code: 120 }],
    'indent': ['error', 2],
    '@typescript-eslint/indent': ['error', 2],
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
};
