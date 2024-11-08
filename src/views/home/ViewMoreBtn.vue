<script setup>
import { viewDetails } from "@/stores/homeCategory";
defineProps({
  showAll: Boolean
});
defineEmits(["update:showAll"]);
</script>

<template>
  <div :class="[viewDetails ? 'h-fit self-end justify-self-end md:justify-self-start' : 'w-full sm:w-auto justify-end items-end', showAll ? 'hidden' : 'flex']">
    <PrimeButton :label="$t('viewMore')" outlined severity="info" class="h-fit text-xs/none px-2 py-1.5" @click="$emit('update:showAll', true)" />
  </div>
</template>
