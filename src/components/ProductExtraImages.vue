<script setup>
import { imgServer } from "@/config";

defineProps({
  current: String,
  images: Array
});
</script>

<template>
  <div v-for="(item, index) in images" :key="index">
    <div class="hp-h1">{{ $t(item.title) }}</div>

    <div v-if="item.subTitle" class="mt-1">
      {{ typeof item.subTitle === "object" ? item.subTitle[current] : item.subTitle }}
    </div>

    <Image v-for="(image, dIndex) in item.data" :key="dIndex" :src="`${imgServer}${image}`" preview class="mt-2" />
  </div>
</template>
