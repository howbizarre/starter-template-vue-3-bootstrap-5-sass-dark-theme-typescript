import { createRouter, createWebHistory } from "vue-router";

/** Layouts */
import Page from "@/layouts/Page.vue";
import Default from "@/layouts/Default.vue";

/** Views */
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contacts from "@/views/Contacts.vue";

export const routes = [
  {
    path: "/",
    component: Default,
    children: [
      { path: "/", name: "Home", component: Home }
    ],
  },
  {
    path: "/",
    component: Page,
    children: [
      { path: "about", name: "About", component: About },
      { path: "contacts", name: "Contacts", component: Contacts },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
