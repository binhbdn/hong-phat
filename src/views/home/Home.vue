<script setup>
import { ref, computed, watch } from "vue";
import { isDesktop } from "@/composable/layout";
import PageHasFooter from "@/components/PageHasFooter.vue";
import Banner from "./Banner.vue";
import Categories from "./Categories.vue";
import AboutUs from "./AboutUs.vue";

const props = defineProps(["view"]);

const scrollToTop = ref(false);
const viewMode = ref(0);
const activeMenus = ref([0, 1, 2]);

const activeMenu0 = computed(() => {
  if (isDesktop.value) return activeMenus.value.includes(0);
  if (viewMode.value === 0) return activeMenus.value.includes(0);
  return false;
});
const activeMenu1 = computed(() => {
  if (isDesktop.value) return activeMenus.value.includes(1);
  if (viewMode.value === 0) return activeMenus.value.includes(1);
  return viewMode.value === 1 && activeMenus.value.includes(0);
});
const activeMenu2 = computed(() => {
  if (isDesktop.value) return activeMenus.value.includes(2);
  if (viewMode.value === 0) return activeMenus.value.includes(2);
  return viewMode.value === 2 && activeMenus.value.includes(0);
});
const onlyOneMenu = computed(() => !isDesktop.value && viewMode.value !== 0);

const setActiveMenus = (mode) => {
  if (mode === 0) {
    activeMenus.value = [0, 1, 2];
  } else if (isDesktop.value) {
    if (mode === 1) {
      activeMenus.value = [1, 2];
    } else {
      activeMenus.value = [2];
    }
  } else {
    activeMenus.value = [0];
  }
};

const updateRoute = (mode) => {
  if (mode === 0) {
    if (props.view) {
      window.$router.replace({ name: "pageHome" });
    }
  } else if (mode === 1) {
    if (props.view !== "san-pham") {
      window.$router.replace({ name: "pageHome", query: { view: "san-pham" } });
    }
  } else {
    if (props.view !== "ve-chung-toi") {
      window.$router.replace({ name: "pageHome", query: { view: "ve-chung-toi" } });
    }
  }
};

const onScrollToTop = () => {
  scrollToTop.value = true;
};

const onSetViewMode = (mode) => {
  viewMode.value = mode;
  setActiveMenus(mode);
  updateRoute(mode);
};

const onFocusMenu = (mode) => {
  onSetViewMode(mode);
  onScrollToTop();
};

const onTabOpen = (e) => {
  if (onlyOneMenu.value) return;
  if (viewMode.value !== e.index) onSetViewMode(e.index);
};

watch(
  () => props.view,
  (view) => {
    const mode = view === "ve-chung-toi" ? 2 : view === "san-pham" ? 1 : 0;
    if (viewMode.value !== mode) onSetViewMode(mode);
  },
  { immediate: true }
);
</script>

<template>
  <PageHasFooter v-model:scrollToTop="scrollToTop">
    <Accordion v-model:activeIndex="activeMenus" multiple @tabOpen="onTabOpen">
      <AccordionTab v-if="isDesktop || viewMode === 0" :header="$t('services')" contentClass="bg-banner">
        <Banner />
      </AccordionTab>
      <AccordionTab v-if="isDesktop || viewMode !== 2" :header="$t('productCategories')">
        <Categories />
      </AccordionTab>
      <AccordionTab v-if="isDesktop || viewMode !== 1" :header="$t('aboutUs')">
        <AboutUs />
      </AccordionTab>
    </Accordion>

    <template #footer>
      <div class="flex sm:justify-center relative">
        <div class="flex justify-between gap-x-2 sm:gap-x-4">
          <PrimeButton
            :label="$t('title.menuHome')"
            icon="pi pi-home"
            iconPos="top"
            iconClass="!mb-1"
            text
            :severity="activeMenu0 ? 'primary' : 'secondary'"
            class="text-xs/none px-1 py-0.5"
            @click="onFocusMenu(0)"
          />
          <PrimeButton
            :label="$t('productCategories')"
            icon="pi pi-sparkles"
            iconPos="top"
            iconClass="!mb-1"
            text
            :severity="activeMenu1 ? 'primary' : 'secondary'"
            class="text-xs/none px-1 py-0.5"
            @click="onFocusMenu(1)"
          />
          <PrimeButton
            :label="$t('aboutUs')"
            icon="pi pi-info-circle"
            iconPos="top"
            iconClass="!mb-1"
            text
            :severity="activeMenu2 ? 'primary' : 'secondary'"
            class="text-xs/none px-1 py-0.5"
            @click="onFocusMenu(2)"
          />
        </div>

        <div
          class="absolute top-1 right-1.5 sm:right-2 w-8 h-8 flex justify-center items-center rounded-full bg-primary bg-opacity-20 hover:bg-opacity-40 cursor-pointer"
          @click="onScrollToTop()"
        >
          <i class="pi pi-angle-double-up text-primary" />
        </div>
      </div>
    </template>
  </PageHasFooter>
</template>

<style lang="scss">
.bg-banner .p-accordion-content {
  padding: 0;
  background-color: transparent;
}
</style>
