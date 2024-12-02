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
          component: () => import("@/views/home/PageHome.vue")
        },
        {
          path: "san-pham/tim-kiem",
          name: "pTimKiem",
          component: () => import("@/views/san-pham/tim-kiem/PageTimKiem.vue")
        },
        {
          path: "san-pham/dao-phay-ngon",
          name: "pDaoPhayNgon",
          component: () => import("@/views/san-pham/dao-phay-ngon/PageList.vue")
        },
        {
          path: "san-pham/dao-phay-ngon/:code",
          name: "pDaoPhayNgonCT",
          props: (route) => ({ code: route.params.code }),
          component: () => import("@/views/san-pham/dao-phay-ngon/PageDetails.vue")
        },
        {
          path: "san-pham/dao-phay-cau",
          name: "pDaoPhayCau",
          component: () => import("@/views/san-pham/dao-phay-cau/PageList.vue")
        },
        {
          path: "san-pham/dao-phay-cau/:code",
          name: "pDaoPhayCauCT",
          props: (route) => ({ code: route.params.code }),
          component: () => import("@/views/san-pham/dao-phay-cau/PageDetails.vue")
        },
        {
          path: "san-pham/dao-phay-vat-mep",
          name: "pDaoPhayVatMep",
          component: () => import("@/views/san-pham/dao-phay-vat-mep/PageList.vue")
        },
        {
          path: "san-pham/dao-phay-vat-mep/:code",
          name: "pDaoPhayVatMepCT",
          props: (route) => ({ code: route.params.code }),
          component: () => import("@/views/san-pham/dao-phay-vat-mep/PageDetails.vue")
        },
        {
          path: "san-pham/dao-phay-vat-mep-hinh-nam/:code",
          name: "pDaoPhayVatMepHinhNamCT",
          props: (route) => ({ code: route.params.code }),
          component: () => import("@/views/san-pham/dao-phay-vat-mep/hinh-nam/PageDetails.vue")
        },
        {
          path: "san-pham/dao-phay-bo-goc",
          name: "pDaoPhayBoGoc",
          component: () => import("@/views/san-pham/dao-phay-bo-goc/PageList.vue")
        },
        {
          path: "san-pham/dao-phay-bo-goc/:code",
          name: "pDaoPhayBoGocCT",
          props: (route) => ({ code: route.params.code }),
          component: () => import("@/views/san-pham/dao-phay-bo-goc/PageDetails.vue")
        },
        {
          path: "san-pham/dao-phay-r-trong",
          name: "pDaoPhayRTrong",
          component: () => import("@/views/san-pham/dao-phay-r-trong/PageList.vue")
        },
        {
          path: "san-pham/dao-phay-r-trong/:code",
          name: "pDaoPhayRTrongCT",
          props: (route) => ({ code: route.params.code }),
          component: () => import("@/views/san-pham/dao-phay-r-trong/PageDetails.vue")
        },
        {
          path: "san-pham/dao-phay-pha-tho",
          name: "pDaoPhayPhaTho",
          component: () => import("@/views/san-pham/dao-phay-pha-tho/PageList.vue")
        },
        {
          path: "san-pham/dao-phay-pha-tho/:code",
          name: "pDaoPhayPhaThoCT",
          props: (route) => ({ code: route.params.code }),
          component: () => import("@/views/san-pham/dao-phay-pha-tho/PageDetails.vue")
        },
        {
          path: "san-pham/bau-kep",
          name: "pBauKep",
          component: () => import("@/views/san-pham/bau-kep/PageList.vue")
        },
        {
          path: "san-pham/bau-kep/:code",
          name: "pBauKepCT",
          props: (route) => ({ code: route.params.code }),
          component: () => import("@/views/san-pham/bau-kep/PageDetails.vue")
        },
        {
          path: "san-pham/collet",
          name: "pCollet",
          component: () => import("@/views/san-pham/collet/PageList.vue")
        },
        {
          path: "san-pham/collet/:code",
          name: "pColletCT",
          props: (route) => ({ code: route.params.code }),
          component: () => import("@/views/san-pham/collet/PageDetails.vue")
        },
        {
          path: "san-pham/phu-kien-bau-kep",
          name: "pPhuKienBauKep",
          component: () => import("@/views/san-pham/phu-kien-bau-kep/PageList.vue")
        },
        {
          path: "san-pham/phu-kien-bau-kep/:code",
          name: "pPhuKienBauKepCT",
          props: (route) => ({ code: route.params.code }),
          component: () => import("@/views/san-pham/phu-kien-bau-kep/PageDetails.vue")
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
