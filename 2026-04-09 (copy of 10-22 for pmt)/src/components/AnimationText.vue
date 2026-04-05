<script setup lang="ts">
import { twMerge, type ClassNameValue } from "tailwind-merge";
import { computed, nextTick, ref, watch } from "vue";

const {
  duration = 0.7,
  filter = true,
  ...props
} = defineProps<{
  words: string;
  filter?: boolean;
  duration?: number;
  index?: number;
}>();

const scope = ref(null);
const wordsArray = computed(() => props.words.split(" "));

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
    const spans = (scope.value as HTMLElement).querySelectorAll("span");
    spans.forEach((span: HTMLElement) => {
      span.style.opacity = "0";
    });
  }
};

watch(
  () => props.index,
  async (newValue, oldValue) => {
    await nextTick(() => {
      if (newValue! > oldValue!) {
        stopAnimation();
      }
      startAnimation();
    });
  },
  {
    immediate: true,
    flush: "post",
  },
);
</script>

<template>
  <div
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
