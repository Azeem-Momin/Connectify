import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Increase to 1000 kB
    rollupOptions: {
      output: {
        manualChunks: {
          reactVendor: ["react", "react-dom"],
          axios: ["axios"],
        },
      },
    },
  },
});
