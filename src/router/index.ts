import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import EventDetailsComponent from "@/components/EventDetailsComponent.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "landing",
    component: () => import("../views/LandingView.vue"),
    meta: { hasSidebar: false },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: { hasSidebar: false },
  },
  {
    path: "/hub",
    name: "hub",
    component: () => import("../views/HubView.vue"),
    meta: { hasSidebar: true },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterView.vue"),
    meta: { hasSidebar: false },
  },
  {
    path: "/eventCreation",
    name: "eventCreation",
    component: () => import("../views/EventCreationView.vue"),
    meta: { hasSidebar: false },
  },
  {
    path: '/event/:id',
    name: 'event-details',
    component: EventDetailsComponent,
    meta: { hasSidebar: false },
    props: true
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
