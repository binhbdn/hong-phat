<script setup>
import { ref } from "vue";
import { getSpecByCode } from "@/stores/daoPhayBoGoc";
import DaoPhayTableDRDL from "@/views/san-pham/dao-phay/DaoPhayTableDRDL.vue";
import SortButton from "@/views/san-pham/components/SortButton.vue";

const props = defineProps(["code"]);

const list = getSpecByCode(props.code);
const sortable = ref(false);
</script>

<template>
  <div>
    <div class="font-bold text-sm sm:text-base text-gray-900">{{ $t("specifications") }}</div>

    <img src="/svg/end_mills/rounded_edge_square_4f.svg" class="mx-auto mt-2" />

    <SortButton v-model:sortable="sortable" />
    <DaoPhayTableDRDL :value="list" :sortable="sortable" />
  </div>
</template>
