import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Settings from "../views/Settings.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/settings/:userId",
    name: "Settings",
    component: Settings,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
