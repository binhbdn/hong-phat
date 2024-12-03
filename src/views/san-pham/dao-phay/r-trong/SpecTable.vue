<script setup>
import { ref } from "vue";
import { getSpecByCode } from "@/stores/daoPhay/daoPhayRTrong";
import { imgServer } from "@/config";
import DaoPhayTableRDL from "@/views/san-pham/dao-phay/cmps/DaoPhayTableRDL.vue";
import SortBtn from "@/views/san-pham/cmps/SortBtn.vue";

const props = defineProps(["code"]);

const list = getSpecByCode(props.code);
const sortable = ref(false);
</script>

<template>
  <div>
    <div class="hp-h1">{{ $t("specifications") }}</div>

    <img :src="`${imgServer}/dao_phay_r_trong/corner_rounding.webp`" class="mx-auto mt-2" />

    <SortBtn v-model:sortable="sortable" />
    <DaoPhayTableRDL :value="list" :sortable="sortable" />
  </div>
</template>
