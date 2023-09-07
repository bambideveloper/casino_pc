import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.HOST_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home/index.vue"),
    },
    {
      path: "/hall/chess/:typeId",
      name: "chess",
      component: () => import("../views/Chess/index.vue"),
    },
    {
      path: "/hall/fish/:typeId",
      name: "fish",
      component: () => import("../views/Fish/index.vue"),
    },
    {
      path: "/hall/electronic/:typeId",
      name: "electronic",
      component: () => import("../views/Electronic/index.vue"),
    },
    {
      path: "/hall/video",
      name: "video",
      component: () => import("../views/Video/index.vue"),
    },
    {
      path: "/hall/lottery/:typeId",
      name: "lottery",
      component: () => import("../views/Lottery/index.vue"),
    },
    {
      path: "/hall/sport",
      name: "sport",
      component: () => import("../views/Sport/index.vue"),
    },
    {
      path: "/hall/e-competition",
      name: "e-competition",
      component: () => import("../views/Competition/index.vue"),
    },
    {
      path: "/activity/:typeId",
      name: "activity",
      component: () => import("../views/Activity/index.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Register/index.vue"),
    },
    {
      path: "/imsports",
      name: "imsports",
      component: () => import("../views/Sport/OtherPage/IMsport.vue"),
    },
  ],
});

export default router;
