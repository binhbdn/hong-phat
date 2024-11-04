<script setup>
defineProps({
  showAll: Boolean
});
defineEmits(["update:showAll"]);
</script>

<template>
  <div class="flex justify-end sm:justify-center">
    <div class="text-xs text-blue-500 border border-blue-500 cursor-pointer rounded-md px-2 py-1" @click="$emit('update:showAll', !showAll)">
      <span v-show="showAll"> {{ $t("viewTypicalProducts") }} </span>
      <span v-show="!showAll"> {{ $t("viewMore") }} </span>
    </div>
  </div>
</template>
