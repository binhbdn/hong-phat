<script setup>
import { computed } from "vue";

const props = defineProps({
  item: Object
});

const showRadius = computed(() => props.item.cutStyle === "csBall" || props.item.cutStyle === "csCornerRounding");
</script>

<template>
  <div class="ribbon">
    {{ item.hardness }}
    <span v-if="showRadius" class="text-[10px]">
      {{ `R${item.bladeRadius.min}-R${item.bladeRadius.max}` }}
    </span>
    <span v-else class="text-[10px]">
      {{ `D${item.bladeDiameter.min}-D${item.bladeDiameter.max}` }}
    </span>
  </div>
</template>
