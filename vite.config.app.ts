import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig({
  plugins: [vue(), svgLoader({ defaultImport: 'raw' }), EnvironmentPlugin('all')],
  base: '/neon/',
  server: {
    host: '0.0.0.0',
    port: 8081,
    base: '/neon/',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      vue$: 'vue/dist/vue.esm-bundler.js',
    },
  },
  build: {
    minify: 'esbuild',
    sourcemap: false,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: ({ name: fileName }) => {
          return `${fileName}.js`;
        },
        globals: {
          vue: 'Vue',
          'vue-router': 'VueRouter',
        },
      },
    },
  },
});
