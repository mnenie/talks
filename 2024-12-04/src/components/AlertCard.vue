<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { computed, useAttrs } from "vue";
interface AlertProps {
  color?: "default" | "purple" | "blue" | "red" | "green" | "yellow";
  content?: string;
}
const { color = "blue", content } = defineProps<AlertProps>();

const colorPresets = {
  default: {
    color: "bg-neutral-900/90 b-gray c-gray",
  },
  blue: {
    color: "bg-blue/40 b-blue c-blue",
  },
  red: {
    color: "bg-red/40 b-red c-red",
  },
  green: {
    color: "bg-green/40 b-green c-green",
  },
  purple: {
    color: "bg-purple/40 b-purple c-purple",
  },
  yellow: {
    color: "bg-yellow/40 b-yellow c-yellow",
  },
};

const attrs = useAttrs();

const classes = computed(() => {
  return [
    twMerge(
      "b-1 grid rounded-md place-items-center text-xl font-bold duration-200 px-4 text-nowrap",
      colorPresets[color as keyof typeof colorPresets].color,
      attrs.class as string,
    ),
  ];
});
</script>

<template>
  <div :class="classes">
    <slot v-if="$slots.default">
      <slot />
    </slot>
    <span v-else :key="content">{{ content }}</span>
  </div>
</template>
