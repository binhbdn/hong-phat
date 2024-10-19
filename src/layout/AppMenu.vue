<script setup>
import AppSubMenu from "./AppSubMenu.vue";

const model = [
  {
    label: "menuGroup",
    items: [
      {
        label: "menuHome",
        icon: "pi pi-home",
        to: "/"
      }
    ]
  },
  {
    label: "menuGroup",
    items: [
      {
        label: "pageSPTimKiem",
        icon: "pi pi-search",
        to: "/san-pham/tim-kiem"
      }
    ]
  },
  {
    label: "menuGroup",
    items: [
      {
        label: "menuAllProducts",
        icon: "pi pi-box",
        items: [
          {
            label: "menuMillingCutter",
            items: [
              {
                label: "pageSPDaoPhayCau",
                to: "/san-pham/dao-phay-cau"
              },
              {
                label: "pageSPDaoPhayNgon",
                to: "/san-pham/dao-phay-ngon"
              }
            ]
          },
          {
            label: "pageSPBauKep",
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
