<template>
  <div
    class="p-4 grid grid-cols-1 gap-4"
    v-for="pokemonId in teamList"
    :key="pokemonId"
  >
    <PokemonStats
      :id="pokemonId"
      @remove="removePokemon"
      @goDetail="goDetail"
    />
  </div>
</template>
<script setup>
import PokemonStats from "../components/complex/PokemonStats.vue";
import { ref } from "vue";
import { useMyTeamStore } from "../store/myTeam.js";
import { useRouter } from "vue-router";
const router = useRouter();

const MyTeam = useMyTeamStore();

const teamList = ref(MyTeam.getTeamList);

const removePokemon = (id) => {
  MyTeam.removePokemon(id);
  teamList.value = MyTeam.getTeamList;
};

const goDetail = (id) => {
  router.push(`/team/${id}`);
};
</script>
