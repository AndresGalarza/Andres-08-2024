import { useToastStore } from "@/store/toast.js";
import { computed } from "vue";

export function useToast() {
  const toast = useToastStore();
  const getAllToasts = computed(() => {
    return toast.getToasts;
  });

  const removeToast = (info) => {
    toast.removeById(info);
  };

  const createToast = (info) => {
    info.id = (Math.random() + 1).toString(36).substring(7);
    toast.infoToast(info);
    setTimeout(() => {
      removeToast(info);
    }, 10000);
  };

  return {
    getAllToasts,
    removeToast,
    createToast,
  };
}
