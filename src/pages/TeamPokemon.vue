<template>
  <div v-if="!teamList.length" class="flex flex-col text-center p-12 w-full">
    <div class="flex justify-center p-4">
      <img
        class="max-w-72 justify-self-center"
        src="https://www.pikpng.com/pngl/b/365-3658745_nintendo-est-de-luto-pikachu-crying-transparent-clipart.png"
      />
    </div>
    You don't have pokemons in your team yet,
    <routerLink class="text-blue-500 hover:text-blue-700" to="/"
      >select them in here</routerLink
    >
  </div>
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
