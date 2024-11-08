<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n-lite";
import { numberToVnd } from "@/library/helper";
import DaoPhayItemDetails from "@/views/san-pham/dao-phay/DaoPhayItemDetails.vue";
import DaoPhayItemRibbon from "@/views/san-pham/dao-phay/DaoPhayItemRibbon.vue";

const { current } = useI18n();

const props = defineProps({
  viewDetails: Boolean,
  item: Object,
  orderQuantity: Number
});
defineEmits(["changeOrderQuantity"]);

const formattedPrice = computed(() => {
  if (props.item.prices.current) return numberToVnd(props.item.prices.current);
  return `${numberToVnd(props.item.prices.min)} - ${numberToVnd(props.item.prices.max)}`;
});

// dao phay
const isEndMill = computed(() => props.item.category === "pDaoPhay");
</script>

<template>
  <div
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
      <div class="relative aspect-square" :class="viewDetails ? 'w-[120px] h-[120px]' : 'w-full h-full sm:max-w-[200px]'">
        <Image :src="item.imgSrc" width="100%" height="100%" preview imageClass="border border-gray-400 rounded-t-md rounded-br-md" @click.stop />

        <template v-if="isEndMill">
          <img v-show="!orderQuantity" :src="`/svg/flutes/${item.flutes}.svg`" class="h-6 absolute bottom-2 right-2" />
          <DaoPhayItemRibbon :item="item" />
        </template>

        <div class="absolute top-2 right-2 flex flex-col items-end gap-y-3">
          <div
            class="w-6 h-6 flex justify-center items-center bg-white text-primary border border-gray-500 rounded-full"
            @click.stop="$emit('changeOrderQuantity', true)"
          >
            <i class="pi pi-plus text-[10px]" />
          </div>
          <template v-if="orderQuantity">
            <div class="font-bold bg-white text-primary text-center border border-gray-500 rounded-lg px-2 py-1">{{ orderQuantity }}</div>
            <div
              class="w-6 h-6 flex justify-center items-center bg-white text-primary border border-gray-500 rounded-full"
              @click.stop="$emit('changeOrderQuantity', false)"
            >
              <i class="pi pi-minus text-[10px]" />
            </div>
          </template>
        </div>
      </div>

      <div class="w-0 flex-grow flex-col leading-4 xl:leading-5" :class="viewDetails ? 'flex' : 'hidden'">
        <div class="flex-grow flex justify-end font-medium leading-4 text-gray-500">
          {{ formattedPrice }}
        </div>

        <template v-if="viewDetails">
          <DaoPhayItemDetails v-if="isEndMill" :description="item.description[current]" :item="item" />
        </template>
      </div>
    </div>

    <div class="order-2 flex-grow items-end font-medium leading-4 text-gray-500 -mt-1" :class="viewDetails ? 'hidden' : 'flex'">
      {{ formattedPrice }}
    </div>
  </div>
</template>
