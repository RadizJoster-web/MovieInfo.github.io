import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/MovieInfo/', // Ganti "repo-name" dengan nama repositori kamu
  build: {
    outDir: 'dist', // Output folder tetap "build"
  },
});
