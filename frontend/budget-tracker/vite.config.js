import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    historyApiFallback: true,
  },
  preview: {
    port: process.env.PORT || 4173,
    host: true,
    allowedHosts: [
      'personal-budget-tracker-frontend-production.up.railway.app',
      '.railway.app', // Allow all Railway subdomains
    ],
  },
})