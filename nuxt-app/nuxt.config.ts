// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

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

  css: ['@justeattakeaway/pie-css', '@justeattakeaway/pie-css/dist/helpers/typography.css'],
  devtools: { enabled: true },

  devServer: {
      port: 3002,
  },

  compatibilityDate: '2024-07-23',
});
