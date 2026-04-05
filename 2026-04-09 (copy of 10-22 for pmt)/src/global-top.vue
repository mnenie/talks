<script setup>
import { useNav } from "@slidev/client";
import { computed } from "vue";

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
    <div
      :class="[
        'absolute text-5xl transition-all duration-500',
        frontmatter.topTitleClass,
      ]"
      :style="{ opacity: frontmatter.topTitle ? '70' : '0' }"
    >
      {{ frontmatter.topTitle }}
    </div>
  </div>
</template>
