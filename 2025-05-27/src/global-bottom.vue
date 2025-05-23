<script setup>
import { useNav } from "@slidev/client";
import { computed } from "vue";
import GradientBackground from "./components/GradientBackground.vue";

const { currentSlideRoute } = useNav();
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
  </div>
</template>
