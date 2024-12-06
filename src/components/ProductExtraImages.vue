<script setup>
import { imgServer } from "@/config";

defineProps({
  images: Array
});
</script>

<template>
  <div v-for="(item, index) in images" :key="index">
    <div class="hp-h1">{{ $t(item.title) }}</div>

    <Image v-for="(image, dIndex) in item.data" :key="dIndex" :src="`${imgServer}${image}`" preview class="mt-2" />
  </div>
</template>
