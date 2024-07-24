<script setup>
import { useLayout } from "@/composable/layout";
import { useRouter } from "vue-router";
import { useStorage } from "@/composable/storage";

const { layoutState } = useLayout();
const router = useRouter();
const logout = () => {
  layoutState.profileSidebarVisible.value = false;
  useStorage.remove("token");
  router.replace({ name: "login" });
};
const infoUser = window.stores?.user || {};
</script>

<template>
  <Sidebar v-model:visible="layoutState.profileSidebarVisible.value" position="right" class="layout-profile-sidebar w-full sm:w-[25rem]">
    <div class="flex flex-col mx-auto md:mx-0">
      <span class="mb-2 font-semibold">Xin chào ! </span>
      <span class="text-secondary font-medium mb-8">{{ infoUser.name || "" }}</span>
      <PrimeButton label="Đăng xuất" class="bg-primary text-white p-4" @click="logout()" />
    </div>
  </Sidebar>
</template>
