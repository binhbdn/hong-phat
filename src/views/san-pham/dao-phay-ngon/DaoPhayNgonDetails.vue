<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n-lite";
import { getItemByCode } from "@/stores/daoPhayNgon";
import PageHasTitle from "@/components/PageHasTitle.vue";
import ProductImages from "@/components/ProductImages.vue";

const props = defineProps(["code"]);
const { current } = useI18n();
const item = ref(null);

onMounted(() => {
  item.value = getItemByCode(props.code);
});
</script>

<template>
  <PageHasTitle>
    <div v-if="item" class="flex flex-col sm:flex-row gap-3">
      <div class="sm:w-1/2">
        <ProductImages :images="item.images" />
      </div>
      <div class="sm:w-1/2">
        <div class="font-bold text-base">
          {{ item.name[current] }}
        </div>
      </div>
    </div>

    <div v-else class="text-xs sm:text-[13px]/5 text-gray-600 bg-white rounded-lg shadow-lg p-2 sm:p-3">
      {{ $t("noProductWithCode") }}
      <strong class="text-red-500">
        {{ code }}
      </strong>
    </div>
  </PageHasTitle>
</template>
