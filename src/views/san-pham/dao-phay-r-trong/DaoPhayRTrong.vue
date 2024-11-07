<script setup>
import { viewDetails } from "@/stores/listPage";
import ProductsListLayout from "@/views/san-pham/components/ProductsListLayout.vue";
import DaoPhayRTrongList from "@/views/san-pham/dao-phay-r-trong/DaoPhayRTrongList.vue";
</script>

<template>
  <ProductsListLayout>
    <DaoPhayRTrongList :viewDetails="viewDetails" />
  </ProductsListLayout>
</template>
