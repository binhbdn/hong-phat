<script setup>
defineProps({
  showAll: Boolean
});
defineEmits(["update:showAll"]);
</script>

<template>
  <div class="h-fit self-end justify-self-end md:justify-self-start" :class="showAll ? 'hidden' : 'flex'">
    <div class="text-xs text-primary/70 border border-primary/70 cursor-pointer rounded-md px-2 py-1" @click="$emit('update:showAll', true)">
      {{ $t("viewMore") }}
    </div>
  </div>
</template>
