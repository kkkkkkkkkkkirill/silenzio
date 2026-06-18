import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
var srcDir = fileURLToPath(new URL('./src', import.meta.url));
export default defineConfig({
    plugins: [react()],
    base: './',
    resolve: {
        alias: { '@': srcDir },
    },
    server: {
        port: 5176,
        allowedHosts: ['.trycloudflare.com', '.cfargotunnel.com'],
    },
});
