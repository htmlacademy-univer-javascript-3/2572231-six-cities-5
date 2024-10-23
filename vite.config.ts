/// <reference types='vitest' />
/// <reference types='vite/client' />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
  resolve: {
    alias: {
      '@components': `${path.resolve(__dirname, 'src')}/components`,
      '@type': `${path.resolve(__dirname, 'src')}/type`,
      '@const': `${path.resolve(__dirname, 'src')}/const`,
      '@pages': `${path.resolve(__dirname, 'src')}/pages`,
    }
  }
});
