<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n-lite";

import ProductItem from "@/components/ProductItem.vue";
import ProductRibbon from "@/components/ProductRibbon.vue";
import DaoPhayItemDetails from "@/views/san-pham/dao-phay/DaoPhayItemDetails.vue";

const { current } = useI18n();

const props = defineProps({
  viewDetails: Boolean,
  item: Object
});
defineEmits(["changeOrderQuantity"]);

const orderQuantity = ref(0);

const ribbonSpecs = computed(() =>
  props.item.cutStyle === "csBall" || props.item.cutStyle === "csCornerRounding"
    ? `R${props.item.bladeRadius.min}-R${props.item.bladeRadius.max}`
    : `D${props.item.bladeDiameter.min}-D${props.item.bladeDiameter.max}`
);
</script>

<template>
  <ProductItem :viewDetails="viewDetails" :item="item" :orderQuantity="orderQuantity" @changeOrderQuantity="$emit('changeOrderQuantity', $event)">
    <template #ribbon>
      <img v-show="!orderQuantity" :src="`/svg/flutes/${item.flutes}.svg`" class="h-6 absolute bottom-2 right-2" />
      <ProductRibbon :seri="item.hardness" :specs="ribbonSpecs" />
    </template>
    <DaoPhayItemDetails :description="item.description[current]" :item="item" />
  </ProductItem>
</template>
