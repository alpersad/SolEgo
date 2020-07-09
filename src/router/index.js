import Vue from "vue";
import VueRouter from "vue-router";
import "semantic-ui-css/semantic.min.css";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("../views/Projects.vue"),
  },
  {
    path: "/game",
    name: "Game",
    component: () => import("../views/Game.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
