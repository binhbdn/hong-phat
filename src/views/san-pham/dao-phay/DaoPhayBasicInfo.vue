<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n-lite";
import { numberToVnd } from "@/library/helper";
import ProductImages from "@/components/ProductImages.vue";
import ProcessingMaterials from "@/components/ProcessingMaterials.vue";

const props = defineProps(["item"]);
const { current } = useI18n();

const formattedPrice = computed(() => {
  if (!props.item) return "";
  if (props.item.prices.current) return numberToVnd(props.item.prices.current);
  return `${numberToVnd(props.item.prices.min)} - ${numberToVnd(props.item.prices.max)}`;
});
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5 xl:gap-7 text-xs/[18px] sm:text-[13px]/[22px] text-gray-600">
    <ProductImages :images="item.images" />
    <div>
      <div class="font-bold text-base text-gray-900 px-2">{{ item.name[current] }}</div>
      <div class="xl:w-fit xl:min-w-[75%] text-gray-500 text-right px-2">{{ formattedPrice }}</div>
      <div class="xl:w-fit xl:max-w-[75%] font-medium text-gray-900 my-2 px-2">{{ item.description[current] }}</div>

      <div class="xl:w-fit xl:min-w-[75%]">
        <div>
          <div class="flex justify-between gap-x-2 xl:gap-x-5 hover:bg-white px-2">
            <span> {{ $t("productCode") }}: </span>
            <span class="font-medium text-gray-900"> {{ item.code }} </span>
          </div>
          <div class="flex justify-between gap-x-2 xl:gap-x-5 hover:bg-white px-2">
            <span> {{ $t("material") }}: </span>
            <span class="font-medium text-gray-900"> {{ $t(item.material) }} </span>
          </div>
          <div class="flex justify-between gap-x-2 xl:gap-x-5 hover:bg-white px-2">
            <span> {{ $t("coating") }}: </span>
            <span class="font-medium text-gray-900"> {{ $t(item.coating) }} </span>
          </div>
        </div>

        <div class="border-t border-dashed border-gray-400 pt-1 mt-1">
          <div class="flex justify-between items-center gap-x-2 xl:gap-x-5 px-2">
            <span> {{ $t("processingMaterials") }}: </span>
            <ProcessingMaterials :codes="item.processingMaterials" />
          </div>
        </div>

        <div class="border-t border-dashed border-gray-400 pt-1 mt-1">
          <div class="flex justify-between gap-x-2 xl:gap-x-5 hover:bg-white px-2">
            <span> {{ $t("hardness") }}: </span>
            <span class="font-medium text-gray-900"> {{ item.hardness }} </span>
          </div>
          <div class="flex justify-between gap-x-2 xl:gap-x-5 hover:bg-white px-2">
            <span> {{ $t("flutes") }}: </span>
            <span class="font-medium text-gray-900"> {{ item.flutes }}F </span>
          </div>
          <div class="flex justify-between gap-x-2 xl:gap-x-5 hover:bg-white px-2">
            <span> {{ $t("cutStyle") }}: </span>
            <span class="font-medium text-gray-900"> {{ $t(item.cutStyle) }} </span>
          </div>
          <div class="flex justify-between gap-x-2 xl:gap-x-5 hover:bg-white px-2">
            <span> {{ $t("helixAngle") }}: </span>
            <span class="font-medium text-gray-900"> {{ item.helixAngle }}° </span>
          </div>
        </div>

        <div class="border-t border-dashed border-gray-400 pt-1 mt-1">
          <div class="flex justify-between gap-x-2 xl:gap-x-5 hover:bg-white px-2">
            <span> {{ $t("bladeDiameter") }}: </span>
            <span class="font-medium text-gray-900"> {{ `d${item.bladeDiameter.min}-d${item.bladeDiameter.max}` }} </span>
          </div>
          <div class="flex justify-between gap-x-2 xl:gap-x-5 hover:bg-white px-2">
            <span> {{ $t("handleDiameter") }}: </span>
            <span class="font-medium text-gray-900"> {{ `D${item.handleDiameter.min}-D${item.handleDiameter.max}` }} </span>
          </div>
          <div class="flex justify-between gap-x-2 xl:gap-x-5 hover:bg-white px-2">
            <span> {{ $t("cuttingLength") }}: </span>
            <span class="font-medium text-gray-900"> {{ `${item.cuttingLength.min}-${item.cuttingLength.max}` }} </span>
          </div>
          <div class="flex justify-between gap-x-2 xl:gap-x-5 hover:bg-white px-2">
            <span> {{ $t("overallLength") }}: </span>
            <span class="font-medium text-gray-900"> {{ `${item.overallLength.min}-${item.overallLength.max}` }} </span>
          </div>
        </div>

        <div class="border-t border-dashed border-gray-400 pt-1 mt-1">
          <div class="flex justify-between gap-x-2 xl:gap-x-5 hover:bg-white px-2">
            <span> {{ $t("origin") }}: </span>
            <span class="font-medium text-gray-900"> {{ $t("cn") }} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
