<script setup>
import { useToast } from "primevue/usetoast";
import { useRouter, useRoute } from "vue-router";
import { useClipboard } from "@vueuse/core";

window.$toast = useToast();
window.$toastError = (detail, summary, life = 3000) => window.$toast.add({ severity: "error", summary, detail, life });
window.$toastSuccess = (detail, summary, life = 3000) => window.$toast.add({ severity: "success", summary, detail, life });
window.$router = useRouter();
window.$route = useRoute();

const { copy } = useClipboard({ legacy: true });
window.$copy = (text) => {
  copy(text);
  window.$toastSuccess("Đã sao chép");
};
</script>

<template>
  <RouterView class="text-sm/5" />
  <Toast />
</template>
