<script setup>
defineProps(["codes"]);

const list = [
  {
    code: "P",
    color: "#38a1e9"
  },
  {
    code: "M",
    color: "#fbd901"
  },
  {
    code: "K",
    color: "#e60010"
  },
  {
    code: "N",
    color: "#2c9945"
  },
  {
    code: "S",
    color: "#f08300"
  },
  {
    code: "H",
    color: "#cacacf"
  }
];
</script>

<template>
  <div class="flex font-bold text-xs/6 text-black text-center">
    <div
      v-for="item in list"
      :key="item.code"
      v-tooltip.left="$t(`pm.${item.code}`)"
      :style="`background: ${item.color};`"
      class="w-6 cursor-pointer"
      :class="{ 'opacity-20': !codes.includes(item.code) }"
    >
      {{ item.code }}
    </div>
  </div>
</template>
