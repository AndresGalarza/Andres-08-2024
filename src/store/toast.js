import { defineStore } from "pinia";

class ToastMessage {
  constructor(type, message, description, id) {
    this.type = type;
    this.message = message;
    this.description = description;
    this.id = id;
  }
}

export const useToastStore = defineStore({
  id: "toast",
  state: () => ({
    toasts: [],
  }),
  getters: {
    getToasts: (state) => {
      return state.toasts;
    },
  },
  actions: {
    infoToast(toast) {
      const { type, message, description, id } = toast;
      this.toasts.push(new ToastMessage(type, message, description, id));
    },
    removeById(id) {
      const index = this.toasts.findIndex((t) => t.id === id);
      this.toasts.splice(index, 1);
    },
  },
});
