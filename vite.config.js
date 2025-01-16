import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/christmas-planners/', // Le chemin relatif pour GitHub Pages
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html', // Assurez-vous que le chemin est correct
      },
    },
  },
});
