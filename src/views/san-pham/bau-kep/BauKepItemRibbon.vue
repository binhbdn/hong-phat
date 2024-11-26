<script setup>
defineProps({
  item: Object
});
</script>

<template>
  <div class="ribbon">
    {{ item.seri }}
    <span class="text-[10px]">
      {{ item.specifications }}
    </span>
  </div>
</template>
