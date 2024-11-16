<script setup>
import { ref, onMounted } from "vue";
import { getItemByCode } from "@/stores/daoPhayNgon";
import PageHasTitle from "@/components/PageHasTitle.vue";
import ProductImages from "@/components/ProductImages.vue";

const props = defineProps(["code"]);

const item = ref(null);

onMounted(() => {
  item.value = getItemByCode(props.code);
});
</script>

<template>
  <PageHasTitle>
    <template v-if="item">
      <ProductImages :images="item.images" />
    </template>

    <div v-else class="text-xs sm:text-[13px]/5 text-gray-600 bg-white rounded-lg shadow-lg p-2 sm:p-3">
      {{ $t("noProductWithCode") }}
      <strong class="text-red-500">
        {{ code }}
      </strong>
    </div>
  </PageHasTitle>
</template>
