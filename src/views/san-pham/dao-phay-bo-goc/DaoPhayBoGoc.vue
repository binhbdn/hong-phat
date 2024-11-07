<script setup>
import { viewDetails } from "@/stores/listPage";
import ProductsListLayout from "@/views/san-pham/components/ProductsListLayout.vue";
import DaoPhayBoGocList from "@/views/san-pham/dao-phay-bo-goc/DaoPhayBoGocList.vue";
</script>

<template>
  <ProductsListLayout>
    <DaoPhayBoGocList :viewDetails="viewDetails" />
  </ProductsListLayout>
</template>
