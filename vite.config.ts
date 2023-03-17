import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.SUPABASE_URL': `"${process.env.SUPABASE_URL}"`,
    'process.env.SUPABASE_ANON_KEY': `"${process.env.SUPABASE_ANON_KEY}"`,
    'process.env.SUPABASE_AUTH_GITHUB': `"${process.env.SUPABASE_AUTH_GITHUB}"`,
  },
})
