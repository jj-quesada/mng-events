import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { hasSidebar: true }
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
  history: createWebHashHistory(),
  routes,
});

export default router;
