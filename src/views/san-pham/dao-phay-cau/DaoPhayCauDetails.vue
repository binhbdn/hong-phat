<script setup>
import { ref, onMounted } from "vue";
import { getItemByCode } from "@/stores/daoPhayCau";
import PageHasTitle from "@/components/PageHasTitle.vue";
import ProductNotFound from "@/components/ProductNotFound.vue";
import DaoPhayBasicInfo from "@/views/san-pham/dao-phay/DaoPhayBasicInfo.vue";
import DaoPhayCauSpec from "@/views/san-pham/dao-phay-cau/DaoPhayCauSpec.vue";

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
      <DaoPhayCauSpec :code="code" />
    </template>

    <ProductNotFound v-else :code="code" />
  </PageHasTitle>
</template>
