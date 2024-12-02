<script setup>
defineProps(["sortable"]);
defineEmits(["update:sortable"]);
</script>

<template>
  <div class="flex justify-end my-1.5">
    <div
      v-tooltip.left="sortable ? $t('hideSortBtns') : $t('showSortBtns')"
      class="w-6 h-6 flex justify-center items-center text-gray-700 hover:text-primary bg-gray-200 hover:bg-primary hover:bg-opacity-20 rounded-md cursor-pointer z-10"
      :class="sortable ? 'bg-primary/20 text-primary/70' : 'text-gray-700'"
      @click="$emit('update:sortable', !sortable)"
    >
      <i class="pi" :class="sortable ? 'pi-sort-alt-slash' : 'pi-sort-alt'" />
    </div>
  </div>
</template>
