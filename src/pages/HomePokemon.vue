<template>
  <div>
    <LoadingPage v-if="loading" />
    <div class="flex gap-4 flex-wrap justify-center">
      <template v-for="pokemon in pokemons" :key="pokemon.name">
        <PokeCard
          :id="pokemon.id"
          :name="pokemon.name"
          :teamList="MyTeam.getTeamList"
          @click="togleMyTeam"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import LoadingPage from "../components/ui/LoadingPage.vue";
import PokeCard from "../components/complex/PokeCard.vue";
import { ref, onBeforeMount, onMounted, onBeforeUnmount } from "vue";
import { useApi } from "@/composables/api.js";
import { useMyTeamStore } from "../store/myTeam.js";
const MyTeam = useMyTeamStore();

const { getData } = useApi();
let pokemons = ref([]);
let loading = ref(true);
function getPokemons(page = 1) {
  const pageSize = 25;
  const offset = (page - 1) * pageSize;
  const limit = offset >= 150 ? 1 : 25;
  if (offset >= 151) return { results: [] };
  return getData("pokemon", { limit, offset });
}

onBeforeMount(async () => {
  let { results } = await getPokemons();
  pokemons.value = results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2),
    name: pokemon.name,
  }));
  loading.value = false;
});

onMounted(() => {
  const onscroll = async () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 100
    ) {
      loading.value = true;
      let { results } = await getPokemons(pokemons.value.length / 25 + 1);
      pokemons.value = [
        ...pokemons.value,
        ...results.map((pokemon) => ({
          id: pokemon.url.split("/").at(-2),
          name: pokemon.name,
        })),
      ];
      loading.value = false;
    }
  };
  window.addEventListener("scroll", onscroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onscroll);
});

const togleMyTeam = (id) => {
  // validade if the pokemon is already in the team
  if (MyTeam.getTeamList.includes(id)) {
    MyTeam.removePokemon(id);
  } else {
    // validate if the team is full
    if (MyTeam.getTeamList.length < 6) {
      MyTeam.addPokemon(id);
    } else {
      alert("Sorry, Your team is full");
    }
  }
};
</script>
