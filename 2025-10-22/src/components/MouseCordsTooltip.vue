<script setup lang="ts">
import { useMouse, type UseMouseEventExtractor } from "@vueuse/core";

const extractor: UseMouseEventExtractor = (event) =>
  event instanceof MouseEvent ? [event.offsetX, event.offsetY] : null;

const { x, y } = useMouse({ type: extractor });
</script>

<template>
  <div
    class="pointer-events-none absolute z-50 rounded-md bg-[rgba(0,0,0,0.2)] p-2 text-sm text-white font-mono"
    :style="{
      left: `${x + 15}px`,
      top: `${y + 15}px`,
    }"
  >
    px {{ Math.round(x) }} {{ Math.round(y) }}
  </div>
</template>
