import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts
    server: { entry: "server" },
  },
  vite: {
    // This forces Nitro to build specifically for Vercel serverless functions
    nitro: {
      preset: "vercel"
    }
  }
});
