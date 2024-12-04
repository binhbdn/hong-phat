<script setup>
defineProps({
  parentRouteName: String,
  title: String,
  hasBackIcon: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div class="layout-title text-gray-900 text-base sm:text-lg">
    <div
      v-if="hasBackIcon"
      class="w-6 h-6 sm:h-7 flex justify-center items-center hover:text-white hover:bg-primary rounded-md cursor-pointer"
      @click="$router.back()"
    >
      <i class="pi pi-angle-left text-lg/5 sm:text-xl/5" />
    </div>

    <div class="flex gap-x-1 flex-wrap">
      <template v-if="parentRouteName">
        <div class="hover:text-primary cursor-pointer whitespace-nowrap" @click="$router.push({ name: parentRouteName })">
          {{ $t(parentRouteName) }}
        </div>
        <div class="text-gray-400">/</div>
      </template>

      <div :class="{ 'text-gray-600': parentRouteName }">
        {{ title || $t($route.name) }}
      </div>
    </div>
  </div>
</template>
