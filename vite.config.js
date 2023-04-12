import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '',
  build: {
    chunkSizeWarningLimit: 1600, // this isn't neccesery
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),               // main page
        subpage1: resolve(__dirname, 'subpage1/index.html'),  // first subpage
        subpage2: resolve(__dirname, 'subpage2/index.html'),  // second subpage
        // ... and like that you can add as many subpages as you need
      },
    },
  },
});
