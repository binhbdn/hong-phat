<script setup>
import ProductItem from "@/components/ProductItem.vue";

defineProps({
  viewDetails: Boolean,
  name: String,
  description: String,
  item: Object,
  orderQuantity: Number
});
defineEmits(["changeOrderQuantity"]);
</script>

<template>
  <ProductItem
    :viewDetails="viewDetails"
    :name="name"
    :imgSrc="item.imgSrc"
    :orderQuantity="orderQuantity"
    @changeOrderQuantity="$emit('changeOrderQuantity', $event)"
  >
    <template #icons>
      <img v-show="!orderQuantity" :src="`/svg/flutes/${item.flutes}.svg`" class="h-6 absolute bottom-2 right-2" />
    </template>

    <div v-if="viewDetails" class="w-0 flex-grow flex flex-col leading-4 xl:leading-5">
      <div class="flex-grow font-medium leading-4 text-gray-900">
        {{ description }}
      </div>
      <div v-if="item?.bladeDiameter" class="flex justify-between gap-x-1">
        {{ $t("bladeDiameter") }}:
        <span class="font-medium text-gray-900">
          {{ `d${item.bladeDiameter.min}-d${item.bladeDiameter.max}` }}
        </span>
      </div>
      <div v-else class="flex justify-between gap-x-1">
        {{ $t("bladeRadius") }}:
        <span class="font-medium text-gray-900">
          {{ `R${item.bladeRadius.min}-R${item.bladeRadius.max}` }}
        </span>
      </div>
      <div class="flex justify-between gap-x-1">
        {{ $t("handleDiameter") }}:
        <span class="font-medium text-gray-900">
          {{ `D${item.handleDiameter.min}-D${item.handleDiameter.max}` }}
        </span>
      </div>
      <div class="flex justify-between gap-x-1">
        {{ $t("origin") }}:
        <span class="font-medium text-gray-900"> {{ $t("cn") }} </span>
      </div>
    </div>
  </ProductItem>
</template>
