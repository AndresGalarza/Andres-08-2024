import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/HomePokemon.vue";

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
    component: Home,
  },
  {
    path: "/team/:id",
    name: "Teammate",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
