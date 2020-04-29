import Vue from 'vue';
import Vuetify, { VSnackbar, VBtn, VIcon } from 'vuetify/lib';
import 'vuetify/src/styles/main.sass';


const options = {
    icons: {
      iconfont: 'md',  // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
    },
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#2A6591',
          info: '#54B2C8',
          warning: '#EEA53A',
          dark: '#3C484C',
          secondary: '#dedede',
          light: '#F6F6F6',
          label: '#9AA2A8',
          error: '#EF6D3A',
          accent: '#19587F',
          alpha: '#C4C4C4',
          border: '#F0F0F0',
          white: '#FFFFFF'
        },
      },
      options: {
        customProperties: true
      }
      // http://www.colorfavs.com/
      // primary: '#2f4454',
      // secondary: '#252c34',
      // info: '#677e8e',
      // warning: '#efa53a',
      // dark: '#091623'
      // https://www.canva.com/colors/color-palette-generator/
      // primary: '#213C64',
      // secondary: '#3E505C',
      // accent: '#DAEBF0',
      // info: '#566D80',
      // warning: '#efa53a',
      // dark: '#111D29',
      // background: '#DAEBF0'
    },
    components: {
      VSnackbar,
      VBtn,
      VIcon
    },
  };

Vue.use(Vuetify);

export default new Vuetify(options);
