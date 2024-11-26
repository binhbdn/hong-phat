<script setup>
import ProductItem from "@/components/ProductItem.vue";
import items from "@/stores/bauKep";

defineProps({
  viewDetails: Boolean,
  showAll: {
    type: Boolean,
    default: true
  }
});
</script>

<template>
  <div :class="viewDetails ? 'grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 sm:p-0.5' : 'flex gap-3 flex-wrap'">
    <ProductItem v-for="item in items" v-show="showAll || item.isTypical" :key="item.code" :viewDetails="viewDetails" :item="item" />
    <slot name="last" />
  </div>
</template>
