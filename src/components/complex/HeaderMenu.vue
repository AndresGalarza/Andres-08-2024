<template>
  <div
    class="flex gap-4 justify-between flex-wrap fixed h-20 bg-blue-400 w-full p-4 z-10"
  >
    <img
      class="h-full"
      src="https://www.pngall.com/wp-content/uploads/13/Pokemon-Logo-Background-PNG.png"
      alt="catch your team"
    />

    <div class="flex flex-wrap gap-4 content-center">
      <router-link to="/" class="text-white">Home</router-link>
      <router-link to="/team" class="text-white">My Team</router-link>
    </div>
  </div>
</template>
<script setup></script>
