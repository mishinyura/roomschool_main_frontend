// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-12-01',
  devtools: { enabled: true },
  css: [
    '~/assets/styles/normalize.css',
    '~/assets/styles/reset.css',
    '~/assets/styles/base.css'
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
      title: 'RoomSchool',
      titleTemplate: '%s',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }, // maximum-scale иногда помогает от зума на айфонах
        { charset: 'utf-8' },
        { key: 'og:title', property: 'og:title', content: 'RoomSchool' },
        { key: 'og:description', property: 'og:description', content: 'Первая онлайн школа с AI поддержкой' },
        { key: 'og:type', property: 'og:type', content: 'website' },
        { key: 'og:url', property: 'og:url', content: 'https://roomschool.ru/' },
        { key: 'og:image', property: 'og:image', content: 'https://roomschool.ru/preview.jpg' },
        // { name: 'description', content: 'Первая онлайн школа с AI поддержкой' },
        // { name: 'keywords', content: 'онлайн школа, образование, AI, курсы для детей' }
      ],
      link: [
        {
          rel: 'preload',
          href: '/fonts/montserrat/Montserrat-Regular.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preload',
          href: '/fonts/montserrat/Montserrat-Medium.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preload',
          href: '/fonts/nunito/Nunito-Regular.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous'
        }
      ]
    }
  }
})