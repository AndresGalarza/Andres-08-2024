<template>
  <div
    class="p-4 border-2 border-gray-400"
    :class="[
      teamList.includes(id) ? 'border-2 border-blue-500 bg-blue-300' : '',
      isInteactive ? 'cursor-pointer' : '',
    ]"
    @click="onClick"
  >
    <img
      class="h-44"
      :class="
        !teamList.includes(id) && isInteactive
          ? 'grayscale hover:grayscale-0'
          : ''
      "
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
    />
    <p class="text-center font-semibold text-blue-500 pt-4">{{ name }}</p>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(["click"]);

const props = defineProps({
  id: {
    type: [Number, String],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  teamList: {
    type: Array,
    required: false,
    default: () => [],
  },
  isInteactive: {
    type: Boolean,
    default: true,
  },
});

const onClick = () => {
  emit("click", props.id);
};
</script>
