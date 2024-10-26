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
                label: "pDaoPhayCau",
                to: "/san-pham/dao-phay-cau"
              },
              {
                label: "pDaoPhayBoGoc",
                to: "/san-pham/dao-phay-bo-goc"
              },
              {
                label: "pDaoPhayNgon",
                to: "/san-pham/dao-phay-ngon"
              },
              {
                label: "pDaoPhayPhaTho",
                to: "/san-pham/dao-phay-pha-tho"
              },
              {
                label: "pDaoPhayRTrong",
                to: "/san-pham/dao-phay-r-trong"
              },
              {
                label: "pDaoPhayVatMep",
                to: "/san-pham/dao-phay-vat-mep"
              }
            ]
          },
          {
            label: "pBauKep",
            to: "/san-pham/bau-kep"
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
