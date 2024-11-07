<script setup>
import { viewDetails } from "@/stores/listPage";
import ProductsListLayout from "@/views/san-pham/components/ProductsListLayout.vue";
import DaoPhayVatMepList from "@/views/san-pham/dao-phay-vat-mep/DaoPhayVatMepList.vue";
</script>

<template>
  <ProductsListLayout>
    <DaoPhayVatMepList :viewDetails="viewDetails" />
  </ProductsListLayout>
</template>
