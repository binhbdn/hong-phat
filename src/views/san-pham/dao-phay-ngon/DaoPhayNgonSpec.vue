<script setup>
import { ref } from "vue";
import { getSpecByCode } from "@/stores/daoPhayNgon";
import DaoPhayTableDDL from "@/views/san-pham/dao-phay/DaoPhayTableDDL.vue";
import SortButton from "@/views/san-pham/components/SortButton.vue";

const props = defineProps(["code", "flutes"]);

const list = getSpecByCode(props.code);
const sortable = ref(false);
</script>

<template>
  <div class="xl:max-w-[88%] text-[13px]/5 sm:text-sm/[22px] text-gray-600 mt-3 sm:mt-5">
    <div class="font-bold text-sm text-gray-900">{{ $t("specifications") }}</div>

    <img v-if="flutes === 2" src="/svg/end_mills/square_2f.svg" class="mx-auto mt-2" />
    <img v-else-if="flutes === 3" src="/svg/end_mills/square_3f.svg" class="mx-auto mt-2" />
    <img v-else src="/svg/end_mills/square_4f.svg" class="mx-auto mt-2" />

    <SortButton v-model:sortable="sortable" />
    <DaoPhayTableDDL :value="list" :sortable="sortable" />
  </div>
</template>
