<script setup>
import { useNav } from "@slidev/client";
import { computed } from "vue";
import GradientBackground from "./components/GradientBackground.vue";

const { currentSlideRoute, currentSlideNo } = useNav();
const frontmatter = computed(
  () =>
    (currentSlideRoute.value &&
      currentSlideRoute.value.meta?.slide?.frontmatter) ||
    {},
);
</script>

<template>
  <div :class="frontmatter.slide ?? 'slide-main'">
    <GradientBackground />
    <div class="absolute bottom-[20px] right-[20px] text-lg opacity-50">
      {{ currentSlideNo }}
    </div>
  </div>
</template>
