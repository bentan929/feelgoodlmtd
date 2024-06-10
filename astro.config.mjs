import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://resplendent-kashata-a93e45.netlify.app",
  integrations: [preact()]
});