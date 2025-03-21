import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";
import 'vuetify/styles'

const vuetify = createVuetify()
const pinia = createPinia();

createApp(App).use(router).use(vuetify).use(pinia).mount("#app");
