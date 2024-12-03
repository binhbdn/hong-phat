<script setup>
import DaoPhayItem from "@/views/san-pham/dao-phay/cmps/DaoPhayItem.vue";
import items from "@/stores/daoPhay/daoPhayVatMep";

defineProps({
  viewDetails: Boolean,
  showAll: {
    type: Boolean,
    default: true
  }
});
</script>

<template>
  <div :class="viewDetails ? 'hp-list-grid' : 'hp-list-flex'">
    <DaoPhayItem v-for="item in items" :key="item.code" :visible="showAll || item.isTypical" :viewDetails="viewDetails" :item="item" />
    <slot name="last" />
  </div>
</template>
