// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const isDev = process.env.NODE_ENV === "development";

// https://astro.build/config
export default defineConfig({
  site: isDev ? "" : "https://barriedirk.github.io",
  base: isDev ? "/" : "frontend-mentor-exercise-28-pomodoro-app",

  compressHTML: false,
  build: {
    assets: "astro_",
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
