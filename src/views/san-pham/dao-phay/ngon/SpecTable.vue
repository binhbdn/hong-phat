<script setup>
import { ref } from "vue";
import { getSpecByCode } from "@/stores/daoPhay/daoPhayNgon";
import DaoPhayTableDDL from "@/views/san-pham/dao-phay/cmps/DaoPhayTableDDL.vue";
import SortBtn from "@/views/san-pham/cmps/SortBtn.vue";

const props = defineProps(["code", "flutes"]);

const list = getSpecByCode(props.code);
const sortable = ref(false);
</script>

<template>
  <div>
    <div class="hp-h1">{{ $t("specifications") }}</div>

    <img v-if="flutes === 2" src="/svg/end_mills/square_2f.svg" class="mx-auto mt-2" />
    <img v-else-if="flutes === 3" src="/svg/end_mills/square_3f.svg" class="mx-auto mt-2" />
    <img v-else src="/svg/end_mills/square_4f.svg" class="mx-auto mt-2" />

    <SortBtn v-model:sortable="sortable" />
    <DaoPhayTableDDL :value="list" :sortable="sortable" />
  </div>
</template>
