<script setup>
import { ref } from "vue";
import { getSpecByCode } from "@/stores/daoPhayPhaTho";
import DaoPhayTableDDL from "@/views/san-pham/dao-phay/DaoPhayTableDDL.vue";
import SortBtn from "@/views/san-pham/cmps/SortBtn.vue";

const props = defineProps(["code", "flutes"]);

const list = getSpecByCode(props.code);
const sortable = ref(false);
</script>

<template>
  <div>
    <div class="hp-h1">{{ $t("specifications") }}</div>

    <img v-if="flutes === 3" src="/svg/end_mills/roughing_3f.svg" class="mx-auto mt-2" />
    <img v-else src="/svg/end_mills/roughing_4f.svg" class="mx-auto mt-2" />

    <SortBtn v-model:sortable="sortable" />
    <DaoPhayTableDDL :value="list" :sortable="sortable" />
  </div>
</template>
