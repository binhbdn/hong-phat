<script setup>
import { ref, onMounted } from "vue";
import { isDesktop } from "@/composable/layout";
import { getSpecByCode } from "@/stores/daoPhayNgon";

const props = defineProps(["code"]);
const list = ref(null);

onMounted(() => {
  list.value = getSpecByCode(props.code);
});
</script>

<template>
  <div class="xl:max-w-[88%] text-xs/[18px] sm:text-[13px]/[22px] text-gray-600 mt-3 sm:mt-5">
    <div class="font-bold text-sm text-gray-900">{{ $t("specifications") }}</div>
    <img src="/svg/end_mills/square.svg" width="300" class="mx-auto my-2" />

    <DataTable v-if="list" :value="list" stripedRows rowHover paginator :rows="10" :size="isDesktop ? null : 'small'">
      <Column field="code" :header="$t('productCode')" headerClass="whitespace-nowra"> </Column>
      <Column field="bladeDiameter">
        <template #header>
          <div class="block sm:hidden">d</div>
          <div class="hidden sm:block">{{ $t("bladeDiameter") }} d</div>
        </template>
      </Column>
      <Column field="handleDiameter">
        <template #header>
          <div class="block sm:hidden">D</div>
          <div class="hidden sm:block">{{ $t("handleDiameter") }} D</div>
        </template>
      </Column>
      <Column field="cuttingLength">
        <template #header>
          <div class="block sm:hidden">l</div>
          <div class="hidden sm:block">{{ $t("cuttingLength") }} l</div>
        </template>
      </Column>
      <Column field="overallLength">
        <template #header>
          <div class="block sm:hidden">L</div>
          <div class="hidden sm:block">{{ $t("overallLength") }} L</div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>
