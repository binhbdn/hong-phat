<script setup>
import AppTitle from "@/layout/AppTitle.vue";
import CartBtn from "@/views/gio-hang/CartBtn.vue";

defineProps({
  parentRouteName: String,
  title: String
});
</script>

<template>
  <div class="page-has-title">
    <div class="flex flex-wrap justify-end gap-2 px-2 sm:px-4 pb-2 sm:pb-3">
      <AppTitle :parentRouteName="parentRouteName" :title="title" hasBackIcon class="flex-grow flex gap-x-1" />
      <slot name="headerIcons" />
    </div>

    <div class="pb-2 sm:pb-3">
      <div class="page-body overflow-y-scroll hide-scrollbar px-2 sm:px-4 pb-11 sm:pb-9 xl:pb-0">
        <slot />
      </div>
    </div>

    <CartBtn />
  </div>
</template>
