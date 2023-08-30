import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Pages({
      resolver: 'react',
      exclude: ['**/components/*'],
    }),
    AutoImport({
      imports: ['react', 'react-router-dom'],
      dts: './src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
      },
    }),
  ],
})
