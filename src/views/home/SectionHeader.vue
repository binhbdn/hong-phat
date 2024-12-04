<script setup>
defineProps({
  subheader: Boolean,
  expanded: Boolean,
  name: String
});
defineEmits(["update:expanded"]);
</script>

<template>
  <div class="group flex items-center gap-x-1 cursor-pointer" :class="{ 'mb-2': expanded, 'pl-2': subheader }" @click="$emit('update:expanded', !expanded)">
    <div
      class="flex-grow flex items-center gap-x-1 font-semibold text-sm"
      :class="expanded ? 'text-primary/70' : subheader ? 'text-gray-400' : 'text-gray-600'"
    >
      <div class="w-8 sm:w-6 h-5 flex justify-center items-center text-primary/70 group-hover:bg-primary/20 group-hover:text-primary rounded-md">
        <i class="pi" :class="expanded ? 'pi-angle-up' : 'pi-angle-right'" />
      </div>
      <div class="group-hover:text-primary">
        {{ $t(name) }}
      </div>
    </div>
    <div
      v-tooltip.left="$t('viewAll')"
      class="w-8 sm:w-6 h-5 flex justify-center items-center text-gray-500 hover:bg-primary/20 hover:text-primary rounded-md"
      @click.stop="
        $emit('update:expanded', true);
        $router.push({ name });
      "
    >
      <i class="pi pi-window-maximize text-xs" />
    </div>
  </div>
</template>
