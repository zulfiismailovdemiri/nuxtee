import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    buildModules: [
        // '@nuxt/postcss8',
    ],
    build: {
        postcss: {
            postcssOptions: require('./postcss.config.js'),
        },
    }
})
