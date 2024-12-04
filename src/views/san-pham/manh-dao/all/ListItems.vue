<script setup>
import ProductItem from "@/components/ProductItem.vue";
import { manhDaoList } from "@/stores/manhDao";

defineProps({
  viewDetails: Boolean,
  showAll: {
    type: Boolean,
    default: true
  }
});
</script>

<template>
  <div :class="viewDetails ? 'hp-list-grid' : 'hp-list-flex'">
    <ProductItem v-for="item in manhDaoList" :key="item.code" :visible="showAll || item.isTypical" :viewDetails="viewDetails" :item="item" />

    <slot name="last" />
  </div>
</template>
