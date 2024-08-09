<template>
  <div class="top-[10%] right-[1%] fixed z-10">
    <div
      v-for="toast in getAllToasts"
      :key="toast?.id"
      class="toast relative mb-4 flex max-h-92px min-h-72px w-484px items-center gap-16px overflow-hidden rounded-md border-l-8 px-6 py-4 bg-orange-100 border-orange-500"
    >
      <div class="flex flex-col">
        <h4
          class="text-worky-neutral-600 font-montserrat text-16px font-semibold"
        >
          {{ toast.message }}
        </h4>
      </div>
      <div
        class="closeIcon text-worky-neutral-600 absolute cursor-pointer right-0 top-0 p-2"
        @click="closeHandler(toast)"
      >
        ×
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToast } from "@/composables/toast.js";
const { getAllToasts, removeToast: closeHandler } = useToast();
</script>
