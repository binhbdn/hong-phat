<script setup>
import { computed, watch, ref, onBeforeUnmount } from "vue";
import { layoutState, isSidebarActive } from "@/composable/layout";
import AppTopbar from "./AppTopbar.vue";
import AppSidebar from "./AppSidebar.vue";

const outsideClickListener = ref(null);
const sidebarRef = ref(null);
const topbarRef = ref(null);

watch(isSidebarActive, (newVal) => {
  if (newVal) {
    bindOutsideClickListener();
  } else {
    unbindOutsideClickListener();
  }
});

onBeforeUnmount(() => {
  unbindOutsideClickListener();
});

const containerClass = computed(() => ({
  "layout-static-inactive": layoutState.staticMenuDesktopInactive,
  "layout-mobile-active": layoutState.staticMenuMobileActive
}));

const bindOutsideClickListener = () => {
  if (!outsideClickListener.value) {
    outsideClickListener.value = (event) => {
      if (isOutsideClicked(event)) {
        layoutState.staticMenuMobileActive = false;
      }
    };
    document.addEventListener("click", outsideClickListener.value);
  }
};
const unbindOutsideClickListener = () => {
  if (outsideClickListener.value) {
    document.removeEventListener("click", outsideClickListener);
    outsideClickListener.value = null;
  }
};
const isOutsideClicked = (event) => {
  const sidebarEl = sidebarRef?.value.$el;
  const topbarEl = document.querySelector(".topbar-menubutton");
  return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target));
};
</script>

<template>
  <div class="layout-container layout-light layout-static layout-primarycolor-menu" :class="{ ...containerClass }">
    <AppSidebar ref="sidebarRef" />

    <div class="layout-content-wrapper">
      <AppTopbar ref="topbarRef" />
      <div class="layout-content">
        <RouterView />
      </div>
    </div>

    <div class="layout-mask" />
  </div>
</template>
