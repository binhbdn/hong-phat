<script setup>
defineProps(["code"]);
</script>

<template>
  <div class="text-[13px]/5 sm:text-sm/[22px] text-gray-600 bg-white rounded-lg shadow-lg p-2 sm:p-3">
    {{ $t("noProductWithCode") }}
    <strong class="text-red-500">
      {{ code }}
    </strong>
  </div>
</template>
