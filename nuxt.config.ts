// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true,
    strict: true
  },
  css: [
    'modern-normalize/modern-normalize.css'
  ],
  vite: {
    css: {
      devSourcemap: true
    }
  }
})
