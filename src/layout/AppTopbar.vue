<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useI18n } from "vue-i18n-lite";
import { isSidebarActive, onMenuToggle } from "@/composable/layout";
import AppTitle from "./AppTitle.vue";

const { current, changeLocale } = useI18n();

const op = ref(null);
const outsideClickListener = ref(null);
const topbarMenuActive = ref(false);

onMounted(() => {
  bindOutsideClickListener();
});

onBeforeUnmount(() => {
  unbindOutsideClickListener();
});

const toggle = (event) => {
  op.value.toggle(event);
};

const onChangeLocale = (locale) => {
  changeLocale(locale);
  op.value.hide();
};

const bindOutsideClickListener = () => {
  if (!outsideClickListener.value) {
    outsideClickListener.value = (event) => {
      if (isOutsideClicked(event)) {
        topbarMenuActive.value = false;
      }
    };
    document.addEventListener("click", outsideClickListener.value);
  }
};
const unbindOutsideClickListener = () => {
  if (outsideClickListener.value) {
    document.removeEventListener("click", outsideClickListener.value);
    outsideClickListener.value = null;
  }
};
const isOutsideClicked = (event) => {
  if (!topbarMenuActive.value) return;

  const sidebarEl = document.querySelector(".layout-topbar-menu");
  const topbarEl = document.querySelector(".layout-topbar-menu-button");

  return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target));
};
</script>

<template>
  <div class="layout-topbar bg-white shadow-md px-2 sm:px-4 py-2 sm:py-4 mb-2 sm:mb-4">
    <div class="topbar-start">
      <button class="topbar-menubutton p-link p-trigger" @click="onMenuToggle()">
        <i class="pi pi-bars" />
      </button>

      <AppTitle class="topbar-page-title" />
    </div>

    <RouterLink v-show="!isSidebarActive" :to="{ name: 'pHome' }" class="topbar-logo flex-shrink-0">
      <img src="/img/logo.png" class="h-10" />
    </RouterLink>

    <div class="topbar-end gap-x-2 sm:gap-x-4">
      <i class="pi pi-search text-base hover:text-primary cursor-pointer" @click="$router.push({ name: 'pTimKiem' })" />
      <div class="w-6 h-6 flex justify-center items-center text-gray-500 cursor-pointer" @click="toggle">
        <img :src="`/svg/locale/${current}.svg`" class="h-4" />
      </div>

      <OverlayPanel ref="op">
        <div class="flex items-center gap-x-2 cursor-pointer" :class="{ 'text-primary': current === 'vi' }" @click="onChangeLocale('vi')">
          <img src="/svg/locale/vi.svg" class="h-4" />
          <span class="whitespace-nowrap"> Tiếng Việt </span>
        </div>
        <div class="flex items-center gap-x-2 cursor-pointer mt-2" :class="{ 'text-primary': current === 'cn' }" @click="onChangeLocale('cn')">
          <img src="/svg/locale/cn.svg" class="h-4" />
          <span class="whitespace-nowrap"> 中国人 </span>
        </div>
      </OverlayPanel>
    </div>
  </div>
</template>
