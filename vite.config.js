import { defineConfig } from "vite";
import Sitemap from "vite-plugin-sitemap";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ["**/*.docx"],
  plugins: [
    react(),
    Sitemap({
      hostname: "https://dtechoracle-again.vercel.app",
      dynamicRoutes: ["/"],
    }),
  ],
});
