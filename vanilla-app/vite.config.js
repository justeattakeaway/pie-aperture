import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        origin: 'http://127.0.0.1:3001',
    },
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
                icons: './icons.html',
                form: './form.html'
            }
        }
    }
})
