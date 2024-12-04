<script setup>
import { viewDetails } from "@/stores/listPage";
import ListLayout from "@/views/san-pham/cmps/ListLayout.vue";
import ListItems from "./ListItems.vue";
</script>

<template>
  <ListLayout parentRouteName="pManhDao">
    <ListItems :viewDetails="viewDetails" />
  </ListLayout>
</template>
