<script setup>
defineProps(["code"]);
</script>

<template>
  <div class="hp-textstyle bg-white rounded-lg shadow-lg p-2 sm:p-3">
    {{ $t("noProductWithCode") }}
    <strong class="text-red-500">
      {{ code }}
    </strong>
  </div>
</template>
