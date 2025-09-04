import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Polyfill process.env in the browser (only if necessary)
    'process.env': process.env,
  },
});
