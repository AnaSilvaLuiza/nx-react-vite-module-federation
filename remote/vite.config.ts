/// <reference types='vitest' />
import { join } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxFederation } from '../fe-federation-plugin';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  cacheDir: '../node_modules/.vite/remote-1',
  server: {
    port: 3001,
    host: 'localhost',
  },
  preview: {
    port: 3001,
    host: 'localhost',
  },
  plugins: [
    react(),
    // nxFederation({
    //   name: 'remote',
    //   exposes: {
    //     './Module': join(__dirname, './src/remote-entry'),
    //   },
    // }),
    federation({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './Module': join(__dirname, './src/remote-entry'),
      },
      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
        'react-router-dom': { singleton: true, eager: true },
        '@tanstack/react-query': { singleton: true, eager: true },
        '@tanstack/react-query-devtools': { singleton: true, eager: true },
        '@tanstack/eslint-plugin-query': { singleton: true, eager: true },
      },
    }),
    nxViteTsPaths(),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  test: {
    globals: true,
    cache: {
      dir: '../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
