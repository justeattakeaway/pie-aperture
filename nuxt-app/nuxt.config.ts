// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: [
    ['nuxt-ssr-lit', { litElementPrefix: ['pie-', 'icon-'] }]
  ],
  imports: {
    transform: {
      exclude: [/\bpie-\b/, /\bicon-\b/],
    },
  },
  css: ['@justeattakeaway/pie-css'],
  devtools: { enabled: true },
  devServer: {
    port: 3002
  }
});