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
          path: "san-pham/dao-phay",
          name: "pDaoPhay",
          component: () => import("@/views/san-pham/dao-phay/all/PageList.vue")
        },
        {
          path: "san-pham/dao-phay-ngon",
          name: "pDaoPhayNgon",
          component: () => import("@/views/san-pham/dao-phay/ngon/PageList.vue")
        },
        {
          path: "san-pham/dao-phay/ngon/:code",
          name: "pDaoPhayNgonCT",
          props: (route) => ({ code: route.params.code }),
          component: () => import("@/views/san-pham/dao-phay/ngon/PageDetails.vue")
        },
        {
          path: "san-pham/dao-phay-cau",
          name: "pDaoPhayCau",
          component: () => import("@/views/san-pham/dao-phay/cau/PageList.vue")
        },
        {
          path: "san-pham/dao-phay/cau/:code",
          name: "pDaoPhayCauCT",
          props: (route) => ({ code: route.params.code }),
          component: () => import("@/views/san-pham/dao-phay/cau/PageDetails.vue")
        },
        {
          path: "san-pham/dao-phay-vat-mep",
          name: "pDaoPhayVatMep",
          component: () => import("@/views/san-pham/dao-phay/vat-mep/PageList.vue")
        },
        {
          path: "san-pham/dao-phay/vat-mep/:code",
          name: "pDaoPhayVatMepCT",
          props: (route) => ({ code: route.params.code }),
          component: () => import("@/views/san-pham/dao-phay/vat-mep/PageDetails.vue")
        },
        {
          path: "san-pham/dao-phay-vat-mep-hinh-nam/:code",
          name: "pDaoPhayVatMepHinhNamCT",
          props: (route) => ({ code: route.params.code }),
          component: () => import("@/views/san-pham/dao-phay/vat-mep/hinh-nam/PageDetails.vue")
        },
        {
          path: "san-pham/dao-phay-bo-goc",
          name: "pDaoPhayBoGoc",
          component: () => import("@/views/san-pham/dao-phay/bo-goc/PageList.vue")
        },
        {
          path: "san-pham/dao-phay/bo-goc/:code",
          name: "pDaoPhayBoGocCT",
          props: (route) => ({ code: route.params.code }),
          component: () => import("@/views/san-pham/dao-phay/bo-goc/PageDetails.vue")
        },
        {
          path: "san-pham/dao-phay-r-trong",
          name: "pDaoPhayRTrong",
          component: () => import("@/views/san-pham/dao-phay/r-trong/PageList.vue")
        },
        {
          path: "san-pham/dao-phay/r-trong/:code",
          name: "pDaoPhayRTrongCT",
          props: (route) => ({ code: route.params.code }),
          component: () => import("@/views/san-pham/dao-phay/r-trong/PageDetails.vue")
        },
        {
          path: "san-pham/dao-phay-pha-tho",
          name: "pDaoPhayPhaTho",
          component: () => import("@/views/san-pham/dao-phay/pha-tho/PageList.vue")
        },
        {
          path: "san-pham/dao-phay/pha-tho/:code",
          name: "pDaoPhayPhaThoCT",
          props: (route) => ({ code: route.params.code }),
          component: () => import("@/views/san-pham/dao-phay/pha-tho/PageDetails.vue")
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
        },
        {
          path: "san-pham/manh-dao",
          name: "pManhDao",
          component: () => import("@/views/san-pham/manh-dao/all/PageList.vue")
        },
        {
          path: "san-pham/manh-dao-gia-cong-gang",
          name: "pManhDaoGCGang",
          component: () => import("@/views/san-pham/manh-dao/gia-cong-gang/PageList.vue")
        },
        {
          path: "san-pham/manh-dao-gia-cong-gang/:code",
          name: "pManhDaoGCGangCT",
          props: (route) => ({ code: route.params.code }),
          component: () => import("@/views/san-pham/manh-dao/gia-cong-gang/PageDetails.vue")
        },
        {
          path: "san-pham/manh-dao-gia-cong-sau-nhiet",
          name: "pManhDaoGCSauNhiet",
          component: () => import("@/views/san-pham/manh-dao/gia-cong-sau-nhiet/PageList.vue")
        },
        {
          path: "san-pham/manh-dao-gia-cong-sau-nhiet/:code",
          name: "pManhDaoGCSauNhietCT",
          props: (route) => ({ code: route.params.code }),
          component: () => import("@/views/san-pham/manh-dao/gia-cong-sau-nhiet/PageDetails.vue")
        },
        {
          path: "san-pham/manh-dao-tien-ranh-ren",
          name: "pManhDaoTienRanhRen",
          component: () => import("@/views/san-pham/manh-dao/tien-ranh-ren/PageList.vue")
        },
        {
          path: "san-pham/manh-dao-tien-ranh-ren/:code",
          name: "pManhDaoTienRanhRenCT",
          props: (route) => ({ code: route.params.code }),
          component: () => import("@/views/san-pham/manh-dao/tien-ranh-ren/PageDetails.vue")
        },
        {
          path: "san-pham/manh-dao-gia-cong-nhom",
          name: "pManhDaoGCNhom",
          component: () => import("@/views/san-pham/manh-dao/gia-cong-nhom/PageList.vue")
        },
        {
          path: "san-pham/manh-dao-gia-cong-nhom/:code",
          name: "pManhDaoGCNhomCT",
          props: (route) => ({ code: route.params.code }),
          component: () => import("@/views/san-pham/manh-dao/gia-cong-nhom/PageDetails.vue")
        },
        {
          path: "san-pham/manh-dao-gia-cong-sat-thep-inox",
          name: "pManhDaoGCSatThepInox",
          component: () => import("@/views/san-pham/manh-dao/gia-cong-sat-thep-inox/PageList.vue")
        },
        {
          path: "san-pham/manh-dao-gia-cong-sat-thep-inox/:code",
          name: "pManhDaoGCSatThepInoxCT",
          props: (route) => ({ code: route.params.code }),
          component: () => import("@/views/san-pham/manh-dao/gia-cong-sat-thep-inox/PageDetails.vue")
        },
        {
          path: "san-pham/manh-dao-tao-bong-nhom",
          name: "pManhDaoTaoBongNhom",
          component: () => import("@/views/san-pham/manh-dao/tao-bong-nhom/PageList.vue")
        },
        {
          path: "san-pham/manh-dao-tao-bong-nhom/:code",
          name: "pManhDaoTaoBongNhomCT",
          props: (route) => ({ code: route.params.code }),
          component: () => import("@/views/san-pham/manh-dao/tao-bong-nhom/PageDetails.vue")
        },
        {
          path: "san-pham/can-dao-gan-manh",
          name: "pCanDaoGanManh",
          component: () => import("@/views/san-pham/can-dao-gan-manh/PageList.vue")
        },
        {
          path: "san-pham/can-dao-gan-manh/:code",
          name: "pCanDaoGanManhCT",
          props: (route) => ({ code: route.params.code }),
          component: () => import("@/views/san-pham/can-dao-gan-manh/PageDetails.vue")
        },
        {
          path: "san-pham/taro",
          name: "pTaro",
          component: () => import("@/views/san-pham/taro/PageList.vue")
        },
        {
          path: "san-pham/taro/:code",
          name: "pTaroCT",
          props: (route) => ({ code: route.params.code }),
          component: () => import("@/views/san-pham/taro/PageDetails.vue")
        },
        {
          path: "san-pham/duong-kiem-ren",
          name: "pDuongKiemRen",
          component: () => import("@/views/san-pham/duong-kiem-ren/PageList.vue")
        },
        {
          path: "san-pham/duong-kiem-ren/:code",
          name: "pDuongKiemRenCT",
          props: (route) => ({ code: route.params.code }),
          component: () => import("@/views/san-pham/duong-kiem-ren/PageDetails.vue")
        },
        {
          path: "san-pham/e-to",
          name: "pETo",
          component: () => import("@/views/san-pham/e-to/PageList.vue")
        },
        {
          path: "san-pham/e-to/:code",
          name: "pEToCT",
          props: (route) => ({ code: route.params.code }),
          component: () => import("@/views/san-pham/e-to/PageDetails.vue")
        },
        {
          path: "san-pham/gia-cong-lo",
          name: "pGiaCongLo",
          component: () => import("@/views/san-pham/gia-cong-lo/PageList.vue")
        },
        {
          path: "san-pham/gia-cong-lo/:code",
          name: "pGiaCongLoCT",
          props: (route) => ({ code: route.params.code }),
          component: () => import("@/views/san-pham/gia-cong-lo/PageDetails.vue")
        },
        {
          path: "san-pham/bo-can-dem-can-mau-ga-kep",
          name: "pBoCanDem",
          component: () => import("@/views/san-pham/bo-can-dem-can-mau-ga-kep/PageList.vue")
        },
        {
          path: "san-pham/bo-can-dem-can-mau-ga-kep/:code",
          name: "pBoCanDemCT",
          props: (route) => ({ code: route.params.code }),
          component: () => import("@/views/san-pham/bo-can-dem-can-mau-ga-kep/PageDetails.vue")
        },
        {
          path: "san-pham/dau-do-tam-phoi",
          name: "pDauDoTamPhoi",
          component: () => import("@/views/san-pham/dau-do-tam-phoi/PageList.vue")
        },
        {
          path: "san-pham/dau-do-tam-phoi/:code",
          name: "pDauDoTamPhoiCT",
          props: (route) => ({ code: route.params.code }),
          component: () => import("@/views/san-pham/dau-do-tam-phoi/PageDetails.vue")
        },
        {
          path: "san-pham/dung-cu-got-bavia",
          name: "pGotBavia",
          component: () => import("@/views/san-pham/dung-cu-got-bavia/PageList.vue")
        },
        {
          path: "san-pham/dung-cu-got-bavia/:code",
          name: "pGotBaviaCT",
          props: (route) => ({ code: route.params.code }),
          component: () => import("@/views/san-pham/dung-cu-got-bavia/PageDetails.vue")
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
