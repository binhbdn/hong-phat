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
        label: "allProducts",
        icon: "pi pi-box",
        items: [
          {
            label: "pDaoPhay",
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
            label: "pBauKepCollet",
            to: "/san-pham/bau-kep-collet"
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
