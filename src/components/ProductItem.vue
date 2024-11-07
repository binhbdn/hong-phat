<script setup>
defineProps({
  viewDetails: Boolean,
  name: String,
  imgSrc: String,
  orderQuantity: Number
});
defineEmits(["changeOrderQuantity"]);
</script>

<template>
  <div
    class="group flex flex-col gap-y-1.5 text-[13px]/5 text-gray-600 cursor-pointer"
    :class="viewDetails ? 'bg-gray-50 rounded-lg shadow-gray-400 hover:shadow-primary shadow-sm p-2' : 'w-[calc(50%-6px)] sm:max-w-[200px]'"
  >
    <div class="font-semibold text-sm text-gray-900 group-hover:text-primary line-clamp-2" :class="{ 'order-1': !viewDetails }">
      {{ name }}
    </div>
    <div class="flex gap-x-3">
      <div class="relative aspect-square" :class="viewDetails ? 'w-[120px] h-[120px]' : 'w-full h-full sm:max-w-[200px]'">
        <Image :src="imgSrc" width="100%" height="100%" preview imageClass="border border-gray-400 rounded-md" @click.stop />

        <slot name="icons" />

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

      <slot />
    </div>
  </div>
</template>
