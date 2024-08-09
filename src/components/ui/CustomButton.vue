<template>
  <button
    @click="emit('click')"
    class="text-white font-bold py-2 px-4 rounded h-fit w-fit"
    :class="
      color === 'blue'
        ? 'bg-blue-500 hover:bg-blue-700'
        : 'bg-red-500 hover:bg-red-700'
    "
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";
const emit = defineEmits(["click"]);
defineProps({
  color: {
    type: String,
    default: "blue",
  },
});
</script>
