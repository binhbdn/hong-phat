<script setup>
import { ref, onMounted } from "vue";
import { getItemByCode } from "@/stores/daoPhayVatMep";
import PageHasTitle from "@/components/PageHasTitle.vue";
import ProductNotFound from "@/components/ProductNotFound.vue";
import DaoPhayDetails from "@/views/san-pham/dao-phay/DaoPhayDetails.vue";
import DaoPhayVatMepSpec from "@/views/san-pham/dao-phay-vat-mep/DaoPhayVatMepSpec.vue";

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
      <DaoPhayVatMepSpec :code="code" />
    </div>

    <ProductNotFound v-else :code="code" />
  </PageHasTitle>
</template>
