<script setup>
import { isDesktop } from "@/composable/layout";

defineProps(["value", "sortable"]);
</script>

<template>
  <DataTable v-if="value" :value="value" dataKey="dim" showGridlines stripedRows rowHover paginator removableSort :rows="10" :size="isDesktop ? null : 'small'">
    <Column field="dim" :header="$t('dimension')" headerClass="text-[13px]/5 sm:text-sm/[22px]" bodyClass="text-[13px]/5 sm:text-sm/[22px]"> </Column>
    <Column field="bladeRadius" headerClass="text-[13px]/5 sm:text-sm/[22px]" bodyClass="text-[13px]/5 sm:text-sm/[22px]" :sortable="sortable">
      <template #header>
        <div class="block sm:hidden">R</div>
        <div class="hidden sm:block">{{ $t("bladeRadius") }} R</div>
      </template>
    </Column>
    <Column field="handleDiameter" headerClass="text-[13px]/5 sm:text-sm/[22px]" bodyClass="text-[13px]/5 sm:text-sm/[22px]" :sortable="sortable">
      <template #header>
        <div class="block sm:hidden">D</div>
        <div class="hidden sm:block">{{ $t("handleDiameter") }} D</div>
      </template>
    </Column>
    <Column field="cuttingLength" headerClass="text-[13px]/5 sm:text-sm/[22px]" bodyClass="text-[13px]/5 sm:text-sm/[22px]" :sortable="sortable">
      <template #header>
        <div class="block sm:hidden">L<sub>1</sub></div>
        <div class="hidden sm:block">{{ $t("cuttingLength") }} L<sub>1</sub></div>
      </template>
    </Column>
    <Column field="overallLength" headerClass="text-[13px]/5 sm:text-sm/[22px]" bodyClass="text-[13px]/5 sm:text-sm/[22px]" :sortable="sortable">
      <template #header>
        <div class="block sm:hidden">L</div>
        <div class="hidden sm:block">{{ $t("overallLength") }} L</div>
      </template>
    </Column>
  </DataTable>
</template>
