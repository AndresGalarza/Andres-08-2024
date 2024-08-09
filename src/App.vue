<template>
  <HeaderMenu />
  <div class="py-24 px-2">
    <RouterView />
  </div>
</template>

<script>
import HeaderMenu from "./components/complex/HeaderMenu.vue";
export default {
  components: { HeaderMenu },
  name: "App",
};
</script>
