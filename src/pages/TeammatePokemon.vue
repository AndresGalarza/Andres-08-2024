<template>
  <div class="flex flex-col gap-4">
    <PokemonStats :id="id" :canDoActions="false" showAditionalInfo />
    <PokemonEvolution :id="id" />
  </div>
</template>

<script setup>
import { useToast } from "@/composables/toast";
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
import PokemonEvolution from "../components/complex/PokemonEvolution.vue";
import PokemonStats from "../components/complex/PokemonStats.vue";
import { useMyTeamStore } from "../store/myTeam.js";
const { createToast: toast } = useToast();
const router = useRouter();

const MyTeam = useMyTeamStore();
const id = router.currentRoute.value.params.id;
const teamList = ref(MyTeam.getTeamList);
onBeforeMount(() => {
  // validate if the id is a number and if the pokemon is in the team
  if (isNaN(id) || !teamList.value.includes(id)) {
    toast({ message: "This Pokemon is not in your team" });
    router.push("/team");
  }
});
</script>
