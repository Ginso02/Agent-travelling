import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path';
import pxtorem from "postcss-pxtorem" ;


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname,"./src"),
    },
  },
  css:{
    postcss:{
      plugins:[
        pxtorem({
          rootValue: 37.5,
          unitPresion: 3,
          propList: ['*']
        })
      ]
    }
  }
})
