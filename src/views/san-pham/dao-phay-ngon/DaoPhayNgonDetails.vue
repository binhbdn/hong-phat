<script setup>
import { ref, onMounted } from "vue";
import { getItemByCode } from "@/stores/daoPhayNgon";
import PageHasTitle from "@/components/PageHasTitle.vue";
import ProductNotFound from "@/components/ProductNotFound.vue";
import DaoPhayDetails from "@/views/san-pham/dao-phay/DaoPhayDetails.vue";
import DaoPhayNgonSpec from "@/views/san-pham/dao-phay-ngon/DaoPhayNgonSpec.vue";

const props = defineProps(["code"]);
const item = ref(null);

onMounted(() => {
  item.value = getItemByCode(props.code);
});
</script>

<template>
  <PageHasTitle>
    <template v-if="item">
      <DaoPhayDetails :item="item" />
      <DaoPhayNgonSpec :code="code" :flutes="item.flutes" />
    </template>

    <ProductNotFound v-else :code="code" />
  </PageHasTitle>
</template>
