// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    // Disable or adjust first-attribute-linebreak
    'vue/first-attribute-linebreak': 'off', // or use ['error', 'beside'] / ['error', 'below'] as needed
  }
})