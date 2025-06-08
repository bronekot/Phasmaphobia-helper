// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    'vue/html-self-closing': 'off',
  },
});
// Your custom configs here
