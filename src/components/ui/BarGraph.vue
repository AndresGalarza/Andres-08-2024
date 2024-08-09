<template>
  <div class="w-full h-5 border-2">
    <div class="h-4" :class="color" :style="{ width: percentage }"></div>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";
const props = defineProps({
  value: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    default: "bg-blue-500",
  },
});

const percentage = computed(() => {
  const result = Math.round((props.value / 255) * 100);
  return `${result}%`;
});
</script>
