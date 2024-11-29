<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n-lite";

import ProductItem from "@/components/ProductItem.vue";
import DaoPhayItemDetails from "@/views/san-pham/dao-phay/DaoPhayItemDetails.vue";

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
    <template #imgExtra>
      <img v-show="!orderQuantity" :src="`/svg/flutes/${item.flutes}.svg`" class="h-6 absolute bottom-2 right-2" />
    </template>
    <DaoPhayItemDetails :description="item.description[current]" :item="item" />
  </ProductItem>
</template>
