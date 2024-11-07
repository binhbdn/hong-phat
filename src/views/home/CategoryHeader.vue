<script setup>
defineProps({
  expanded: Boolean,
  name: String
});
defineEmits(["update:expanded"]);
</script>

<template>
  <div class="flex justify-between sm:justify-start items-center gap-x-1" :class="{ 'mb-2': expanded }">
    <div
      class="sm:order-1 font-semibold text-sm hover:text-primary cursor-pointer"
      :class="expanded ? 'text-primary/70' : 'text-gray-300'"
      @click="$router.push({ name })"
    >
      {{ $t(name) }}
    </div>
    <div
      class="w-8 sm:w-6 h-5 flex justify-center items-center text-primary/70 hover:bg-primary/20 hover:text-primary rounded-md cursor-pointer"
      @click="$emit('update:expanded', !expanded)"
    >
      <i class="sm:hidden pi" :class="expanded ? 'pi-angle-up' : 'pi-angle-down'" />
      <i class="hidden sm:block pi" :class="expanded ? 'pi-angle-up' : 'pi-angle-right'" />
    </div>
  </div>
</template>
