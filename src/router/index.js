import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import RPS from "../views/RPS.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/RPS",
    name: "RPS",
    component: RPS
  }
];

const router = new VueRouter({
  routes
});

export default router;
