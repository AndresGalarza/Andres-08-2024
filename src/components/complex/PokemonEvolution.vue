<template>
  <div class="border-2 p-4 border-blue-200">
    <p><span class="font-bold">Description:</span> {{ description }}</p>
    <div class="font-bold">Evolution Chain:</div>
    <div class="flex gap-4 items-center flex-wrap">
      <template v-for="(pokemon, index) in evolution" :key="index">
        <PokeCard
          class="w-40"
          :id="pokemon.id"
          :name="pokemon.name"
          :isInteactive="false"
        />
        <span
          v-if="
            evolution.at(index + 1) &&
            evolution.at(index + 1).level != pokemon.level
          "
        >
          →
        </span>
      </template>
    </div>
  </div>
</template>
<script setup>
import { useApi } from "@/composables/api.js";
import { defineProps, onBeforeMount, ref } from "vue";
import PokeCard from "./PokeCard.vue";

const { getData } = useApi();
const props = defineProps({
  id: {
    type: [Number, String],
    required: true,
  },
});

const description = ref(null);
const evolution = ref();
const BASE_URL = "https://pokeapi.co/api/v2/";

const getNameId = (species, level = 0) => {
  return {
    name: species.name,
    id: species.url.split("/").at(-2),
    level,
  };
};

const getEvolutionChainOf = (evolves = [], level = 1) => {
  if (!evolves?.length) return [];
  let evolvesList = [];
  evolves.forEach((evolve) => {
    evolvesList.push(getNameId(evolve.species, level));
    evolvesList = [
      ...evolvesList,
      ...getEvolutionChainOf(evolve?.evolves_to, level + 1),
    ];
  });
  return evolvesList;
};

onBeforeMount(async () => {
  const data = await getData(`pokemon-species/${props.id}`);
  description.value = data.flavor_text_entries.find(
    (entry) => entry.language.name === "en"
  ).flavor_text;

  const evolutionChainUrl = data.evolution_chain.url.replace(BASE_URL, "");

  const dataEvolution = await getData(evolutionChainUrl);

  let evolutionChain = [];
  evolutionChain.push(getNameId(dataEvolution.chain.species));
  evolutionChain = [
    ...evolutionChain,
    ...getEvolutionChainOf(dataEvolution.chain?.evolves_to),
  ];
  evolution.value = evolutionChain;
});
</script>
