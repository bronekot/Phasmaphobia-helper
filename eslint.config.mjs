// @ts-check
import stylistic from '@stylistic/eslint-plugin';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  plugins: {
    '@stylistic': stylistic,
  },
  rules: {
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/member-ordering': 'error',

    'vue/html-self-closing': 'off',

    '@stylistic/lines-between-class-members': ['error', 'always'],
    '@stylistic/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: [
          'case',
          'default',
          'block',
          'block-like',
          'multiline-block-like',
          'interface',
          'type',
        ],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let'],
        next: ['const', 'let'],
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['switch', 'while', 'try', 'return', 'if', 'interface', 'type', 'function', 'export'],
      },
    ],
  },
});
// Your custom configs here
