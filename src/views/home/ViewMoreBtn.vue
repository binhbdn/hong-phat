<script setup>
import { viewDetails } from "@/stores/homeCategory";
defineProps({
  showAll: Boolean
});
defineEmits(["update:showAll"]);
</script>

<template>
  <div :class="[viewDetails ? 'h-fit self-end justify-self-end md:justify-self-start' : 'w-full sm:w-auto justify-end', showAll ? 'hidden' : 'flex']">
    <div class="h-fit text-xs text-primary/70 border border-primary/70 cursor-pointer rounded-md px-2 py-1" @click="$emit('update:showAll', true)">
      {{ $t("viewMore") }}
    </div>
  </div>
</template>
