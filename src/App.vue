<template>
  <HeaderMenu />
  <div class="pt-24 pb-8 px-2">
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
