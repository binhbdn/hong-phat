<script setup>
defineProps({
  showAll: Boolean
});
defineEmits(["update:showAll"]);
</script>

<template>
  <div v-show="!showAll" class="h-fit flex self-end justify-self-end md:justify-self-start">
    <div class="text-xs text-primary/70 border border-primary/70 cursor-pointer rounded-md px-2 py-1" @click="$emit('update:showAll', true)">
      {{ $t("viewMore") }}
    </div>
  </div>
</template>
