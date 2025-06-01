import "./assets/reset.css";
import "./assets/main.css";
import { createPinia } from "pinia";
const pinia = createPinia();

import { createApp } from "vue";

import App from "./App.vue";

const app = createApp(App);

app.use(pinia);

app.mount("#app");
