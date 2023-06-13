import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 引入Unocss
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unocss({
      // 使用Unocss
      presets: [presetUno(), presetAttributify(), presetIcons()],
    }),
  ],
})
