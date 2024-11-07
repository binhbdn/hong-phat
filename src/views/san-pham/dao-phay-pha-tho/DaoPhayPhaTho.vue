<script setup>
import { viewDetails } from "@/stores/listPage";
import ProductsListLayout from "@/views/san-pham/components/ProductsListLayout.vue";
import DaoPhayPhaThoList from "@/views/san-pham/dao-phay-pha-tho/DaoPhayPhaThoList.vue";
</script>

<template>
  <ProductsListLayout>
    <DaoPhayPhaThoList :viewDetails="viewDetails" />
  </ProductsListLayout>
</template>
