import config from "@slidev/client/uno.config";
import { mergeConfigs } from "unocss";

const variants = {
  core: "[--bg-key:#0099ff] [--bg-f-grad:#0099ff] [--bg-s-grad:#4cbbc5] [--bg-t-grad:#5d1dff]",
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
