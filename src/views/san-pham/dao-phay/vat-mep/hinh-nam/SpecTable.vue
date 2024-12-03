<script setup>
import { ref } from "vue";
import { getSpecDLAByCode } from "@/stores/daoPhay/daoPhayVatMep";
import DaoPhayTableDDLA from "@/views/san-pham/dao-phay/cmps/DaoPhayTableDDLA.vue";
import SortBtn from "@/views/san-pham/cmps/SortBtn.vue";

const props = defineProps(["code"]);

const list = getSpecDLAByCode(props.code);
const sortable = ref(false);
</script>

<template>
  <div>
    <div class="hp-h1">{{ $t("specifications") }}</div>

    <img src="/svg/end_mills/counter_sink.svg" class="mx-auto mt-2" />

    <SortBtn v-model:sortable="sortable" />
    <DaoPhayTableDDLA :showCuttingLength="false" :value="list" :sortable="sortable" />
  </div>
</template>
