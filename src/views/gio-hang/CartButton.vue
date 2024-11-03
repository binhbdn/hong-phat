<script setup>
const totalQuantity = 0;
</script>

<template>
  <div class="cart-btn group fixed bg-gray-400 hover:bg-primary cursor-pointer rounded-lg z-10">
    <div class="flex items-center text-white rounded-2xl p-2">
      <i class="pi pi-cart-plus text-xl/none" />
    </div>
    <div
      v-show="totalQuantity"
      class="absolute -top-2 -right-1 min-w-4 h-4 flex items-center font-bold text-[10px] text-primary bg-white border border-primary/30 group-hover:border-primary rounded-full px-0.5"
    >
      {{ totalQuantity }}
    </div>
  </div>
</template>
