import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/host-app/',
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        headerApp: "https://karmakiller3352.github.io/header-app/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "styled-components"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
