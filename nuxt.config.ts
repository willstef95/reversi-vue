// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],

  build: {
    transpile: ['vuetify'],
  },

  // https://vitejs.dev/config/#ssr-noexternal
  vite: { ssr: { noExternal: ['quasar'] } },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  plugins: ['~/plugins/pinia.js'],
  modules: ['@vite-pwa/nuxt'],
  pwa: {
    manifest: {
      name: 'Reversi',
      short_name: 'Reversi',
      description: 'Play Reversi',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#4DBA87',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ]
    },
    // Additional PWA options can be configured here
  },
})