// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  app: {
      head: {
          link: [
              {
                  rel: 'preload',
                  href: 'https://pie-design-system-cdn.production.jet-external.com/fonts/JETSansDigital-VF-opt.woff2',
                  as: 'font',
                  type: 'font/woff2',
                  crossorigin: 'anonymous',
              },
          ],
      },
  },

  nitro: {
      moduleSideEffects: [
          '@justeattakeaway/pie-icons-webc',
          '@justeattakeaway/pie-webc',
      ],
  },

  modules: [['nuxt-ssr-lit', { litElementPrefix: ['pie-', 'icon-'] }]],

  imports: {
      transform: {
          exclude: [/\bpie-\b/, /\bicon-\b/],
      },
  },

  css: ['@justeattakeaway/pie-css'],
  devtools: { enabled: true },

  devServer: {
      port: 3002,
  },

  compatibilityDate: '2024-07-23',
});