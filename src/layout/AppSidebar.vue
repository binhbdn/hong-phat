<script setup>
import AppMenu from "./AppMenu.vue";
</script>

<template>
  <div class="layout-sidebar px-5">
    <router-link :to="{ name: 'manageProducts' }" class="app-logo flex justify-center gap-4 px-2">
      <img src="/favicon.svg" class="w-10 h-10" />
      <span class="font-bold">Virtual Referral Network</span>
    </router-link>

    <div class="layout-menu-container">
      <AppMenu />
    </div>
  </div>
</template>
