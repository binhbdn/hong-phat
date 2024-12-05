<script setup>
import AppSubMenu from "./AppSubMenu.vue";

const model = [
  {
    label: "group",
    items: [
      {
        label: "home",
        icon: "pi pi-home",
        to: "/"
      }
    ]
  },
  {
    label: "group",
    items: [
      {
        label: "pTimKiem",
        icon: "pi pi-search",
        to: "/san-pham/tim-kiem"
      }
    ]
  },
  {
    label: "group",
    items: [
      {
        label: "productCategories",
        icon: "pi pi-database",
        class: "active-no-toggler",
        autoGoTo: { name: "pHome", query: { view: "san-pham" } },
        items: [
          {
            label: "pDaoPhay",
            autoGoTo: { name: "pDaoPhay" },
            items: [
              {
                label: "pDaoPhayNgon",
                to: "/san-pham/dao-phay-ngon"
              },
              {
                label: "pDaoPhayCau",
                to: "/san-pham/dao-phay-cau"
              },
              {
                label: "pDaoPhayVatMep",
                to: "/san-pham/dao-phay-vat-mep"
              },
              {
                label: "pDaoPhayBoGoc",
                to: "/san-pham/dao-phay-bo-goc"
              },
              {
                label: "pDaoPhayRTrong",
                to: "/san-pham/dao-phay-r-trong"
              },
              {
                label: "pDaoPhayPhaTho",
                to: "/san-pham/dao-phay-pha-tho"
              }
            ]
          },
          {
            label: "pBauKep",
            to: "/san-pham/bau-kep"
          },
          {
            label: "pCollet",
            to: "/san-pham/collet"
          },
          {
            label: "pPhuKienBauKep",
            to: "/san-pham/phu-kien-bau-kep"
          },
          {
            label: "pManhDao",
            autoGoTo: { name: "pManhDao" },
            items: [
              {
                label: "pManhDaoGCGang",
                to: "/san-pham/manh-dao-gia-cong-gang"
              },
              {
                label: "pManhDaoGCSauNhiet",
                to: "/san-pham/manh-dao-gia-cong-sau-nhiet"
              },
              {
                label: "pManhDaoTienRanhRen",
                to: "/san-pham/manh-dao-tien-ranh-ren"
              },
              {
                label: "pManhDaoGCNhom",
                to: "/san-pham/manh-dao-gia-cong-nhom"
              },
              {
                label: "pManhDaoGCSatThepInox",
                to: "/san-pham/manh-dao-gia-cong-sat-thep-inox"
              },
              {
                label: "pManhDaoTaoBongNhom",
                to: "/san-pham/manh-dao-tao-bong-nhom"
              }
            ]
          },
          {
            label: "pCanDaoGanManh",
            to: "/san-pham/can-dao-gan-manh"
          },
          {
            label: "pTaro",
            to: "/san-pham/taro"
          },
          {
            label: "pDuongKiemRen",
            to: "/san-pham/duong-kiem-ren"
          },
          {
            label: "pETo",
            to: "/san-pham/e-to"
          },
          {
            label: "pGiaCongLo",
            to: "/san-pham/gia-cong-lo"
          },
          {
            label: "pBoCanDem",
            to: "/san-pham/bo-can-dem-can-mau-ga-kep"
          },
          {
            label: "pDauDoTamPhoi",
            to: "/san-pham/dau-do-tam-phoi"
          },
          {
            label: "pGotBavia",
            to: "/san-pham/dung-cu-got-bavia"
          }
        ]
      }
    ]
  }
];
</script>

<template>
  <AppSubMenu :model="model" />
</template>
