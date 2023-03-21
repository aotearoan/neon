import { readFileSync } from 'fs';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';

const file = fileURLToPath(new URL('package.json', import.meta.url));
const json = readFileSync(file, 'utf8');
const pkg = JSON.parse(json);

export default defineConfig({
  plugins: [vue(), svgLoader({ defaultImport: 'raw' })],
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
  define: {
    PACKAGE_VERSION: JSON.stringify(pkg.version),
  },
  build: {
    lib: {
      name: '@aotearoan/neon',
      entry: resolve(__dirname, './src/neon.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue', 'vue-router'],
      output: {
        preserveModules: true,
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
