<script setup>
import { ref, onMounted } from "vue";
import { getItemByCode } from "@/stores/daoPhayRTrong";
import PageHasTitle from "@/components/PageHasTitle.vue";
import ProductNotFound from "@/components/ProductNotFound.vue";
import DaoPhayBasicInfo from "@/views/san-pham/dao-phay/DaoPhayBasicInfo.vue";
import DaoPhayRTrongSpec from "@/views/san-pham/dao-phay-r-trong/DaoPhayRTrongSpec.vue";

const props = defineProps(["code"]);
const item = ref(null);

onMounted(() => {
  item.value = getItemByCode(props.code);
});
</script>

<template>
  <PageHasTitle>
    <template v-if="item">
      <DaoPhayBasicInfo :item="item" />
      <DaoPhayRTrongSpec :code="code" />
    </template>

    <ProductNotFound v-else :code="code" />
  </PageHasTitle>
</template>
