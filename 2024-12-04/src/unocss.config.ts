import config from "@slidev/client/uno.config";
import { mergeConfigs } from "unocss";

const variants = {
  blue: "[--bg-key:#1e4a9c] [--bg-f-grad:#1a72ad] [--bg-s-grad:#4cbbc5] [--bg-t-grad:#4a1cbd]",
  purple:
    "[--bg-key:#990099] [--bg-f-grad:#ff4dff] [--bg-s-grad:#ff80ff] [--bg-t-grad:#ff99ff]",
} as const;

export default mergeConfigs([
  // @ts-expect-error slidev mergeConfigs error
  config,
  {
    shortcuts: [
      {
        "text-gradient":
          "text-transparent bg-clip-text bg-gradient-to-tl from-green-400 via-teal-400 to-blue-500",
        "slide-main": "slide-blue",
      },
      [
        /^slide-(\S+)/,
        ([, variant]) => {
          return variants[variant as keyof typeof variants];
        },
      ],
    ],
  },
]);
