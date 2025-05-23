<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});

defineProps<{
  id: string;
  name?: string;
  label: string;
  src: string;
}>();
</script>

<template>
  <div flex="~ col" items-center gap1>
    <a border-none="!" :href="src" target="_blank">
      <img
        :src
        :alt="id"
        mb2
        h-20
        w-20
        rounded-full
        object-cover
        :class="$attrs.class"
      />
    </a>
    <div font-smiley text-4 op70>{{ label }}</div>
    <a :href="src" target="_blank" font-semibold border-none="!" tracking-wider>
      {{ name || id }}
    </a>
  </div>
</template>
