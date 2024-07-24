import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import store from "@/library/store";
import { usePrimeVue } from "./theme";
import { api } from "@/composable/api";
import "@/assets/styles.scss";

const app = createApp(App);
const pinia = createPinia();

usePrimeVue(app);
app.use(pinia);
app.use(store);
api
  .currentUser()
  .then((res) => {
    window.stores.user.update(res);
    app.use(router);
    app.mount("#app");
  })
  .catch((err) => {
    console.error("ERROR:", err);
  });
