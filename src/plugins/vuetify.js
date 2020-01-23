
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'md', // default - only for display purposes
  },
    theme: {
      themes: {
        light: {
            primary: colors.blue,
            secondary: colors.grey.darken1,
            accent: colors.shades.black,
            error: colors.red.accent3,
        },
        dark: {
          primary: colors.blue.lighten3,
        },
      },
    },
  })
  
