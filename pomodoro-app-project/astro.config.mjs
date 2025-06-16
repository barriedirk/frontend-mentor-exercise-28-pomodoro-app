// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const isDev = process.env.NODE_ENV === "development";
const base = isDev ? "/" : "frontend-mentor-exercise-28-pomodoro-app";

// https://astro.build/config
export default defineConfig({
  base,
  compressHTML: false,
  build: {
    assets: "astro_assets",
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
