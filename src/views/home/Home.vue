<script setup>
import { ref, computed, watch } from "vue";
import { isDesktop } from "@/composable/layout";
import PageHasFooter from "@/components/PageHasFooter.vue";
import Banner from "./Banner.vue";
import Categories from "./Categories.vue";
import AboutUs from "./AboutUs.vue";

const props = defineProps(["view"]);

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

const onSetViewMode = (mode) => {
  viewMode.value = mode;
  setActiveMenus(mode);
  updateRoute(mode);
};

const onTabOpen = (e) => {
  onSetViewMode(e.index);
};

watch(
  () => props.view,
  (view) => {
    const mode = view === "ve-chung-toi" ? 2 : view === "san-pham" ? 1 : 0;
    onSetViewMode(mode);
  },
  { immediate: true }
);
</script>

<template>
  <PageHasFooter>
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
      <div class="flex justify-center">
        <div class="flex justify-between gap-x-2 sm:gap-x-4">
          <PrimeButton
            :label="$t('services')"
            text
            :severity="activeMenu0 ? 'primary' : 'secondary'"
            class="flex sm:hidden h-9 whitespace-nowrap px-1"
            @click="onSetViewMode(0)"
          />
          <PrimeButton
            :label="$t('services')"
            icon="pi pi-address-book"
            :outlined="!activeMenu0"
            :severity="activeMenu0 ? 'primary' : 'secondary'"
            class="hidden sm:flex h-9 whitespace-nowrap"
            @click="onSetViewMode(0)"
          />
          <PrimeButton
            :label="$t('productCategories')"
            text
            :severity="activeMenu1 ? 'primary' : 'secondary'"
            class="flex sm:hidden h-9 whitespace-nowrap px-1"
            @click="onSetViewMode(1)"
          />
          <PrimeButton
            :label="$t('productCategories')"
            icon="pi pi-sparkles"
            :outlined="!activeMenu1"
            :severity="activeMenu1 ? 'primary' : 'secondary'"
            class="hidden sm:flex h-9 whitespace-nowrap"
            @click="onSetViewMode(1)"
          />
          <PrimeButton
            :label="$t('aboutUs')"
            text
            :severity="activeMenu2 ? 'primary' : 'secondary'"
            class="flex sm:hidden h-9 whitespace-nowrap px-1"
            @click="onSetViewMode(2)"
          />
          <PrimeButton
            :label="$t('aboutUs')"
            icon="pi pi-info-circle"
            :outlined="!activeMenu2"
            :severity="activeMenu2 ? 'primary' : 'secondary'"
            class="hidden sm:flex h-9 whitespace-nowrap"
            @click="onSetViewMode(2)"
          />
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
