import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // generate manifest.json in outDir
   // host: '0.0.0.0',
    manifest: true,
    // rollupOptions: {
    //   // overwrite default .html entry
    //   input: './main.jsx'
    // }
  }
})
