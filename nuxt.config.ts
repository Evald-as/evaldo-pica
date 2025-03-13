// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false,
  devtools: { enabled: false },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui-pro',
    '@nuxthub/core'
  ],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    posthogApiKey: process.env.POSTHOG_API_KEY,
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  }
})