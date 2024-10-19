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
          component: () => import("@/views/Home.vue")
        },

        {
          path: "san-pham/tim-kiem",
          name: "pageSPTimKiem",
          component: () => import("@/views/Home.vue")
        },
        {
          path: "san-pham/dao-phay-cau",
          name: "pageSPDaoPhayCau",
          component: () => import("@/views/Home.vue")
        },
        {
          path: "san-pham/dao-phay-ngon",
          name: "pageSPDaoPhayNgon",
          component: () => import("@/views/Home.vue")
        },
        {
          path: "san-pham/bau-kep",
          name: "pageSPBauKep",
          component: () => import("@/views/Home.vue")
        },

        {
          path: "san-pham/dao-phay-cau",
          name: "pageSanPhamDaoPhayCau",
          meta: {
            pageTitle: "Dao phay cầu"
          },
          component: () => import("@/views/Home.vue")
        },
        {
          path: "san-pham/dao-phay-mui-tron",
          name: "pageSPDaoPhayMuiTron",
          meta: {
            pageTitle: "Dao phay mũi tròn"
          },
          component: () => import("@/views/Home.vue")
        },
        {
          path: "san-pham/bau-kep",
          name: "pageSanPhamBauKep",
          meta: {
            pageTitle: "Bầu kẹp"
          },
          component: () => import("@/views/Home.vue")
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
