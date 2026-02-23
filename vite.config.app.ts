import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import { dependencies } from './package.json';
import EnvironmentPlugin from 'vite-plugin-environment';

const renderChunks = (deps: Record<string, string>) => {
  const chunks: Record<string, Array<string>> = {};
  Object.keys(deps).forEach((key) => {
    if (['vue', 'vue-router'].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
};

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
    minify: false,
    sourcemap: false,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router'],
          ...renderChunks(dependencies),
        },
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
