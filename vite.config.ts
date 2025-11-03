import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      external: [
        // Excluir paquetes de Node.js que solo se usan en Cloudflare Functions
        'nodemailer',
        '@types/nodemailer',
        // Excluir paquetes no usados en el frontend
        '@emailjs/browser',
        'resend'
      ]
    }
  }
})
