<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useLayout } from "@/composable/layout";
import AppBreadcrumb from "./AppBreadcrumb.vue";

const { onMenuToggle, onProfileSidebarToggle } = useLayout();
const outsideClickListener = ref(null);
const topbarMenuActive = ref(false);

onMounted(() => {
  bindOutsideClickListener();
});

onBeforeUnmount(() => {
  unbindOutsideClickListener();
});

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
    document.removeEventListener("click", outsideClickListener);
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
  <div class="layout-topbar shadow-md p-6">
    <div class="topbar-start">
      <button class="topbar-menubutton p-link p-trigger" @click="onMenuToggle()">
        <i class="pi pi-bars" />
      </button>

      <AppBreadcrumb class="topbar-breadcrumb" />
    </div>

    <div class="topbar-end">
      <ul class="topbar-menu">
        <li class="topbar-profile">
          <button class="p-link" @click="onProfileSidebarToggle()">
            <img src="/favicon.svg" />
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
