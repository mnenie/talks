import config from "@slidev/client/uno.config";
import { mergeConfigs } from "unocss";

const variants = {
  uno: "[--bg-key:#1e4a9c] [--bg-f-grad:#42B883] [--bg-s-grad:#35495E] [--bg-t-grad:#5468ff]",
} as const;

export default mergeConfigs([
  // @ts-expect-error slidev mergeConfigs error
  config,
  {
    shortcuts: [
      {
        "text-gradient":
          "text-transparent bg-clip-text bg-gradient-to-tl from-green-400 via-teal-400 to-blue-500",
        "slide-main": "slide-uno",
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
