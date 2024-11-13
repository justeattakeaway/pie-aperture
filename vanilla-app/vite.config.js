import { defineConfig } from 'vite';
import { join, resolve } from 'path';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  build: {
    outDir: join(__dirname, "dist"),
    rollupOptions: {
      input: [
        ...glob.sync(resolve(__dirname, 'index.html')),
        ...glob.sync(resolve(__dirname, 'components', '*.html')),
        ...glob.sync(resolve(__dirname, 'integrations', '*.html'))
      ],
    },
  },
  plugins: [
    injectHTML()
  ],
})
