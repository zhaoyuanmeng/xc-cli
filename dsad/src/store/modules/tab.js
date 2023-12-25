import { defineStore } from "pinia";

export const useTabStore = defineStore({
  id: "app-tab",
  state: () => ({
    activeTabName: "one", //默认是one
  }),
  getters: {},
  actions: {
    setActiveTabName(data) {
      this.activeTabName = data;
    },
  },
});
