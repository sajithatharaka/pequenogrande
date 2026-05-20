import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/website-image-refresh/",
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
