import config from "@slidev/client/uno.config";
import { mergeConfigs } from "unocss";

const variants = {
  core: "[--bg-key:#5a8f29] [--bg-f-grad:#49ff3c] [--bg-s-grad:#4cc580] [--bg-t-grad:#ceff1d]",
} as const;

export default mergeConfigs([
  // @ts-expect-error slidev mergeConfigs error
  config,
  {
    shortcuts: [
      {
        "text-gradient":
          "text-transparent bg-clip-text bg-gradient-to-tl from-green-400 via-teal-400 to-blue-500",
        "slide-main": "slide-core",
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
