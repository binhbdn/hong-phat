<script setup>
import { viewDetails } from "@/stores/listPage";
</script>

<template>
  <div class="flex gap-x-1">
    <div
      class="w-6 h-6 flex justify-center items-center hover:text-primary bg-gray-200 hover:bg-primary hover:bg-opacity-20 rounded-md cursor-pointer z-10"
      :class="viewDetails ? 'text-gray-700' : 'bg-primary/20 text-primary/70'"
      @click="viewDetails = false"
    >
      <i class="pi pi-th-large" />
    </div>
    <div
      class="home-icon-highlight w-6 h-6 flex justify-center items-center text-gray-700 hover:text-primary bg-gray-200 hover:bg-primary hover:bg-opacity-20 rounded-md cursor-pointer z-10"
      :class="viewDetails ? 'bg-primary/20 text-primary/70' : 'text-gray-700'"
      @click="viewDetails = true"
    >
      <i class="pi pi-list" />
    </div>
  </div>
</template>
