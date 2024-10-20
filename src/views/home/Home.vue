<script setup>
import { ref, watch } from "vue";
import PageHasFooter from "@/components/PageHasFooter.vue";
import Banner from "./Banner.vue";

const props = defineProps(["menu"]);
const activeMenu = ref(null);

watch(
  activeMenu,
  (val) => {
    const menu = val === 1 ? "ve-chung-toi" : val === 2 ? "lien-he" : "san-pham-tieu-bieu";
    window.$router.replace({ name: "pageHome", query: { menu } });
  },
  { immediate: true }
);

watch(
  () => props.menu,
  (val) => {
    activeMenu.value = val === "ve-chung-toi" ? 1 : val === "lien-he" ? 2 : 0;
  },
  { immediate: true }
);
</script>

<template>
  <PageHasFooter>
    <div v-show="activeMenu === 0" class="flex flex-col gap-y-3">
      <Banner class="bg-white rounded-lg shadow-lg" />

      <div class="bg-white rounded-lg shadow-lg p-2 sm:p-3">
        TODO: Các sản phẩm tiêu biểu
        <div class="h-screen"></div>
      </div>
    </div>

    <div v-show="activeMenu === 1" class="bg-white rounded-lg shadow-lg p-2 sm:p-3">
      TODO: Nội dung giới thiệu
      <div class="h-screen"></div>
    </div>

    <div v-show="activeMenu === 2" class="bg-white rounded-lg shadow-lg p-2 sm:p-3">
      TODO: nội dung liên hệ
      <div class="h-screen"></div>
    </div>

    <template #footer>
      <div class="flex justify-center">
        <div class="flex justify-between gap-x-2 sm:gap-x-4">
          <PrimeButton
            :label="$t('typicalProducts')"
            text
            :severity="activeMenu === 0 ? 'primary' : 'secondary'"
            class="flex sm:hidden h-9 whitespace-nowrap px-1"
            @click="activeMenu = 0"
          />
          <PrimeButton
            :label="$t('typicalProducts')"
            icon="pi pi-sparkles"
            :outlined="activeMenu !== 0"
            :severity="activeMenu === 0 ? 'primary' : 'secondary'"
            class="hidden sm:flex h-9 whitespace-nowrap"
            @click="activeMenu = 0"
          />
          <PrimeButton
            :label="$t('aboutUs')"
            text
            :severity="activeMenu === 1 ? 'primary' : 'secondary'"
            class="flex sm:hidden h-9 whitespace-nowrap px-1"
            @click="activeMenu = 1"
          />
          <PrimeButton
            :label="$t('aboutUs')"
            icon="pi pi-info-circle"
            :outlined="activeMenu !== 1"
            :severity="activeMenu === 1 ? 'primary' : 'secondary'"
            class="hidden sm:flex h-9 whitespace-nowrap"
            @click="activeMenu = 1"
          />
          <PrimeButton
            :label="$t('contact')"
            text
            :severity="activeMenu === 2 ? 'primary' : 'secondary'"
            class="flex sm:hidden h-9 whitespace-nowrap px-1"
            @click="activeMenu = 2"
          />
          <PrimeButton
            :label="$t('contact')"
            icon="pi pi-address-book"
            :outlined="activeMenu !== 2"
            :severity="activeMenu === 2 ? 'primary' : 'secondary'"
            class="hidden sm:flex h-9 whitespace-nowrap"
            @click="activeMenu = 2"
          />
        </div>
      </div>
    </template>
  </PageHasFooter>
</template>
