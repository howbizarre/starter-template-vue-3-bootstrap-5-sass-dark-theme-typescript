import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    component: () => import("@/layouts/Default.vue"),
    children: [
      { path: "", name: "Home", component: () => import("@/views/Home.vue") }
    ],
  },
  {
    path: "/about",
    component: () => import("@/layouts/Page.vue"),
    children: [
      { path: "", name: "About", component: () => import("@/views/About.vue") }
    ],
  },
  {
    path: "/contacts",
    component: () => import("@/layouts/Page.vue"),
    children: [
      { path: "", name: "Contacts", component: () => import("@/views/Contacts.vue") },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
