<script setup>
defineProps({
  description: String,
  item: Object
});
</script>

<template>
  <div class="flex-grow font-medium leading-4 text-gray-900">
    {{ description }}
  </div>
  <div v-if="item.cutStyle === 'csBall'" class="flex justify-between gap-x-1">
    {{ $t("bladeRadius") }}:
    <span class="font-medium text-gray-900">
      {{ `R${item.bladeRadius.min}-R${item.bladeRadius.max}` }}
    </span>
  </div>
  <div v-else class="flex justify-between gap-x-1">
    {{ $t("bladeDiameter") }}:
    <span class="font-medium text-gray-900">
      {{ `d${item.bladeDiameter.min}-d${item.bladeDiameter.max}` }}
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
</template>
