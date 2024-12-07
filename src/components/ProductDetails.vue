<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n-lite";
import { numberToVnd } from "@/library/helper";
import ProductImages from "@/components/ProductImages.vue";
import ProductExtraImages from "@/components/ProductExtraImages.vue";
import ProductDescription from "@/components/ProductDescription.vue";

const props = defineProps(["item"]);
const { current } = useI18n();

const formattedPrice = computed(() => {
  if (!props.item) return "";
  if (props.item.prices.current) return numberToVnd(props.item.prices.current);
  if (props.item.prices.current === null) return null;
  return `${numberToVnd(props.item.prices.min)} - ${numberToVnd(props.item.prices.max)}`;
});
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
        <div class="hp-pagedetails-bold mt-1 px-2">{{ item.description[current] }}</div>

        <div class="hp-pagedetails-rows">
          <div class="hp-pagedetails-row">
            <span> {{ $t("code") }}: </span>
            <span class="hp-pagedetails-bold"> {{ item.code }} </span>
          </div>
          <div v-if="item.brand" class="hp-pagedetails-row">
            <span> {{ $t("brand") }}: </span>
            <span class="hp-pagedetails-bold"> {{ item.brand }} </span>
          </div>
          <div v-if="item.origin" class="hp-pagedetails-row">
            <span> {{ $t("origin") }}: </span>
            <span class="hp-pagedetails-bold"> {{ item.origin.map((o) => $t(o)).join(", ") }} </span>
          </div>
        </div>

        <slot name="extraRows" :data="item" />

        <template v-if="item.detailsView">
          <div v-for="(row, rIndex) in item.detailsView" :key="rIndex" class="hp-pagedetails-rows">
            <div v-for="(prop, pIndex) in row" :key="pIndex" class="hp-pagedetails-row">
              <template v-if="typeof prop === 'string'">
                <span> {{ $t(prop) }}: </span>
                <span class="hp-pagedetails-bold text-right">
                  {{ item[prop] }}
                </span>
              </template>
              <template v-else-if="prop.type === 'i18n'">
                <span> {{ $t(prop.value) }}: </span>
                <span class="hp-pagedetails-bold text-right">
                  {{ typeof item[prop.value] === "string" ? $t(item[prop.value]) : item[prop.value].map((v) => $t(v)).join(", ") }}
                </span>
              </template>
              <template v-else-if="prop.type === 'tag'">
                <span> {{ $t(prop.value) }}: </span>
                <div class="flex-wrap flex justify-end gap-1 py-1">
                  <Tag v-for="(value, vIndex) in item[prop.value]" :key="vIndex" :value="value" severity="secondary" />
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </div>

    <ProductDescription v-if="item.descriptions" :descriptions="item.descriptions[current]" />

    <ProductExtraImages v-if="item.extraImages" :current="current" :images="item.extraImages" />
  </div>
</template>
