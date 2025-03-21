import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
    component: () =>
      import("../views/LoginView.vue"),
    meta: { hasSidebar: false }
  },
  {
    path: "/hub",
    name: "hub",
    component: () =>
      import("../views/HubView.vue"),
    meta: { hasSidebar: true }
  },
  {
    path: "/eventCreation",
    name: "eventCreation",
    component: () =>
      import("../views/EventCreationView.vue"),
    meta: { hasSidebar: false }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
