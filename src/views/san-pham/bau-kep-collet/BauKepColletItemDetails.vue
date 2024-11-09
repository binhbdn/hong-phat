<script setup>
import { formatNumber } from "@/library/helper";

defineProps({
  description: String,
  item: Object
});
</script>

<template>
  <div class="flex-grow font-medium leading-4 text-gray-900">
    {{ description }}
  </div>
  <div class="flex justify-between gap-x-1">
    {{ $t("runout") }}:
    <span class="font-medium text-gray-900"> {{ item.runout }}mm </span>
  </div>
  <div class="flex justify-between gap-x-1">
    {{ $t("maxSpeed") }}:
    <span class="font-medium text-gray-900"> {{ formatNumber(item.maxRPM) }} {{ $t("rpm") }} </span>
  </div>
  <div class="flex justify-between gap-x-1">
    {{ $t("brand") }}:
    <span class="font-medium text-gray-900"> {{ item.brand }} </span>
  </div>
</template>
