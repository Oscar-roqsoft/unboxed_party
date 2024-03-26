import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createVuetify } from "vuetify";
import {  mdi } from 'vuetify/iconsets/mdi'
import { aliases, fa } from 'vuetify/iconsets/fa'

import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import '@fortawesome/fontawesome-free/css/all.css' // Ensure your project is capable of handling css files

export default defineNuxtPlugin((nuxt) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
        theme: {
            defaultTheme: 'dark'
        },
        icons: {
            defaultSet: 'mdi' ,
            aliases,
            sets: {
                mdi,
                fa
            }
        },
  });
  nuxt.vueApp.use(vuetify);
});