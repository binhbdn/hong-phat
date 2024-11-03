<script setup>
defineProps({
  showAll: Boolean
});
defineEmits(["update:showAll"]);
</script>

<template>
  <div class="flex justify-center">
    <div class="font-semibold text-sm text-white bg-primary/70 hover:bg-primary cursor-pointer rounded-md px-2 py-1" @click="$emit('update:showAll', !showAll)">
      <span v-show="showAll"> {{ $t("viewMPopularOnly") }} </span>
      <span v-show="!showAll"> {{ $t("viewMore") }} </span>
    </div>
  </div>
</template>
