import { toRefs, reactive, computed } from "vue";

const layoutState = reactive({
  staticMenuDesktopInactive: false,
  staticMenuMobileActive: false,
  activeMenuItem: null
});

export function useLayout() {
  const setActiveMenuItem = (item) => {
    layoutState.activeMenuItem = item.value || item;
  };

  const onMenuToggle = () => {
    if (window.innerWidth > 991) {
      layoutState.staticMenuDesktopInactive = !layoutState.staticMenuDesktopInactive;
    } else {
      layoutState.staticMenuMobileActive = !layoutState.staticMenuMobileActive;
    }
  };

  const isSidebarActive = computed(() => layoutState.staticMenuMobileActive);

  const isDesktop = computed(() => window.innerWidth > 991);

  return {
    layoutState: toRefs(layoutState),
    onMenuToggle,
    isSidebarActive,
    setActiveMenuItem,
    isDesktop
  };
}
