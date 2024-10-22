<script setup>
import { ref, onBeforeMount, watch } from "vue";
import { layoutState, setActiveMenuItem, onMenuToggle } from "@/composable/layout";

const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  },
  index: {
    type: Number,
    default: 0
  },
  root: {
    type: Boolean,
    default: true
  },
  parentItemKey: {
    type: String,
    default: null
  }
});

const isActiveMenu = ref(false);
const itemKey = ref(null);

onBeforeMount(() => {
  itemKey.value = props.parentItemKey ? `${props.parentItemKey}-${props.index}` : String(props.index);

  const activeItem = layoutState.activeMenuItem;

  isActiveMenu.value = activeItem === itemKey.value || activeItem ? activeItem.startsWith(`${itemKey.value}-`) : false;
});

watch(
  () => layoutState.activeMenuItem,
  (newVal) => {
    isActiveMenu.value = newVal === itemKey.value || newVal.startsWith(`${itemKey.value}-`);
  }
);

watch(
  () => window.$route.path,
  (newPath) => {
    if (props.item.to && props.item.to === newPath) {
      setActiveMenuItem(itemKey);
    }
  },
  { immediate: true }
);
const itemClick = async (event, item) => {
  if (item.disabled) {
    event.preventDefault();
    return;
  }

  const { staticMenuMobileActive } = layoutState;

  if ((item.to || item.url) && staticMenuMobileActive.value) {
    onMenuToggle();
  }

  if (item.command) {
    item.command({ originalEvent: event, item: item });
  }

  if (item.items) {
    setActiveMenuItem(isActiveMenu.value ? props.parentItemKey : itemKey);
  } else {
    setActiveMenuItem(itemKey);
  }

  if (item?.autoGoTo && !checkActiveItem(item)) {
    window.$router.push(item.autoGoTo);
  }
};

const checkActiveRoute = (item) => (typeof item.to === "object" ? window.$route.name === item.to.name : window.$route.path === item.to);
const checkActiveItem = (item) => {
  if (item?.items) return item.items.some((i) => checkActiveItem(i));
  if (item?.to) {
    const isActiveRoute = checkActiveRoute(item);
    if (isActiveRoute) return true;
    if (item?.hiddenItems) return item.hiddenItems.some((i) => checkActiveRoute(i));
  }
  return false;
};
</script>

<template>
  <li :class="{ 'layout-root-menuitem': root, 'active-menuitem': isActiveMenu }">
    <a
      v-if="!item.to || item.items"
      :href="item.url"
      class="rounded-md"
      :class="[item.class, { 'active-route white-space-nowrap': checkActiveItem(item) }]"
      :target="item.target"
      tabindex="0"
      @click="itemClick($event, item)"
    >
      <i :class="item.icon" class="layout-menuitem-icon"></i>
      <span class="white-space-nowrap">
        {{ $t(`title.${item.label}`) }}
      </span>
      <i v-if="item.items" class="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
    </a>
    <RouterLink
      v-if="item.to && !item.items"
      class="rounded-md"
      :class="[item.class, { 'active-route active-route-bg white-space-nowrap bg-primary bg-opacity-20': checkActiveItem(item) }]"
      tabindex="0"
      :to="item.to"
      @click="itemClick($event, item)"
    >
      <i :class="item.icon" class="layout-menuitem-icon"></i>
      <span class="white-space-nowrap">
        {{ $t(`title.${item.label}`) }}
      </span>
      <i v-if="item.items" class="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
    </RouterLink>

    <ul v-if="item.items">
      <AppMenuItem v-for="(child, i) in item.items" :key="child" :index="i" :item="child" :parentItemKey="itemKey" :root="false" />
    </ul>
  </li>
</template>
