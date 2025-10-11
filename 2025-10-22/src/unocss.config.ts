import config from "@slidev/client/uno.config";
import { mergeConfigs } from "unocss";

function cssValue(value: string) {
  return value.endsWith("%") ? value : `${value}px`;
}

const variants = {
  core: "[--bg-key:#0099ff] [--bg-f-grad:#0099ff] [--bg-s-grad:#4cbbc5] [--bg-t-grad:#5d1dff]",
} as const;

export default mergeConfigs([
  // @ts-expect-error
  config,
  {
    shortcuts: [
      {
        "text-gradient":
          "text-transparent bg-clip-text bg-gradient-to-tl from-green-400 via-teal-400 to-blue-500",
        "slide-main": "slide-core",
        "config-prs":
          "absolute -translate-x-1/2 -translate-y-1/2 transform-origin-center duration-200 ease-in-out filter",
      },
      [
        /^position-(\S+)_(\S+)$/,
        ([, c1, c2]) => {
          /* eslint-disable prettier/prettier */
          const x = c1.startsWith("r") ? `right-[${cssValue(c1.slice(1))}]` : `left-[${cssValue(c1)}]`;
          const y = c2.startsWith("b") ? `bottom-[${cssValue(c2.slice(1))}]` : `top-[${cssValue(c2)}]`;
          /* eslint-enable prettier/prettier */

          return `${x} ${y}`;
        },
      ],
      [
        /^slide-(\S+)/,
        ([, variant]) => {
          return variants[variant as keyof typeof variants];
        },
      ],
    ],
  },
]);
