import Home from "@/pages/HomePokemon.vue";
import Team from "@/pages/TeamPokemon.vue";
import Teammate from "@/pages/TeammatePokemon.vue";
import { createRouter, createWebHistory } from "vue-router";
// Import your route components here

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
  },
  {
    path: "/team/:id",
    name: "Teammate",
    component: Teammate,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
