<script setup>
import AppSubMenu from "./AppSubMenu.vue";

const model = [
  {
    icon: "pi pi-home",
    items: [
      {
        label: "Quản lý sản phẩm",
        icon: "pi pi-fw pi-home",
        to: "/products"
      }
    ]
  }
];
</script>

<template>
  <AppSubMenu :model="model" />
</template>
