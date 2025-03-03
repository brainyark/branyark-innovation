import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/branyark-innovation/',  // <-- Add this line with your repo name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
