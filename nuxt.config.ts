// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/test-utils/module',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    'nuxt-single-html',
  ],
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
          href: 'https://static-cdn.jtvnw.net/jtv_user_pictures/369406b8-1c3e-40e3-a0e7-a91db98b9cdb-profile_image-70x70.png',
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
