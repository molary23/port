import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

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
    },
  },
  plugins: [react()],
  server: {
    port: 3000,
  },
})
