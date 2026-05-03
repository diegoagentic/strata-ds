/// <reference types="vitest/config" />
import { defineConfig } from 'vite'; // trigger-reload
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(), tailwindcss()],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(dirname, './src')
    }
  },
  build: {
    // Dev app builds to dev-dist/ to avoid colliding with the library build
    // (`npm run build:lib` outputs to dist/ via vite.config.lib.ts).
    outDir: 'dev-dist',
    emptyOutDir: true,
  },
  test: {
    // Storybook test integration temporarily disabled due to version mismatch
  }
});