<script setup>
import { viewDetails } from "@/stores/listPage";
import ProductsListLayout from "@/views/san-pham/components/ProductsListLayout.vue";
import BauKepColletList from "@/views/san-pham/bau-kep-collet/BauKepColletList.vue";
</script>

<template>
  <ProductsListLayout>
    <BauKepColletList :viewDetails="viewDetails" />
  </ProductsListLayout>
</template>
