<script setup>
import ProductItem from "@/components/ProductItem.vue";

defineProps({
  visible: Boolean,
  viewDetails: Boolean,
  item: Object
});
</script>

<template>
  <ProductItem :visible="visible" :viewDetails="viewDetails" :item="item">
    <template #extraImg="{ data, quantity }">
      <img v-show="!quantity" :src="`/svg/flutes/${data.flutes}.svg`" class="h-6 absolute bottom-6 right-2" />
    </template>
  </ProductItem>
</template>
