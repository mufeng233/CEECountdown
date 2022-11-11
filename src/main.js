import { createApp } from "vue";
import { registerPlugins } from "@/plugins";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import "./App.css";

const app = createApp(App);

registerPlugins(app);

app.use(vuetify).mount("#app");
