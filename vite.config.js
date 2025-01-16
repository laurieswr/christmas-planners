// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vite.dev/config/
// export default defineConfig({
//   base: '/christmas-planners/', // Le chemin relatif pour GitHub Pages
//   plugins: [react()],
//   build: {
//     outDir: 'dist', // Par défaut, le dossier de sortie est "dist"
//     rollupOptions: {
//       input: {
//         main: './index.html', // Assurez-vous que le chemin est correct
//       },
//     },
//   },
// });

import { defineConfig } from 'vite';

export default defineConfig({
  // Configuration de la build
  build: {
    // Chemin de sortie de la build
    outDir: 'dist',
    // Format de la build (par exemple, 'es' pour ES modules)
    format: 'es',
    // Niveau de compression de la build (par exemple, 'none' pour aucune compression)
    compress: 'none',
  },
  // Configuration des serveurs de développement
  server: {
    // Port du serveur de développement
    port: 5173,
    // Chemin de base du serveur de développement
    base: '/',
  },
});