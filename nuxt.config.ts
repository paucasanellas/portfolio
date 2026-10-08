import { version } from './package.json'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/ui',
    '@pinia/nuxt',
  ],
  components: [
    {
      path: '@/components',
      pathPrefix: false,
    },
  ],
  devtools: {
    enabled: true,
  },
  app: {
    head: {
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
        { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
        { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
      ],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
  css: [
    '@/assets/css/main.css',
  ],
  colorMode: {
    preference: 'system',
    fallback: 'light',
  },
  runtimeConfig: {},
  experimental: {
    asyncContext: true,
  },
  compatibilityDate: 'latest',
  nitro: {
    experimental: {
      openAPI: true,
    },
    openAPI: {
      meta: {
        title: 'Pau Casanellas',
        description: '',
        version,
      },
      ui: {
        scalar: {
          route: '/docs',
          theme: 'purple',
        },
        swagger: false,
      },
    },
  },
  telemetry: false,
  fonts: {
    families: [
      { name: 'DM Sans', provider: 'google', weights: [400, 500, 600, 700] },
      { name: 'Manrope', provider: 'google', weights: [400, 500, 600, 700, 800] },
    ],
  },
  i18n: {
    restructureDir: 'app',
    langDir: 'locales',
    locales: [
      {
        code: 'es',
        language: 'es-ES',
        name: 'Castellano',
        file: 'es.json',
      },
    ],
    defaultLocale: 'es',
    strategy: 'prefix_except_default',
    customRoutes: 'meta',
    detectBrowserLanguage: false,
  },
  icon: {
    clientBundle: {
      scan: true,
    },
  },
})
