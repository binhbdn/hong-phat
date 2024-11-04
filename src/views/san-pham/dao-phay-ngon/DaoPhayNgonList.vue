<script setup>
import { useI18n } from "vue-i18n-lite";
import DaoPhayItem from "@/views/san-pham/dao-phay/DaoPhayItem.vue";
import items from "@/stores/daoPhayNgon";

defineProps({
  showAll: {
    type: Boolean,
    default: true
  }
});

const { current } = useI18n();
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
    <DaoPhayItem
      v-for="item in items"
      v-show="showAll || item.isTypical"
      :key="item.code"
      :name="item.name[current]"
      :description="item.description[current]"
      :item="item"
      @click="
        $router.push({
          name: 'pDaoPhayNgonCT',
          params: { code: item.code }
        })
      "
    />
  </div>
</template>
