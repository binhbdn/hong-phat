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
          name: "pHome",
          props: (route) => ({ view: route.query?.view }),
          component: () => import("@/views/home/Home.vue")
        },
        {
          path: "san-pham/tim-kiem",
          name: "pTimKiem",
          component: () => import("@/views/san-pham/tim-kiem/TimKiem.vue")
        },
        {
          path: "san-pham/dao-phay-ngon",
          name: "pDaoPhayNgon",
          component: () => import("@/views/san-pham/dao-phay-ngon/DaoPhayNgon.vue")
        },
        {
          path: "san-pham/dao-phay-ngon/:code",
          name: "pDaoPhayNgonCT",
          component: () => import("@/views/san-pham/dao-phay-ngon/DaoPhayNgonDetails.vue")
        },
        {
          path: "san-pham/dao-phay-cau",
          name: "pDaoPhayCau",
          component: () => import("@/views/san-pham/dao-phay-cau/DaoPhayCau.vue")
        },
        {
          path: "san-pham/dao-phay-cau/:code",
          name: "pDaoPhayCauCT",
          component: () => import("@/views/san-pham/dao-phay-cau/DaoPhayCauDetails.vue")
        },
        {
          path: "san-pham/dao-phay-vat-mep",
          name: "pDaoPhayVatMep",
          component: () => import("@/views/san-pham/dao-phay-vat-mep/DaoPhayVatMep.vue")
        },
        {
          path: "san-pham/dao-phay-bo-goc",
          name: "pDaoPhayBoGoc",
          component: () => import("@/views/san-pham/dao-phay-bo-goc/DaoPhayBoGoc.vue")
        },
        {
          path: "san-pham/dao-phay-bo-goc/:code",
          name: "pDaoPhayBoGocCT",
          component: () => import("@/views/san-pham/dao-phay-bo-goc/DaoPhayBoGocDetails.vue")
        },
        {
          path: "san-pham/dao-phay-r-trong",
          name: "pDaoPhayRTrong",
          component: () => import("@/views/san-pham/dao-phay-r-trong/DaoPhayRTrong.vue")
        },
        {
          path: "san-pham/dao-phay-r-trong/:code",
          name: "pDaoPhayRTrongCT",
          component: () => import("@/views/san-pham/dao-phay-r-trong/DaoPhayRTrongDetails.vue")
        },
        {
          path: "san-pham/dao-phay-pha-tho",
          name: "pDaoPhayPhaTho",
          component: () => import("@/views/san-pham/dao-phay-pha-tho/DaoPhayPhaTho.vue")
        },
        {
          path: "san-pham/dao-phay-pha-tho/:code",
          name: "pDaoPhayPhaThoCT",
          component: () => import("@/views/san-pham/dao-phay-pha-tho/DaoPhayPhaThoDetails.vue")
        },
        {
          path: "san-pham/bau-kep",
          name: "pBauKep",
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
