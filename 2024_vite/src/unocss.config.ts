import config from "@slidev/client/uno.config";
import { mergeConfigs } from "unocss";

export default mergeConfigs([
  // @ts-expect-error slidev mergeConfigs error
  config,
  {
    shortcuts: {
      "text-gradient":
        "text-transparent bg-clip-text bg-gradient-to-tl from-green-400 via-teal-400 to-blue-500",
    },
  },
]);
