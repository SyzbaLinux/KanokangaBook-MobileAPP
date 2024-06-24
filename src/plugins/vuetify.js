
import 'vuetify/styles'
import '../assets/css/main.css'

import '@mdi/font/css/materialdesignicons.css'

import "@phosphor-icons/web/fill";

import { aliases, phospor } from './custom.ts';

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons: {
    defaultSet: 'phospor',
    aliases,
    sets: {
      phospor:phospor
    }
  },


  theme: {
    themes: {
      light: {
        colors: {
          background: "#E5EFF1",
          surface: "#E5EFF1",
          primary: '#ff0000',
          secondary: "#000000",
          error: "#750000",
        },
      },
    },
  },

})
