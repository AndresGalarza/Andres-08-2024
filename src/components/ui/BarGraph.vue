<template>
  <div class="w-full h-4 border-2">
    <div class="h-4" :class="color" :style="{ width: value + '%' }"></div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  value: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    default: "bg-blue-500",
  },
});
</script>
