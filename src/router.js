import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "@/layout/AppLayout.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: AppLayout,
      children: [
        {
          path: "",
          name: "pageHome",
          props: (route) => ({ view: route.query?.view }),
          component: () => import("@/views/home/Home.vue")
        },
        {
          path: "san-pham/tim-kiem",
          name: "pageSPTimKiem",
          component: () => import("@/views/san-pham/tim-kiem/TimKiem.vue")
        },
        {
          path: "san-pham/dao-phay-cau",
          name: "pageSPDaoPhayCau",
          component: () => import("@/views/san-pham/dao-phay-cau/DaoPhayCau.vue")
        },
        {
          path: "san-pham/dao-phay-ngon",
          name: "pageSPDaoPhayNgon",
          component: () => import("@/views/san-pham/dao-phay-ngon/DaoPhayNgon.vue")
        },
        {
          path: "san-pham/bau-kep",
          name: "pageSPBauKep",
          component: () => import("@/views/san-pham/bau-kep/BauKep.vue")
        }
      ]
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/views/NotFound.vue")
    }
  ]
});

export default router;
