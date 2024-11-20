<script setup>
defineProps({
  item: Object
});
</script>

<template>
  <div class="ribbon">
    {{ item.hardness }}
    <span v-if="item.cutStyle === 'csBall'" class="text-[10px]">
      {{ `R${item.bladeRadius.min}-R${item.bladeRadius.max}` }}
    </span>
    <span v-else class="text-[10px]">
      {{ `D${item.bladeDiameter.min}-D${item.bladeDiameter.max}` }}
    </span>
  </div>
</template>
