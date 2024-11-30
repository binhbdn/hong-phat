<script setup>
import { ref } from "vue";
import { getSpecByCode } from "@/stores/daoPhayRTrong";
import { imgServer } from "@/config";
import DaoPhayTableRDL from "@/views/san-pham/dao-phay/DaoPhayTableRDL.vue";
import SortButton from "@/views/san-pham/components/SortButton.vue";

const props = defineProps(["code"]);

const list = getSpecByCode(props.code);
const sortable = ref(false);
</script>

<template>
  <div>
    <div class="hp-h1">{{ $t("specifications") }}</div>

    <img :src="`${imgServer}/dao_phay_r_trong/corner_rounding.webp`" class="mx-auto mt-2" />

    <SortButton v-model:sortable="sortable" />
    <DaoPhayTableRDL :value="list" :sortable="sortable" />
  </div>
</template>
