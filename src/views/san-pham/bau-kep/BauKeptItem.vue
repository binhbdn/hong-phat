<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n-lite";

import ProductItem from "@/components/ProductItem.vue";
import BauKepItemRibbon from "@/views/san-pham/bau-kep/BauKepItemRibbon.vue";
import BauKepItemDetails from "@/views/san-pham/bau-kep/BauKepItemDetails.vue";

const { current } = useI18n();

defineProps({
  viewDetails: Boolean,
  item: Object
});
defineEmits(["changeOrderQuantity"]);

const orderQuantity = ref(0);
</script>

<template>
  <ProductItem :viewDetails="viewDetails" :item="item" :orderQuantity="orderQuantity" @changeOrderQuantity="$emit('changeOrderQuantity', $event)">
    <template #ribbon>
      <BauKepItemRibbon :item="item" />
    </template>
    <BauKepItemDetails :description="item.description[current]" :item="item" />
  </ProductItem>
</template>
