// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false,
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui-pro'],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    posthogApiKey: process.env.POSTHOG_API_KEY,
  },
})