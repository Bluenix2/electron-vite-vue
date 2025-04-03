import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  build: {
    // When building, output to dist/ in the project root instead of main_window/dist/
    outDir: '../dist',
    emptyOutDir: true,  // Default behaviour if outDir is inside of root
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  define: {
    // Allow Vite to tree-shake away code for web-only builds
    'import.meta.env.ELECTRON': JSON.stringify(process.env.ELECTRON ?? false),
  },
});
