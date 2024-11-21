<script setup>
import { isDesktop } from "@/composable/layout";

defineProps(["value", "sortable"]);
</script>

<template>
  <DataTable v-if="value" :value="value" dataKey="dim" showGridlines stripedRows rowHover paginator removableSort :rows="10" :size="isDesktop ? null : 'small'">
    <Column field="dim" :header="$t('dimension')" headerClass="whitespace-nowra"> </Column>
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
</template>
