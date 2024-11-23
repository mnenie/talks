import MarkdownItMagicLink from "markdown-it-magic-link";
import { defineConfig } from "vite";
import "@slidev/cli";

export default defineConfig({
  slidev: {
    markdown: {
      markdownItSetup(md) {
        md.use(MarkdownItMagicLink, {
          linksMap: {
            Vue: {
              link: "https://github.com/vuejs/core",
              imageUrl:
                "https://avatars.githubusercontent.com/u/6128107?s=48&v=4",
            },
            Nuxt: {
              link: "https://github.com/nuxt/nuxt",
              imageUrl:
                "https://avatars.githubusercontent.com/u/23360933?s=48&v=4",
            },
            UnaUI: {
              link: "https://github.com/una-ui/una-ui",
              imageUrl:
                "https://avatars.githubusercontent.com/u/140925492?s=48&v=4",
            },
            Slidev: {
              link: "https://github.com/slidevjs/slidev",
              imageUrl:
                "https://avatars.githubusercontent.com/u/83095831?s=48&v=4",
            },
          },
        });
      },
    },
  },
  build: {
    assetsDir: "assets",
  },
});
