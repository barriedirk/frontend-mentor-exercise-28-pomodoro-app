// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const isDev = process.env.NODE_ENV === "development";

// https://astro.build/config
export default defineConfig({
  base: isDev ? "/" : "frontend-mentor-exercise-28-pomodoro-app",

  compressHTML: false,
  build: {
    assets: "astro_assets",
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
