import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
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
    // Increase chunk size limit for large apps
    chunkSizeWarningLimit: 2000,
    // Target modern browsers for better performance
    target: ['es2020', 'chrome80', 'firefox78', 'safari14'],
    // Optimize rollup options for better chunking
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for large dependencies
          vendor: ['react', 'react-dom'],
          // Firebase chunk
          firebase: ['firebase/app', 'firebase/firestore', 'firebase/auth', 'firebase/analytics', 'firebase/storage'],
          // UI libraries
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-tabs'],
          // Lottie animations
          lottie: ['@lottiefiles/react-lottie-player', 'lottie-web']
        }
      }
    }
  },
  // Environment variables
  define: {
    '__DEV__': mode === 'development',
    // Define global variables to avoid issues
    global: 'globalThis'
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'firebase/app', 'firebase/firestore', 'firebase/auth']
  }
}));
