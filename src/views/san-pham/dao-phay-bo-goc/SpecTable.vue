<script setup>
import { ref } from "vue";
import { getSpecByCode } from "@/stores/daoPhayBoGoc";
import DaoPhayTableDRDL from "@/views/san-pham/dao-phay/DaoPhayTableDRDL.vue";
import SortBtn from "@/views/san-pham/cmps/SortBtn.vue";

const props = defineProps(["code"]);

const list = getSpecByCode(props.code);
const sortable = ref(false);
</script>

<template>
  <div>
    <div class="hp-h1">{{ $t("specifications") }}</div>

    <img src="/svg/end_mills/rounded_edge_square_4f.svg" class="mx-auto mt-2" />

    <SortBtn v-model:sortable="sortable" />
    <DaoPhayTableDRDL :value="list" :sortable="sortable" />
  </div>
</template>
