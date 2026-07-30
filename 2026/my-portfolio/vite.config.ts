import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@fallbacks': path.resolve(__dirname, 'src/fallbacks'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
  },
})
