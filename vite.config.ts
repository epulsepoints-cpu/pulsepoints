import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Minify for production
    minify: mode === 'production' ? 'esbuild' : false,
    // Generate source maps for debugging
    sourcemap: mode === 'development',
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Target modern browsers for better performance
    target: ['es2020', 'chrome80', 'firefox78', 'safari14']
  },
  // Environment variables
  define: {
    '__DEV__': mode === 'development'
  }
}));
