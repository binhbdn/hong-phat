<script setup>
import AppTitle from "@/layout/AppTitle.vue";
import CartButton from "@/views/gio-hang/CartButton.vue";
</script>

<template>
  <div class="page-has-title">
    <div class="flex justify-between items pr-2 sm:pr-4 pb-2 sm:pb-3">
      <AppTitle hasBackIcon class="flex px-1 sm:px-3" />
      <slot name="headerIcons" />
    </div>

    <div class="px-2 sm:px-4 pb-2 sm:pb-3">
      <div class="page-body overflow-y-scroll hide-scrollbar">
        <slot />
      </div>
    </div>

    <CartButton />
  </div>
</template>
