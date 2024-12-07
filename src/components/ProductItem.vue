<script setup>
import { ref, computed, watch } from "vue";
import { useI18n } from "vue-i18n-lite";
import { numberToVnd } from "@/library/helper";
import { imgServer } from "@/config";

const { current } = useI18n();

const props = defineProps({
  visible: Boolean,
  viewDetails: Boolean,
  item: Object
});

const render = ref(props.visible);
const orderQuantity = ref(0);

watch(
  () => props.visible,
  (val) => {
    if (val) render.value = true;
  }
);

const formattedPrice = computed(() => {
  if (props.item.prices.current) return numberToVnd(props.item.prices.current);
  if (props.item.prices.current === null) return null;
  return `${numberToVnd(props.item.prices.min)} - ${numberToVnd(props.item.prices.max)}`;
});
</script>

<template>
  <div
    v-if="render"
    v-show="visible"
    class="group flex flex-col gap-y-1.5 text-xs sm:text-[13px]/5 text-gray-600 cursor-pointer"
    :class="viewDetails ? 'bg-gray-50 rounded-lg shadow-gray-400 hover:shadow-primary shadow-sm p-2' : 'w-[calc(50%-6px)] sm:max-w-[200px]'"
    @click="
      $router.push({
        name: item.routeName,
        params: { code: item.code }
      })
    "
  >
    <div class="font-semibold text-[13px]/[18px] sm:text-sm text-gray-900 group-hover:text-primary line-clamp-2" :class="{ 'order-1': !viewDetails }">
      {{ item.name[current] }}
    </div>

    <div class="flex gap-x-3">
      <div
        class="relative aspect-square bg-white border border-gray-400 rounded-t-md rounded-br-md"
        :class="viewDetails ? 'w-[120px] h-[120px]' : 'w-full h-full sm:max-w-[200px]'"
      >
        <img :src="`${imgServer}${item.images[0]}?w=300&h=300`" width="100%" height="100%" class="rounded-t-md rounded-br-md" />

        <slot name="extraImg" :data="item" :quantity="orderQuantity" />

        <div class="ribbon">
          {{ item.seri }}
          <span class="text-[10px]">
            {{ item.specs }}
          </span>
        </div>

        <div class="absolute top-2 right-2 flex flex-col items-end gap-y-3">
          <div class="w-6 h-6 flex justify-center items-center bg-white hover:bg-gray-200 text-primary border border-gray-500 rounded-full" @click.stop="null">
            <i class="pi pi-plus text-[10px]" />
          </div>
          <template v-if="orderQuantity">
            <div class="font-bold bg-white text-primary text-center border border-gray-500 rounded-lg px-2 py-1">{{ orderQuantity }}</div>
            <div
              class="w-6 h-6 flex justify-center items-center bg-white hover:bg-gray-200 text-primary border border-gray-500 rounded-full"
              @click.stop="null"
            >
              <i class="pi pi-minus text-[10px]" />
            </div>
          </template>
        </div>
      </div>

      <div class="w-0 flex-grow flex-col leading-4 xl:leading-5" :class="viewDetails ? 'flex' : 'hidden'">
        <div class="flex-grow flex justify-end font-medium leading-4 text-gray-500">
          {{ formattedPrice || $t("contactForQuote") }}
        </div>

        <template v-if="viewDetails">
          <div class="flex-grow font-medium leading-4 text-gray-900">
            {{ item.description[current] }}
          </div>
          <div v-for="(prop, index) in item.listView" :key="index" class="flex justify-between gap-x-1">
            <template v-if="typeof prop === 'string'">
              {{ $t(prop) }}:
              <span class="font-medium text-gray-900">
                {{ item[prop] }}
              </span>
            </template>
            <template v-else-if="prop.type === 'i18n'">
              {{ $t(prop.value) }}:
              <span class="font-medium text-gray-900">
                {{ typeof item[prop.value] === "string" ? $t(item[prop.value]) : item[prop.value].map((v) => $t(v)).join(", ") }}
              </span>
            </template>
          </div>
        </template>
      </div>
    </div>

    <div class="order-2 flex-grow items-end font-medium leading-4 text-gray-500 -mt-1" :class="viewDetails ? 'hidden' : 'flex'">
      {{ formattedPrice || $t("contactForQuote") }}
    </div>
  </div>
</template>
