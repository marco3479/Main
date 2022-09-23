import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from '@astrojs/preact';
import vercel from "@astrojs/vercel/serverless";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact(), image()],
  output: "server",
  adapter: vercel()
});