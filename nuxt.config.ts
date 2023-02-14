// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/tailwindcss",
        "@vueuse/nuxt",
    ],
    nitro: {
        preset: 'aws-lambda',
        serveStatic: true,
    },
})
