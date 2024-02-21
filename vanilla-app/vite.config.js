import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    root: "src",
    build: {
        outDir: path.join(__dirname, "dist"),
        rollupOptions: {
          input: {
            components: path.resolve(__dirname, 'src/pages/components', '*.html'),
            integrations: path.resolve(__dirname, 'src/pages/integrations', '*.html'),
          }
        },
      },
})
