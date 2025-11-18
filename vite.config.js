import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/pokronline/', // Change this to '/' if using custom domain root, or '/pokronline/' for GitHub Pages subpath
})

