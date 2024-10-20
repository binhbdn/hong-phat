<script setup>
defineProps({
  hasBackIcon: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div class="layout-title items-center gap-x-1">
    <div
      v-if="hasBackIcon"
      class="w-6 h-6 flex justify-center items-center hover:text-white hover:bg-primary rounded-md cursor-pointer"
      @click="$router.back()"
    >
      <i class="pi pi-angle-left text-lg/5 sm:text-xl/5" />
    </div>
    <div class="text-gray-900 text-base sm:text-lg whitespace-nowrap">
      {{ $t(`title.${$route.name}`) }}
    </div>
  </div>
</template>
