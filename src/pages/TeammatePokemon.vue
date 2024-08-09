<template>
  <div class="flex flex-col gap-2">
    <PokemonStats :id="id" :canDoActions="false" showAditionalInfo />
    <PokemonEvolution :id="id" />
  </div>
</template>

<script setup>
import PokemonEvolution from "../components/complex/PokemonEvolution.vue";
import PokemonStats from "../components/complex/PokemonStats.vue";
import { ref, onBeforeMount } from "vue";
import { useMyTeamStore } from "../store/myTeam.js";
import { useRouter } from "vue-router";
const router = useRouter();

const MyTeam = useMyTeamStore();
const id = router.currentRoute.value.params.id;
const teamList = ref(MyTeam.getTeamList);
onBeforeMount(() => {
  // validate if the id is a number and if the pokemon is in the team
  if (isNaN(id) || !teamList.value.includes(id)) {
    router.push("/team");
  }
});
</script>
