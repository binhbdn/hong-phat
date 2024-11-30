<script setup>
import { ref, onMounted } from "vue";
import { getItemByCode } from "@/stores/daoPhayCau";
import PageHasTitle from "@/components/PageHasTitle.vue";
import ProductNotFound from "@/components/ProductNotFound.vue";
import DaoPhayDetails from "@/views/san-pham/dao-phay/DaoPhayDetails.vue";
import DaoPhayCauSpec from "@/views/san-pham/dao-phay-cau/DaoPhayCauSpec.vue";

const props = defineProps(["code"]);
const item = ref(null);

onMounted(() => {
  item.value = getItemByCode(props.code);
});
</script>

<template>
  <PageHasTitle>
    <div v-if="item" class="hp-pagedetails-layout hp-textstyle">
      <DaoPhayDetails :item="item" />
      <DaoPhayCauSpec :code="code" />
    </div>

    <ProductNotFound v-else :code="code" />
  </PageHasTitle>
</template>
