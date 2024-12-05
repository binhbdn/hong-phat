<script setup>
import DaoPhayItem from "@/views/san-pham/dao-phay/cmps/DaoPhayItem.vue";
import { daoPhayList } from "@/stores/daoPhay";

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
    <DaoPhayItem v-for="item in daoPhayList" :key="item.code" :visible="showAll || item.isTypical" :viewDetails="viewDetails" :item="item" />
  </div>
</template>
