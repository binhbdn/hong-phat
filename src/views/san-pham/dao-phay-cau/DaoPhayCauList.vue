<script setup>
import { useI18n } from "vue-i18n-lite";
import DaoPhayItem from "@/views/san-pham/dao-phay/DaoPhayItem.vue";
import items from "@/stores/daoPhayCau";

defineProps({
  viewDetails: Boolean,
  showAll: {
    type: Boolean,
    default: true
  }
});

const { current } = useI18n();
</script>

<template>
  <div :class="viewDetails ? 'grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 sm:p-0.5' : 'flex gap-x-2 gap-y-3 flex-wrap'">
    <DaoPhayItem
      v-for="item in items"
      v-show="showAll || item.isTypical"
      :key="item.code"
      :viewDetails="viewDetails"
      :name="item.name[current]"
      :description="item.description[current]"
      :item="item"
      @click="
        $router.push({
          name: 'pDaoPhayCauCT',
          params: { code: item.code }
        })
      "
    />
    <slot name="last" />
  </div>
</template>
