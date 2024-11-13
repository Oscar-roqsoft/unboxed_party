// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: true,
  ssr: false,
  css: [

    '~/assets/css/main.css',
    
    "vuetify/lib/styles/main.sass",

    "@mdi/font/css/materialdesignicons.min.css",
    "@fortawesome/fontawesome-free/css/all.css"



  ],
  
  experimental:{payloadExtraction:false},
  
  modules: [
    
    // '@nuxtjs/toast',
    // '@pinia/nuxt',
    // '@pinia-plugin-persistedstate/nuxt',
  ],
  notivue: {
    position: 'top-right',
    limit: 4,
    enqueue: true,
    notifications: {
      global: {
        duration: 10000
      }
    }
  },




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



  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/unboxed-favicon.png' }
      ]
    },
  },


});