import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/dandinsfarm-blt/', // <-- important for GitHub Pages
})
