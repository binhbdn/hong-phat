<script setup>
import { useToast } from "primevue/usetoast";

window.$toast = useToast();
</script>

<template>
  <RouterView />
  <Toast />
</template>
