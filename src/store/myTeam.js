import { defineStore } from "pinia";

export const useMyTeamStore = defineStore("myTeam", {
  state: () => ({
    team: JSON.parse(localStorage.getItem("team")) || [],
  }),

  getters: {
    getTeamSize() {
      return this.team.length;
    },
    getTeamList() {
      return this.team;
    },
  },

  actions: {
    addPokemon(pokemon) {
      this.team.push(pokemon);
      localStorage.setItem("team", JSON.stringify(this.team));
    },
    removePokemon(pokemon) {
      this.team = this.team.filter((id) => id !== pokemon);
      localStorage.setItem("team", JSON.stringify(this.team));
    },
  },
});
