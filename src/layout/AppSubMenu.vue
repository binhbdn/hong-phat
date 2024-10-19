<script setup>
import AppMenuItem from "./AppMenuItem.vue";

defineProps({
  model: {
    type: Array,
    default: null
  }
});
</script>

<template>
  <ul class="layout-menu">
    <template v-for="(item, i) in model" :key="i">
      <AppMenuItem :item="item" root :index="i" />

      <li class="menu-separator border-b mt-1"></li>
    </template>
  </ul>
</template>
