<script setup>
import AppTitle from "@/layout/AppTitle.vue";
</script>

<template>
  <div class="page-has-title page-has-footer">
    <AppTitle hasBackIcon class="content-page-title px-1 sm:px-3 pb-2 sm:pb-3" />
    <div class="page-body overflow-y-scroll hide-scrollbar px-1 sm:px-3 pb-2 sm:pb-3">
      <slot />
    </div>

    <div class="page-footer w-full h-16 sm:h-[68px] sticky bottom-0 right-0 px-1.5 pt-2 sm:pt-3">
      <div class="h-14 page-footer-shadow flex flex-col justify-center rounded-t-2xl bg-white border-gray-400 p-2">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
