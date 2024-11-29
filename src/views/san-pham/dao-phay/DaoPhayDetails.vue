<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n-lite";
import { numberToVnd } from "@/library/helper";
import ProductImages from "@/components/ProductImages.vue";
import ProcessingMaterials from "@/components/ProcessingMaterials.vue";
import ProductDescription from "@/components/ProductDescription.vue";

const props = defineProps(["item"]);
const { current } = useI18n();

const formattedPrice = computed(() => {
  if (!props.item) return "";
  if (props.item.prices.current) return numberToVnd(props.item.prices.current);
  if (props.item.prices.current === null) return null;
  return `${numberToVnd(props.item.prices.min)} - ${numberToVnd(props.item.prices.max)}`;
});

const showRadius = computed(() => props.item.cutStyle === "csBall" || props.item.cutStyle === "csCornerRounding");
const showCuttingLength = computed(() => props.item.cutStyle !== "csChamfer" || props.item.cuttingLength !== null);
const showNoseAngle = computed(() => props.item.cutStyle === "csChamfer");
</script>

<template>
  <div class="flex flex-col gap-y-3 sm:gap-y-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-3 md:gap-x-5 xl:gap-x-7">
      <ProductImages :images="item.images" />
      <div>
        <div class="font-bold text-base sm:text-xl text-gray-900 px-2">{{ item.name[current] }}</div>
        <div class="text-gray-500 text-right px-2">
          {{ formattedPrice || $t("contactForQuote") }}
        </div>
        <div class="font-medium text-gray-900 my-2 px-2">{{ item.description[current] }}</div>

        <div>
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
            <div class="flex justify-between items-center gap-x-2 xl:gap-x-5 hover:bg-white px-2 pb-1">
              <span> {{ $t("cutStyle") }}: </span>
              <img :src="`/svg/cut_style/${item.cutStyle}.svg`" />
            </div>
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
              <span> {{ $t("helixAngle") }}: </span>
              <span class="font-medium text-gray-900"> {{ item.helixAngle }}° </span>
            </div>
          </div>

          <div class="border-t border-dashed border-gray-400 pt-1 mt-1">
            <div class="flex justify-between gap-x-2 xl:gap-x-5 hover:bg-white px-2">
              <template v-if="showRadius">
                <span> {{ $t("bladeRadius") }}: </span>
                <span class="font-medium text-gray-900">
                  {{ item.bladeRadius }}
                </span>
              </template>
              <template v-else>
                <span> {{ $t("bladeDiameter") }}: </span>
                <span class="font-medium text-gray-900">
                  {{ item.bladeDiameter }}
                </span>
              </template>
            </div>
            <div class="flex justify-between gap-x-2 xl:gap-x-5 hover:bg-white px-2">
              <span> {{ $t("handleDiameter") }}: </span>
              <span class="font-medium text-gray-900">
                {{ item.handleDiameter }}
              </span>
            </div>
            <div v-if="showCuttingLength" class="flex justify-between gap-x-2 xl:gap-x-5 hover:bg-white px-2">
              <span> {{ $t("cuttingLength") }}: </span>
              <span class="font-medium text-gray-900">
                {{ item.cuttingLength }}
              </span>
            </div>
            <div class="flex justify-between gap-x-2 xl:gap-x-5 hover:bg-white px-2">
              <span> {{ $t("overallLength") }}: </span>
              <span class="font-medium text-gray-900">
                {{ item.overallLength }}
              </span>
            </div>
            <div v-if="showNoseAngle" class="flex justify-between gap-x-2 xl:gap-x-5 hover:bg-white px-2">
              <span> {{ $t("noseAngle") }}: </span>
              <span class="font-medium text-gray-900"> {{ item.noseAngle }}° </span>
            </div>
          </div>

          <div class="border-t border-dashed border-gray-400 pt-1 mt-1">
            <div class="flex justify-between gap-x-2 xl:gap-x-5 hover:bg-white px-2">
              <span> {{ $t("origin") }}: </span>
              <span class="font-medium text-gray-900"> {{ $t(item.origin) }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ProductDescription :descriptions="item.descriptions[current]" />
  </div>
</template>
