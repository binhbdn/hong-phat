<script setup>
import { viewDetails } from "@/stores/listPage";
import ProductsListLayout from "@/views/san-pham/components/ProductsListLayout.vue";
import BauKepList from "@/views/san-pham/bau-kep/BauKepList.vue";
</script>

<template>
  <ProductsListLayout>
    <BauKepList :viewDetails="viewDetails" />
  </ProductsListLayout>
</template>
