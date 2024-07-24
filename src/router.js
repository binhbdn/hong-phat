import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "@/layout/AppLayout.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: AppLayout,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: "products",
          name: "manageProducts",
          meta: {
            breadcrumb: ["Quản lý sản phẩm"]
          },
          component: () => import("@/views/products/index.vue")
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login.vue")
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/views/NotFound.vue")
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!window.stores?.user?.id) {
      router.push({ name: "login" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
