<script setup>
import { computed } from "vue";
import { isDesktop } from "@/composable/layout";

const props = defineProps(["value", "sortable"]);

const rows = 10;
const hasMultiplePages = computed(() => props.value.length > rows);
</script>

<template>
  <DataTable
    v-if="value"
    :value="value"
    dataKey="dim"
    showGridlines
    stripedRows
    rowHover
    removableSort
    :paginator="hasMultiplePages"
    :rows="rows"
    :size="isDesktop ? null : 'small'"
  >
    <Column field="dim" :header="$t('dimension')"> </Column>
    <Column field="bladeDiameter" :sortable="sortable">
      <template #header>
        <div class="block sm:hidden">D<sub>1</sub></div>
        <div class="hidden sm:block">{{ $t("bladeDiameter") }} D<sub>1</sub></div>
      </template>
    </Column>
    <Column field="bladeRadius" :sortable="sortable">
      <template #header>
        <div class="block sm:hidden">R</div>
        <div class="hidden sm:block">{{ $t("bladeRadius") }} R</div>
      </template>
    </Column>
    <Column field="handleDiameter" :sortable="sortable">
      <template #header>
        <div class="block sm:hidden">D</div>
        <div class="hidden sm:block">{{ $t("handleDiameter") }} D</div>
      </template>
    </Column>
    <Column field="cuttingLength" :sortable="sortable">
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
</template>
