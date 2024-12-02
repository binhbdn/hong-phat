<script setup>
import AppSubMenu from "./AppSubMenu.vue";

const onClickProductCategories = () => {
  window.$router.push({ name: "pHome", query: { view: "san-pham" } });
};

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
        command: onClickProductCategories,
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
