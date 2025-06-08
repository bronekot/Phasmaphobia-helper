// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/eslint'],
  app: {
    head: {
      title: 'Phasmophobia Helper',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png',
        },
      ],
      meta: [
        {
          name: 'description',
          content: 'Phasmophobia Helper - A Vue.js application to identify ghosts based on clues.',
        },
        {
          name: 'keywords',
          content: 'Phasmophobia, Ghost Helper, Vue.js, Clues, Ghost Identification',
        },
        {
          name: 'author',
          content: 'TactiKot',
        },
      ],
    },
  },
  css: ['modern-normalize/modern-normalize.css', '~/assets/css/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/mixins.scss" as *;',
        },
      },
    },
  },
});
