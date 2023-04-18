import { resolve } from 'path';
import { defineConfig } from 'vite';

const root = resolve(__dirname, 'src'); // get absolute path to root directory

export default defineConfig({
  root,     // set root directory
  base: '', // base URL for the app, default is '/'
  build: {
    outDir: '../dist',            // output build directory
    chunkSizeWarningLimit: 1600,  // this isn't neccesery
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),               // main page
        subpage1: resolve(root, 'subpage1/index.html'),  // first subpage
        subpage2: resolve(root, 'subpage2/index.html'),  // second subpage
        // ... and like that you can add as many subpages as you need
      },
    },
  },
});
