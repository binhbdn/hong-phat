<script setup>
import AppTitle from "@/layout/AppTitle.vue";
import CartButton from "@/views/gio-hang/CartButton.vue";
</script>

<template>
  <div class="page-has-title">
    <AppTitle hasBackIcon class="content-page-title px-1 sm:px-3 pb-2 sm:pb-3" />

    <div class="px-2 sm:px-4 pb-2 sm:pb-3">
      <div class="page-body overflow-y-scroll hide-scrollbar">
        <slot />
      </div>
    </div>

    <CartButton />
  </div>
</template>
