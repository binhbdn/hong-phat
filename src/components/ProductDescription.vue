<script setup>
defineProps(["descriptions"]);
</script>

<template>
  <div v-for="(description, index) in descriptions" :key="index">
    <div class="hp-h1">{{ $t(description.title) }}</div>

    <ul class="list-disc ml-6 sm:ml-12 mt-1">
      <li v-for="(content, cIndex) in description.data" :key="cIndex">
        {{ content }}
      </li>
    </ul>
  </div>
</template>
