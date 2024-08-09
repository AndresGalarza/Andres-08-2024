<template>
  <HeaderMenu />
  <div class="pt-24 pb-8 px-2">
    <RouterView />
    <ToastMessage />
  </div>
</template>

<script>
import HeaderMenu from "@/components/complex/HeaderMenu.vue";
import ToastMessage from "@/components/ui/ToastMessage.vue";
export default {
  components: { HeaderMenu, ToastMessage },
  name: "App",
};
</script>
