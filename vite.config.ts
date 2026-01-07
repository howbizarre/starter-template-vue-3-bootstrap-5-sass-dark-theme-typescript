import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  /** Silence Sass deprecation warnings for Bootstrap compatibility */
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["legacy-js-api", "color-functions", "global-builtin", "import", "if-function"],
      },
    },
  },
});
