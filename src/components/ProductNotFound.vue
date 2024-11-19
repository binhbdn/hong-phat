<script setup>
defineProps(["code"]);
</script>

<template>
  <div class="text-xs/[18px] sm:text-[13px]/[22px] text-gray-600 bg-white rounded-lg shadow-lg p-2 sm:p-3">
    {{ $t("noProductWithCode") }}
    <strong class="text-red-500">
      {{ code }}
    </strong>
  </div>
</template>
