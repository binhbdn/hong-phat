<script setup>
import { imgServer } from "@/config";

defineProps({
  images: Array
});
</script>

<template>
  <div v-if="images">
    <div class="hp-h1">{{ $t("specifications") }}</div>

    <Image v-for="(image, index) in images" :key="index" :src="`${imgServer}${image}`" preview class="mt-2" />
  </div>
</template>
