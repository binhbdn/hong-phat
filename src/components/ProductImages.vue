<script setup>
import { imgServer } from "@/config";

defineProps({
  images: Array
});
</script>

<template>
  <div class="Sirv" data-options="mode:magnifier" style="height: 425px">
    <div v-for="(image, index) in images" :key="index" :data-src="`${imgServer}${image}`" data-type="zoom" />
  </div>
</template>
