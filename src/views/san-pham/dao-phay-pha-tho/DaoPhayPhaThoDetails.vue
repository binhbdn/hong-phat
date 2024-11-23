<script setup>
import { ref, onMounted } from "vue";
import { getItemByCode } from "@/stores/daoPhayPhaTho";
import PageHasTitle from "@/components/PageHasTitle.vue";
import ProductNotFound from "@/components/ProductNotFound.vue";
import DaoPhayBasicInfo from "@/views/san-pham/dao-phay/DaoPhayBasicInfo.vue";
import DaoPhayPhaThoSpec from "@/views/san-pham/dao-phay-pha-tho/DaoPhayPhaThoSpec.vue";

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
      <DaoPhayPhaThoSpec :code="code" :flutes="item.flutes" />
    </template>

    <ProductNotFound v-else :code="code" />
  </PageHasTitle>
</template>
