<script setup>
import { viewDetails } from "@/stores/listPage";
import ProductsListLayout from "@/views/san-pham/components/ProductsListLayout.vue";
import ColletList from "@/views/san-pham/collet/ColletList.vue";
</script>

<template>
  <ProductsListLayout>
    <ColletList :viewDetails="viewDetails" />
  </ProductsListLayout>
</template>
