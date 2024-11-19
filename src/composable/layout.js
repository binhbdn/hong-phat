import { reactive, computed } from "vue";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();
export const isDesktop = computed(() => width.value > 991);

export const layoutState = reactive({
  staticMenuDesktopInactive: false,
  staticMenuMobileActive: false,
  activeMenuItem: null
});

export const isSidebarActive = computed(() => layoutState.staticMenuMobileActive);

export const setActiveMenuItem = (item) => {
  layoutState.activeMenuItem = item.value || item;
};

export const onMenuToggle = () => {
  if (window.innerWidth > 991) {
    layoutState.staticMenuDesktopInactive = !layoutState.staticMenuDesktopInactive;
  } else {
    layoutState.staticMenuMobileActive = !layoutState.staticMenuMobileActive;
  }
};
