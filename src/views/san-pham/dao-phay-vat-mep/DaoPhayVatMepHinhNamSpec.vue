<script setup>
import { ref } from "vue";
import { getSpecDLAByCode } from "@/stores/daoPhayVatMep";
import DaoPhayTableDDLA from "@/views/san-pham/dao-phay/DaoPhayTableDDLA.vue";
import SortButton from "@/views/san-pham/components/SortButton.vue";

const props = defineProps(["code"]);

const list = getSpecDLAByCode(props.code);
const sortable = ref(false);
</script>

<template>
  <div class="xl:max-w-[88%] text-[13px]/5 sm:text-sm/[22px] text-gray-600 mt-3 sm:mt-5">
    <div class="font-bold text-sm text-gray-900">{{ $t("specifications") }}</div>

    <img src="/svg/end_mills/counter_sink.svg" class="mx-auto mt-2" />

    <SortButton v-model:sortable="sortable" />
    <DaoPhayTableDDLA :showCuttingLength="false" :value="list" :sortable="sortable" />
  </div>
</template>
