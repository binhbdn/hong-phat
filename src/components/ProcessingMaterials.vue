<script setup>
defineProps(["codes"]);
import { list } from "@/components/processingMaterials.js";
</script>

<template>
  <div class="flex font-bold text-xs/6 text-black text-center">
    <div
      v-for="item in list"
      :key="item.code"
      v-tooltip.left="$t(`pm.${item.code}`)"
      :style="`background: ${item.color};`"
      class="w-6 cursor-pointer"
      :class="{ 'opacity-20': !codes.includes(item.code) }"
    >
      {{ item.code }}
    </div>
  </div>
</template>
