<template>
  <div class="page">
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
  useHead({
    htmlAttrs: {
      lang: 'en-GB'
    },
    titleTemplate: pageTitle => {
      const TITLE = 'Theme Parks Map'
      return pageTitle
        ? `${pageTitle} - ${TITLE}`
        : TITLE
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'name', name: 'name', content: 'Theme Parks Map' },
      { hid: 'og:locale', name: 'og:locale', content: 'en_GB' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      // { hid: 'og:host', name: 'og:host', content: 'https://example.com' },
      // { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      // { hid: 'twitter:site', name: 'twitter:site', content: '@jackdomleo7' },
      // { hid: 'twitter:creator', name: 'twitter:creator', content: '@jackdomleo7' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'color-scheme', name: 'color-scheme', content: 'light' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  })
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1;
  }
}
</style>