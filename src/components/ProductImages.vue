<script setup>
defineProps({
  images: Array
});
</script>

<template>
  <div class="text-xs sm:text-[13px]/5 text-gray-600 bg-white rounded-lg shadow-lg p-2 sm:p-3">
    {{ images }}
  </div>
</template>
