import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Personal_Portfolio_Website/',
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    open: false,
    allowedHosts: true
  }
});
