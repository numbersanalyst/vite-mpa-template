import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '',
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        subpage1: resolve(__dirname, 'subpage1/index.html'),
        subpage2: resolve(__dirname, 'subpage2/index.html'),
      },
    },
  },
});
