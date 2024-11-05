<script setup>
defineProps({
  name: String,
  imgSrc: String,
  orderQuantity: Number
});
defineEmits(["changeOrderQuantity"]);
</script>

<template>
  <div class="group text-[13px]/5 text-gray-600 bg-gray-50 rounded-lg shadow-gray-400 hover:shadow-primary cursor-pointer shadow-sm p-2">
    <div class="font-semibold text-sm text-gray-900 group-hover:text-primary truncate">
      {{ name }}
    </div>
    <div class="flex gap-x-3 pt-2">
      <div class="w-[120px] h-[120px] relative">
        <Image :src="imgSrc" width="120" preview imageClass="border border-gray-400 rounded-md" @click.stop />

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
