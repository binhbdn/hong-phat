<script setup>
import { ref } from "vue";
import { getSpecByCode } from "@/stores/daoPhayCau";
import DaoPhayTableRDL from "@/views/san-pham/dao-phay/DaoPhayTableRDL.vue";
import SortBtn from "@/views/san-pham/cmps/SortBtn.vue";

const props = defineProps(["code"]);

const list = getSpecByCode(props.code);
const sortable = ref(false);
</script>

<template>
  <div>
    <div class="hp-h1">{{ $t("specifications") }}</div>

    <img src="/svg/end_mills/ball_2f.svg" class="mx-auto mt-2" />

    <SortBtn v-model:sortable="sortable" />
    <DaoPhayTableRDL :value="list" :sortable="sortable" />
  </div>
</template>
