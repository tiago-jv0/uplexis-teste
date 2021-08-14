import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },

  {
    path: "/details",
    name: "details",
    component: () => import("../views/Details.vue"),
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
