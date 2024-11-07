<script setup>
import { viewDetails } from "@/stores/listPage";
import ProductsListLayout from "@/views/san-pham/components/ProductsListLayout.vue";
import DaoPhayNgonList from "@/views/san-pham/dao-phay-ngon/DaoPhayNgonList.vue";
</script>

<template>
  <ProductsListLayout>
    <DaoPhayNgonList :viewDetails="viewDetails" />
  </ProductsListLayout>
</template>
