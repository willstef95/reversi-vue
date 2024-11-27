// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['quasar/dist/quasar.sass'],
  build: { transpile: ['quasar'] },
  vite: { ssr: { noExternal: ['quasar'] } }, // https://vitejs.dev/config/#ssr-noexternal
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  plugins: ['~/plugins/pinia.js'],
})
