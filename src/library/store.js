import { useUserStore } from "@/stores/user";

const stores = {};
setTimeout(() => {
  if (window.stores) {
    window.location.reload();
  }
  Object.assign(stores, {
    user: useUserStore()
  });
  window.stores = stores;
});

export default {
  install: (app) => {
    app.config.globalProperties.$stores = stores;
  }
};
