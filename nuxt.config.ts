// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: true,
  ssr: false,
  css: [
    '~/assets/css/main.css',
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  
  experimental:{payloadExtraction:false},
  
  modules: [
    // '@pinia/nuxt',
    // '@pinia-plugin-persistedstate/nuxt',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  typescript: {shim: false},
  build: {
    transpile: ["vuetify"],
  },
  plugins:[
    { src: '~/plugins/vue3-paystack', mode: 'client' },
    { src: '~/plugins/ravePlugin', mode: 'client' },
    
  ],




});