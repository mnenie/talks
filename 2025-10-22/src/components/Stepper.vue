<script setup lang="ts">
import { useNav, useSlideContext } from "@slidev/client";
import {
  computed,
  onMounted,
  onUnmounted,
  reactive,
  useTemplateRef,
} from "vue";
import type { ClicksElement } from "@slidev/types";

interface TimelineStep {
  clicks?: string | string[];
  [key: string]: unknown;
}

const host = useTemplateRef<ClicksElement | null>("host");

const { steps } = defineProps<{
  steps: TimelineStep[];
}>();

function deepMerge(target: any, source: any) {
  if (source === null || typeof source !== "object") return source;
  if (target === null || typeof target !== "object") target = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      target[key] = deepMerge(target[key], source[key]);
    }
  }
  return target;
}

const nav = useNav();
const slide = useSlideContext();

const keys = computed(() => {
  const baseKeys = new Set(Object.keys(steps[0]));
  baseKeys.delete("clicks");
  baseKeys.add("steps");
  return Array.from(baseKeys);
});

const totalClicks = computed(() => steps.length);

const precalculatedData = computed(() => {
  const totalClicksValue = totalClicks.value;
  const states = Array.from({ length: totalClicksValue }, () =>
    deepMerge({}, steps[0]),
  );

  let click = 0;
  const aliases: Record<string, number[]> = {};
  steps.forEach((action) => {
    let from = 0;
    const to = totalClicksValue;
    from = click++;

    if (action.clicks) {
      if (Array.isArray(action.clicks)) {
        action.clicks.forEach((alias) => {
          aliases[alias] = [from, to];
        });
      } else {
        aliases[action.clicks] = [from, to];
      }
    }

    for (let i = from; i < to; i++) {
      states[i] = deepMerge(states[i], action);
    }
  });
  return { states, aliases };
});

const $clicks = computed(() => precalculatedData.value.aliases);
const click = computed(() => Math.min(nav.clicks.value, totalClicks.value - 1));
const data = computed(() => precalculatedData.value.states[click.value]);

const _keys = [
  keys.value.map((key) => [key, computed(() => data.value?.[key])]),
  Object.keys($clicks.value).map((alias) => [
    alias,
    computed(() => $clicks.value[alias][click.value]),
  ]),
  [["steps", computed(() => precalculatedData.value.states.length)]],
].flat();

const slottedParams = reactive(Object.fromEntries(_keys));

onMounted(() => {
  slide.$clicksContext.register(
    host.value!,
    slide.$clicksContext.calculateSince(0, totalClicks.value),
  );
});

onUnmounted(() => {
  slide.$clicksContext.unregister(host.value!);
});
</script>

<template>
  <div ref="host" />

  <slot v-bind="slottedParams" />
</template>
