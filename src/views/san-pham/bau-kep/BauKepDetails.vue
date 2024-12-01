<script setup>
import { ref, onMounted } from "vue";
import { getItemByCode } from "@/stores/bauKep";
import PageHasTitle from "@/components/PageHasTitle.vue";
import ProductNotFound from "@/components/ProductNotFound.vue";
import ProductDetails from "@/components/ProductDetails.vue";
import BauKepSpecImages from "@/views/san-pham/bau-kep/BauKepSpecImages.vue";

const props = defineProps(["code"]);
const item = ref(null);

onMounted(() => {
  item.value = getItemByCode(props.code);
});
</script>

<template>
  <PageHasTitle>
    <div v-if="item" class="hp-pagedetails-layout hp-textstyle">
      <ProductDetails :item="item" />
      <BauKepSpecImages :images="item.specImages" />
    </div>

    <ProductNotFound v-else :code="code" />
  </PageHasTitle>
</template>
