import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  root: './',
  base: '/christmas-planners/',
  publicDir: 'public',
});