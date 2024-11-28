<script setup>
import BauKeptItem from "@/views/san-pham/bau-kep/BauKeptItem.vue";
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
    <BauKeptItem v-for="item in items" v-show="showAll || item.isTypical" :key="item.code" :viewDetails="viewDetails" :item="item" />
    <slot name="last" />
  </div>
</template>
