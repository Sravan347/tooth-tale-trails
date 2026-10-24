import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    open: true,
    watch: {
      usePolling: true,
      interval: 300,
      awaitWriteFinish: {
        stabilityThreshold: 500,
        pollInterval: 100,
      },
    },
  },
  plugins: [
    tanstackStart(),
    viteReact(),
  ],
});