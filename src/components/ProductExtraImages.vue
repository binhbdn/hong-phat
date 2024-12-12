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

    <div class="flex flex-col sm:flex-row sm:flex-wrap items-center sm:items-start gap-2 mt-2">
      <Image v-for="(image, dIndex) in item.data" :key="dIndex" :src="`${imgServer}${image}${item.options}`" :preview="item.preview" />
    </div>
  </div>
</template>
