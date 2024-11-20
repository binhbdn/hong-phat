<script setup>
import { ref, onMounted } from "vue";
import { isDesktop } from "@/composable/layout";
import { getSpecByCode } from "@/stores/daoPhayNgon";

const props = defineProps(["code"]);
const list = ref(null);
const sortable = ref(false);

onMounted(() => {
  list.value = getSpecByCode(props.code);
});
</script>

<template>
  <div class="xl:max-w-[88%] text-xs/[18px] sm:text-[13px]/[22px] text-gray-600 mt-3 sm:mt-5">
    <div class="font-bold text-sm text-gray-900">{{ $t("specifications") }}</div>
    <img src="/svg/end_mills/square.svg" width="300" class="mx-auto mt-2" />
    <div class="flex justify-end my-1.5">
      <div
        v-tooltip.left="sortable ? $t('hideSortButtons') : $t('showSortButtons')"
        class="w-6 h-6 flex justify-center items-center text-gray-700 hover:text-primary bg-gray-200 hover:bg-primary hover:bg-opacity-20 rounded-md cursor-pointer z-10"
        :class="sortable ? 'bg-primary/20 text-primary/70' : 'text-gray-700'"
        @click="sortable = !sortable"
      >
        <i class="pi" :class="sortable ? 'pi-sort-alt-slash' : 'pi-sort-alt'" />
      </div>
    </div>

    <DataTable
      v-if="list"
      :value="list"
      dataKey="code"
      showGridlines
      stripedRows
      rowHover
      paginator
      removableSort
      :rows="10"
      :size="isDesktop ? null : 'small'"
    >
      <Column field="code" :header="$t('productCode')" headerClass="whitespace-nowra"> </Column>
      <Column field="bladeDiameter" :sortable="sortable">
        <template #header>
          <div class="block sm:hidden">D<sub>1</sub></div>
          <div class="hidden sm:block">{{ $t("bladeDiameter") }} D<sub>1</sub></div>
        </template>
      </Column>
      <Column field="handleDiameter" :sortable="sortable">
        <template #header>
          <div class="block sm:hidden">D</div>
          <div class="hidden sm:block">{{ $t("handleDiameter") }} D</div>
        </template>
      </Column>
      <Column field="cuttingLength">
        <template #header>
          <div class="block sm:hidden">L<sub>1</sub></div>
          <div class="hidden sm:block">{{ $t("cuttingLength") }} L<sub>1</sub></div>
        </template>
      </Column>
      <Column field="overallLength" :sortable="sortable">
        <template #header>
          <div class="block sm:hidden">L</div>
          <div class="hidden sm:block">{{ $t("overallLength") }} L</div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>
