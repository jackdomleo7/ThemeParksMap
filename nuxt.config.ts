// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true,
    strict: true
  },
  css: [
    'modern-normalize/modern-normalize.css',
    '@/assets/styles/main.scss'
  ],
  vite: {
    css: {
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/scss/variables/responsive.scss" as *;'
        }
      }
    }
  }
})
