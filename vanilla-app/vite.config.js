import { defineConfig } from 'vite';
import path from 'path';
import { glob } from 'glob';

export default defineConfig({
    root: 'src',
    build: {
        outDir: path.join(__dirname, "dist"),
        rollupOptions: {
          input: glob.sync(path.resolve(__dirname, "src", "*.html")),
        },
      },
})
