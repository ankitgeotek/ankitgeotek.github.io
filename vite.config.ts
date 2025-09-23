import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ankitgeotek.github.io/', // This should match your repo name
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'mui-core': ['@mui/material'],
          'mui-icons': ['@mui/icons-material'],
          'mui-emotion': ['@emotion/react', '@emotion/styled'],
          'form-libs': ['react-hook-form', '@hookform/resolvers', 'yup'],
          'chart-libs': ['recharts'],
          'motion': ['framer-motion'],
          'utils': ['axios', 'react-intersection-observer', 'react-router-dom']
        }
      }
    },
    chunkSizeWarningLimit: 600
  },
  optimizeDeps: {
    include: ['@mui/material', '@emotion/react', '@emotion/styled']
  },
  server: {
    port: 5000,
    host: '0.0.0.0',
    allowedHosts: ['*'],
    open: false
  }
})