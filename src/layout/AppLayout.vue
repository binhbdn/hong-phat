<script setup>
import { computed, watch, ref, onBeforeUnmount, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useLayout } from "@/composable/layout";
import AppTopbar from "./AppTopbar.vue";
import AppSidebar from "./AppSidebar.vue";
import AppProfileSidebar from "./AppProfileSidebar.vue";
import AppBreadCrumb from "./AppBreadcrumb.vue";

const router = useRouter();
const { layoutConfig, layoutState, isSidebarActive } = useLayout();

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

onMounted(() => {
  let nextPath = "login";
  const roleAdminCms = ["admin", "supper admin"];
  const { id, role } = window.stores.user;

  if (id && roleAdminCms.includes(role)) {
    nextPath = id ? "manageProducts" : "login";
  }

  router.replace({ name: nextPath });
});

const containerClass = computed(() => ({
  "layout-light": layoutConfig.colorScheme.value === "light",
  "layout-dim": layoutConfig.colorScheme.value === "dim",
  "layout-dark": layoutConfig.colorScheme.value === "dark",
  "layout-colorscheme-menu": layoutConfig.menuTheme.value === "colorScheme",
  "layout-primarycolor-menu": layoutConfig.menuTheme.value === "primaryColor",
  "layout-transparent-menu": layoutConfig.menuTheme.value === "transparent",
  "layout-overlay": layoutConfig.menuMode.value === "overlay",
  "layout-static": layoutConfig.menuMode.value === "static",
  "layout-slim": layoutConfig.menuMode.value === "slim",
  "layout-horizontal": layoutConfig.menuMode.value === "horizontal",
  "layout-static-inactive": layoutState.staticMenuDesktopInactive.value && layoutConfig.menuMode.value === "static",
  "layout-overlay-active": layoutState.overlayMenuActive.value,
  "layout-mobile-active": layoutState.staticMenuMobileActive.value,
  "p-input-filled": layoutConfig.inputStyle.value === "filled",
  "p-ripple-disabled": !layoutConfig.ripple.value
}));

const bindOutsideClickListener = () => {
  if (!outsideClickListener.value) {
    outsideClickListener.value = (event) => {
      if (isOutsideClicked(event)) {
        layoutState.overlayMenuActive.value = false;
        layoutState.overlaySubmenuActive.value = false;
        layoutState.staticMenuMobileActive.value = false;
        layoutState.menuHoverActive.value = false;
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
  <div :class="['layout-container', { ...containerClass }]">
    <AppSidebar ref="sidebarRef" />

    <div class="layout-content-wrapper">
      <AppTopbar ref="topbarRef" />
      <AppBreadCrumb class="content-breadcrumb" />
      <div class="layout-content px-6 pb-6">
        <RouterView />
      </div>
    </div>

    <AppProfileSidebar />

    <div class="layout-mask" />
  </div>
</template>
