<script setup>
import { ref, onMounted } from "vue";
import { getItemByCode } from "@/stores/daoPhayBoGoc";
import PageHasTitle from "@/components/PageHasTitle.vue";
import ProductNotFound from "@/components/ProductNotFound.vue";
import DaoPhayDetails from "@/views/san-pham/dao-phay/DaoPhayDetails.vue";
import DaoPhayBoGocSpec from "@/views/san-pham/dao-phay-bo-goc/DaoPhayBoGocSpec.vue";

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
      <DaoPhayBoGocSpec :code="code" />
    </div>

    <ProductNotFound v-else :code="code" />
  </PageHasTitle>
</template>
