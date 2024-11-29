<script setup>
defineProps({
  seri: String,
  specs: String
});
</script>

<template>
  <div class="ribbon">
    {{ seri }}
    <span class="text-[10px]">
      {{ specs }}
    </span>
  </div>
</template>
