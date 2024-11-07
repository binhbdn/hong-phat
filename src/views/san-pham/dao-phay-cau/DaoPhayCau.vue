<script setup>
import { viewDetails } from "@/stores/listPage";
import ProductsListLayout from "@/views/san-pham/components/ProductsListLayout.vue";
import DaoPhayCauList from "@/views/san-pham/dao-phay-cau/DaoPhayCauList.vue";
</script>

<template>
  <ProductsListLayout>
    <DaoPhayCauList :viewDetails="viewDetails" />
  </ProductsListLayout>
</template>
