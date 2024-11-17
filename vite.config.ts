import MarkdownItMagicLink from "markdown-it-magic-link";
import { defineConfig } from "vite";
import "@slidev/cli";

export default defineConfig({
  slidev: {
    markdown: {
      markdownItSetup(md) {
        md.use(MarkdownItMagicLink, {
          linksMap: {
            Vue: "https://github.com/vuejs/core",
            Nuxt: "https://github.com/nuxt/nuxt",
            UnaUI: "https://github.com/una-ui/una-ui",
          },
        });
      },
    },
  },
});
