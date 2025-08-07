// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
        '@assets': new URL('./src/assets', import.meta.url).pathname,
        '@components': new URL('./src/components', import.meta.url).pathname,
      },
    },
  },

  integrations: [compress()],
});
