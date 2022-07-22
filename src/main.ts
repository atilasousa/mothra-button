import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

//Fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret);

app.component("font-awesome-icon", FontAwesomeIcon);

//
app.mount("#app");
