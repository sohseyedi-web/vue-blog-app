import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import { router } from "./routes";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
  rtl: true,
  icon: true,
  position: "top-center",
};


createApp(App)
  .use(router)
  .use(createPinia())
  .use(Toast, options)
  .mount("#app");
