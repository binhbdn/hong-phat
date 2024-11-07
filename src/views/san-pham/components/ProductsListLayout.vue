<script setup>
import PageHasTitle from "@/components/PageHasTitle.vue";
import ViewModes from "@/views/san-pham/components/ViewModes.vue";
</script>

<template>
  <PageHasTitle>
    <template #headerIcons>
      <ViewModes />
    </template>

    <slot />
  </PageHasTitle>
</template>
