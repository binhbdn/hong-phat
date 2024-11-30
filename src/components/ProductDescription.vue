<script setup>
defineProps(["descriptions"]);
</script>

<template>
  <div v-if="descriptions.length">
    <div class="hp-h1">{{ $t("description") }}</div>

    <ul class="list-disc ml-6 sm:ml-12 mt-1">
      <li v-for="(description, index) in descriptions" :key="index">
        {{ description }}
      </li>
    </ul>
  </div>
</template>
