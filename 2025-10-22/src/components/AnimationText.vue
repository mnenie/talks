<script setup lang="ts">
import { useNav } from "@slidev/client";
import { twMerge, type ClassNameValue } from "tailwind-merge";
import { computed, ref, watch } from "vue";

const {
  duration = 0.7,
  filter = true,
  index,
  words,
} = defineProps<{
  words: string;
  filter?: boolean;
  duration?: number;
  index: number;
}>();

const nav = useNav();

const scope = ref(null);
const wordsArray = computed(() => words.split(" "));

const headingStyle = computed(() => ({
  opacity: 0,
  filter: filter ? "blur(10px)" : "none",
  transition: `opacity ${duration}s, filter ${duration}s`,
}));

const startAnimation = () => {
  if (scope.value) {
    const spans = (scope.value as HTMLElement).querySelectorAll("h1");
    spans.forEach((span: HTMLElement) => {
      span.style.opacity = "0";
      span.style.filter = filter ? "blur(10px)" : "none";
    });
    spans.forEach((span: HTMLElement, index: number) => {
      setTimeout(() => {
        span.style.opacity = "1";
        span.style.filter = filter ? "blur(0px)" : "none";
      }, index * 200);
    });
  }
};

const stopAnimation = () => {
  if (scope.value) {
    const spans = (scope.value as HTMLElement).querySelectorAll("h1");
    spans.forEach((span: HTMLElement) => {
      span.style.opacity = "0";
    });
  }
};

watch(
  () => nav.clicks.value,
  (newClickValue) => {
    if (newClickValue === index) {
      startAnimation();
    } else if (newClickValue > index) {
      stopAnimation();
    }
  },
  {
    immediate: true,
    flush: "post",
  },
);
</script>

<template>
  <div
    v-show="nav.clicks.value === index"
    :class="
      twMerge('leading-snug tracking-wide', $attrs.class as ClassNameValue)
    "
  >
    <div ref="scope">
      <h1
        v-for="(word, idx) in wordsArray"
        :key="word + idx"
        class="inline-block"
        :style="headingStyle"
      >
        {{ word }}&nbsp;
      </h1>
    </div>
  </div>
</template>
