import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
    base: '',
    plugins: [vue()],
    build: {
        rollupOptions: {
            output: {
                // Need for proper bun HMR. Bun doesn't see new files created by vite, so we need keep same names
                entryFileNames: `[name].js`,
                chunkFileNames: `[name].js`,
                assetFileNames: `[name].[ext]`,
            },
        },
    },
})
