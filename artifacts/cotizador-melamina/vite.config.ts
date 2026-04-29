import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// Puerto: usa PORT si está disponible, sino 5173 por defecto (desarrollo local)
const port = process.env.PORT ? Number(process.env.PORT) : 5173;

// BASE_PATH: usa BASE_PATH si está disponible, sino "/" por defecto (desarrollo local)
const basePath = process.env.BASE_PATH ?? "/";

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    host: "0.0.0.0",
    open: true,
  },
  preview: {
    port,
    host: "0.0.0.0",
  },
});
