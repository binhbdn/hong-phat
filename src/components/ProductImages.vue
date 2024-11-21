<script setup>
import { imgServer } from "@/config";

defineProps({
  images: Array
});
</script>

<template>
  <div class="h-[375px] sm:h-[450px]">
    <div class="Sirv" data-options="mode:magnifier">
      <div v-for="(image, index) in images" :key="index" :data-src="`${imgServer}${image}`" data-type="zoom" />
    </div>
  </div>
</template>
