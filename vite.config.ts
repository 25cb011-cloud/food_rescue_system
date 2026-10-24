import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vite is the tool that runs and builds the website.
// The two plugins teach it to understand React and Tailwind CSS.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
