import { createApp } from "vue";

import App from "@/App.vue";
import { router } from "@/router";

import "bootstrap/scss/bootstrap.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App).use(router);
router.isReady().then(() => app.mount("#app"));
