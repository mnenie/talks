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
    <div
      v-show="currentSlideNo > 1"
      class="absolute bottom-5 right-5 text-lg opacity-50"
    >
      {{ currentSlideNo }}
    </div>
  </div>
</template>
