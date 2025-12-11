import "./assets/main.css";

import { createApp, defineAsyncComponent } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseGrid from "./components/UI/BaseGrid.vue";

const app = createApp(App);
const pinia = createPinia();

const baseSpinner = defineAsyncComponent(() => import("./components/UI/BaseSpinner.vue"));
const baseModal = defineAsyncComponent(() => import("./components/UI/BaseModal.vue"));

app.component("base-button", BaseButton);
app.component("base-modal", baseModal);
app.component("base-grid", BaseGrid);
app.component("base-spinner", baseSpinner);

app.use(pinia);
app.mount("#app");
