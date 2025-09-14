// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  nitro: {
      moduleSideEffects: [
          '@justeattakeaway/pie-icons-webc',
          '@justeattakeaway/pie-webc',
          '@justeattakeaway/pie-headless-radio-group',
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