import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  plugins: [vue(), svgLoader({ defaultImport: 'raw' })],
  base: '/neon/',
  server: {
    host: '0.0.0.0',
    port: 8081,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      vue$: 'vue/dist/vue.esm-bundler.js',
    },
  },
  build: {
    minify: true,
    reportCompressedSize: true,
    emptyOutDir: true,
    outDir: './dist',
    sourcemap: true,
    lib: {
      name: '@aotearoan/neon',
      entry: resolve(__dirname, './src/neon.ts'),
      fileName: 'neon',
    },
    rollupOptions: {
      input: {
        neon: './src/neon.ts',
      },
      external: ['vue', 'vue-router'],
      output: [
        {
          preserveModules: true,
          entryFileNames: () => {
            return '[name].[format].js';
          },
          globals: {
            vue: 'Vue',
            'vue-router': 'VueRouter',
          },
          format: 'cjs',
        },
        {
          preserveModules: true,
          entryFileNames: () => {
            return '[name].[format].js';
          },
          globals: {
            vue: 'Vue',
            'vue-router': 'VueRouter',
          },
          format: 'es',
        },
      ],
    },
  },
});
