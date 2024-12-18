<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import { imgServer } from "@/config";
import { initHiddenLinks, stopHiddenLinks } from "@/composable/hiddenLinks";

defineProps({
  images: Array
});

onMounted(initHiddenLinks);

onBeforeUnmount(stopHiddenLinks);
</script>

<template>
  <div class="h-[375px] sm:h-[450px]">
    <div class="Sirv" data-options="mode:magnifier">
      <div v-for="(image, index) in images" :key="index" :data-src="`${imgServer}${image}`" data-type="zoom" />
    </div>
  </div>
</template>
