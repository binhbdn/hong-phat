<script setup>
import { ref, onMounted } from "vue";
import { getItemByCode } from "@/stores/collet";
import PageHasTitle from "@/components/PageHasTitle.vue";
import ProductNotFound from "@/components/ProductNotFound.vue";

const props = defineProps(["code"]);
const item = ref(null);

onMounted(() => {
  item.value = getItemByCode(props.code);
});
</script>

<template>
  <PageHasTitle>
    <div v-if="item" class="xl:max-w-[88%] flex flex-col gap-y-3 sm:gap-y-5 text-[13px]/5 sm:text-sm/[22px] text-gray-600">
      Chi tiết sản phẩm collet {{ code }}
    </div>

    <ProductNotFound v-else :code="code" />
  </PageHasTitle>
</template>
