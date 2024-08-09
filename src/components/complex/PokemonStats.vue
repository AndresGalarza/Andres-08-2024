<template>
  <div class="border-2 p-4 border-blue-300">
    <h2 class="text-3xl text-gray-900 w-full border-b-2 border-gray-500 p-2">
      {{ name }}
    </h2>
    <div class="py-4 flex gap-3 flex-wrap self-start flex-col">
      <div class="flex flex-wrap gap-3 w-full">
        <div class="w-full md:w-fit">
          <img class="max-w-40 max-h-40" :src="image" />
        </div>
        <template v-if="canDoActions">
          <CustomButton color="blue" @click="emit('goDetail', id)">
            Details on my team</CustomButton
          >
          <CustomButton color="red" @click="emit('remove', id)">
            Remove From my team
          </CustomButton>
        </template>
      </div>
      <div class="flex-grow w-full">
        <div class="p-2 border-b-2 border-gray-500">
          <p>Stats</p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="(stat, index) in stats" :key="index">
              <p>
                {{ stat.stat.name }}:
                <span class="font-semibold"> {{ stat.base_stat }} </span>
              </p>
              <BarGraph :value="stat.base_stat" />
            </div>
          </div>
        </div>
        <div class="p-2 border-b-2 border-gray-500">
          <p>Cries</p>
          <div class="flex gap-3">
            <div v-for="(cry, index) in cries" :key="index">
              <audio controls>
                <source :src="cry" type="audio/mpeg" />
              </audio>
            </div>
          </div>
        </div>
        <div class="p-2 border-gray-500">
          <div>
            <p>
              Types:
              <span class="font-semibold">
                {{ typesList }}
              </span>
            </p>
          </div>
          <div v-if="showAditionalInfo">
            <p>
              Height: <span class="font-semibold"> {{ height }} </span>
            </p>
            <p>
              Weight: <span class="font-semibold"> {{ weight }} </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useApi } from "@/composables/api.js";
import { computed, defineEmits, defineProps, onBeforeMount, ref } from "vue";
import BarGraph from "../ui/BarGraph.vue";
import CustomButton from "../ui/CustomButton.vue";

const { getData } = useApi();

const emit = defineEmits(["remove", "goDetail"]);
const props = defineProps({
  id: {
    type: [Number, String],
    required: true,
  },
  canDoActions: {
    type: Boolean,
    default: true,
  },
  showAditionalInfo: {
    type: Boolean,
    default: false,
  },
});

const name = ref("Pikachu");
const stats = ref(null);
const image = ref(null);
const types = ref([]);
const cries = ref(null);
const height = ref(null);
const weight = ref(null);
const description = ref(null);

const typesList = computed(() => {
  return types.value
    .map((type) => {
      return type.type.name;
    })
    .join(", ");
});

onBeforeMount(async () => {
  const response = await getData(`pokemon/${props.id}`);
  const data = await response;
  stats.value = data.stats;
  image.value = data.sprites.other.dream_world.front_default;
  types.value = data.types;
  cries.value = data.cries;
  name.value = data.name;
  height.value = data.height;
  weight.value = data.weight;
  description.value = data.description;
});
</script>
