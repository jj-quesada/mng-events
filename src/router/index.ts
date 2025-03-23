import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/hub",
    name: "hub",
    component: () =>
      import("../views/HubView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () =>
        import("../views/RegisterView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
