// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    nitro: {
        moduleSideEffects: [
            '@justeattakeaway/pie-assistive-text',
            '@justeattakeaway/pie-button',
            '@justeattakeaway/pie-card',
            '@justeattakeaway/pie-chip',
            '@justeattakeaway/pie-cookie-banner',
            '@justeattakeaway/pie-divider',
            '@justeattakeaway/pie-input',
            '@justeattakeaway/pie-form-label',
            '@justeattakeaway/pie-icon-button',
            '@justeattakeaway/pie-link',
            '@justeattakeaway/pie-modal',
            '@justeattakeaway/pie-spinner',
            '@justeattakeaway/pie-switch',
            '@justeattakeaway/pie-tag'
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
});
