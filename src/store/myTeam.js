import { defineStore } from "pinia";

export const useMyTeamStore = defineStore("myTeam", {
  state: () => ({
    team: [],
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
    },
    removePokemon(pokemon) {
      this.team = this.team.filter((id) => id !== pokemon);
    },
  },
});
