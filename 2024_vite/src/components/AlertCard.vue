<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { computed, useAttrs } from "vue";
interface AlertProps {
  color?: "default" | "purple" | "blue";
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
    <Transition name="title" mode="out-in">
      <slot v-if="$slots.default">
        <slot />
      </slot>
      <span v-else :key="content">{{ content }}</span>
    </Transition>
  </div>
</template>

<style scoped>
.title-enter-active,
.title-leave-active {
  transition: all 0.3s ease;
}

.title-enter-from,
.title-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.title-enter-to,
.title-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
