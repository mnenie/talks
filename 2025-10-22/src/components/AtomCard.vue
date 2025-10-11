<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { computed, useAttrs } from "vue";
interface AlertProps {
  color?: "purple" | "green" | "yellow" | "orange" | "blue";
  title: string;
  disabled?: boolean;
}
const { color = "green", disabled = false, title } = defineProps<AlertProps>();

const colorPresets = {
  purple: {
    color: "border-purple/60 bg-purple/40 c-white",
  },
  green: {
    color: "border-green/60 bg-green/40 c-white",
  },
  yellow: {
    color: "border-yellow/60 bg-yellow/40 c-white",
  },
  orange: {
    color: "border-orange/60 bg-orange/40 c-white",
  },
  blue: {
    color: "border-blue/60 bg-blue/40 c-white",
  },
};

const attrs = useAttrs();

const classes = computed(() => {
  return twMerge(
    "b-1 grid rounded-md place-items-center text-xl h-12 font-bold duration-200 px-4 py-1 text-nowrap",
    colorPresets[color as keyof typeof colorPresets].color,
    "config-prs",
    disabled &&
      "opacity-50 pointer-events-none bg-transparent border-dashed border-gray/60",
    attrs.class as string,
  );
});
</script>

<template>
  <div :class="classes">
    <div flex="~ items-center gap-2">
      <slot />
      <div class="text-xl">
        {{ title }}
      </div>
    </div>
  </div>
</template>
