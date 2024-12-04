<script setup>
import PageHasTitle from "@/components/PageHasTitle.vue";
import ViewModes from "@/views/san-pham/cmps/ViewModes.vue";

defineProps({
  parentRouteName: String
});
</script>

<template>
  <PageHasTitle :parentRouteName="parentRouteName">
    <template #headerIcons>
      <ViewModes />
    </template>

    <slot />
  </PageHasTitle>
</template>
