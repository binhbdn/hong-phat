<script setup>
import { ref, onMounted } from "vue";
import { getItemByCode } from "@/stores/phuKienBauKep";
import PageHasTitle from "@/components/PageHasTitle.vue";
import ProductNotFound from "@/components/ProductNotFound.vue";
import ProductDetails from "@/components/ProductDetails.vue";

const props = defineProps(["code"]);
const item = ref(null);

onMounted(() => {
  item.value = getItemByCode(props.code);
});
</script>

<template>
  <PageHasTitle :title="$t('productDetails')">
    <div v-if="item" class="hp-pagedetails-layout hp-textstyle">
      <ProductDetails :item="item" />
    </div>

    <ProductNotFound v-else :code="code" />
  </PageHasTitle>
</template>
