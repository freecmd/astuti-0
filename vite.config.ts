import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts
    server: { entry: "server" },
  },
  // Nitro config needs to be at the top level for the Lovable wrapper to pick it up
  nitro: {
    preset: "vercel",
  },
});
