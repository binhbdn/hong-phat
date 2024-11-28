<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import {
  categoryKeys,
  viewDetails,
  showMsg,
  showFilter,
  expandedKeys,
  resetExpandedKeys,
  selectedKeys,
  resetSelectedKeys,
  view,
  setViewExpanded
} from "@/stores/homeCategory";
import Overlay from "@/components/Overlay.vue";
import CategoryHeader from "@/views/home/CategoryHeader.vue";
import ViewMoreBtn from "@/views/home/ViewMoreBtn.vue";
import DaoPhayNgonList from "@/views/san-pham/dao-phay-ngon/DaoPhayNgonList.vue";
import DaoPhayCauList from "@/views/san-pham/dao-phay-cau/DaoPhayCauList.vue";
import DaoPhayVatMepList from "@/views/san-pham/dao-phay-vat-mep/DaoPhayVatMepList.vue";
import DaoPhayBoGocList from "@/views/san-pham/dao-phay-bo-goc/DaoPhayBoGocList.vue";
import DaoPhayRTrongList from "@/views/san-pham/dao-phay-r-trong/DaoPhayRTrongList.vue";
import DaoPhayPhaThoList from "@/views/san-pham/dao-phay-pha-tho/DaoPhayPhaThoList.vue";
import BauKepList from "@/views/san-pham/bau-kep/BauKepList.vue";

let treeCategoriesEl;
let iconFilterEl;

const outsideClickTreeCategoriesListener = ref(null);

const onToggleShowFilter = () => {
  showMsg.value = false;
  showFilter.value = !showFilter.value;
};

const onToggleShowAll = (showAll) => {
  resetExpandedKeys();
  resetSelectedKeys();
  setViewExpanded(showAll);
};

const isOutsideClickedTreeCategories = (event) => {
  if (!showFilter.value) return false;

  return !(
    treeCategoriesEl.isSameNode(event.target) ||
    treeCategoriesEl.contains(event.target) ||
    iconFilterEl.isSameNode(event.target) ||
    iconFilterEl.contains(event.target)
  );
};

const bindOutsideClickTreeCategoriesListener = () => {
  if (!outsideClickTreeCategoriesListener.value) {
    outsideClickTreeCategoriesListener.value = (event) => {
      if (isOutsideClickedTreeCategories(event)) {
        showFilter.value = false;
      }
    };
    document.addEventListener("click", outsideClickTreeCategoriesListener.value);
  }
};

const unbindOutsideClickTreeCategoriesListener = () => {
  if (outsideClickTreeCategoriesListener.value) {
    document.removeEventListener("click", outsideClickTreeCategoriesListener.value);
    outsideClickTreeCategoriesListener.value = null;
  }
};

watch(selectedKeys, (val) => {
  view.allCategories.show = Boolean(val?.allCategories);
  view.allCategories.partialChecked = Boolean(val?.allCategories?.partialChecked);

  view.pDaoPhayNgon.show = Boolean(val?.pDaoPhayNgon?.checked);
  if (view.pDaoPhayNgon.show) view.pDaoPhayNgon.expanded = true;
  else view.pDaoPhayNgon.showAll = false;

  view.pDaoPhayCau.show = Boolean(val?.pDaoPhayCau?.checked);
  if (view.pDaoPhayCau.show) view.pDaoPhayCau.expanded = true;
  else view.pDaoPhayCau.showAll = false;

  view.pDaoPhayVatMep.show = Boolean(val?.pDaoPhayVatMep?.checked);
  if (view.pDaoPhayVatMep.show) view.pDaoPhayVatMep.expanded = true;
  else view.pDaoPhayVatMep.showAll = false;

  view.pDaoPhayBoGoc.show = Boolean(val?.pDaoPhayBoGoc?.checked);
  if (view.pDaoPhayBoGoc.show) view.pDaoPhayBoGoc.expanded = true;
  else view.pDaoPhayBoGoc.showAll = false;

  view.pDaoPhayRTrong.show = Boolean(val?.pDaoPhayRTrong?.checked);
  if (view.pDaoPhayRTrong.show) view.pDaoPhayRTrong.expanded = true;
  else view.pDaoPhayRTrong.showAll = false;

  view.pDaoPhayPhaTho.show = Boolean(val?.pDaoPhayPhaTho?.checked);
  if (view.pDaoPhayPhaTho.show) view.pDaoPhayPhaTho.expanded = true;
  else view.pDaoPhayPhaTho.showAll = false;

  view.pBauKep.show = Boolean(val?.pBauKep?.checked);
  if (view.pBauKep.show) view.pBauKep.expanded = true;
  else view.pBauKep.showAll = false;
});

watch(
  view,
  () => {
    if (view.pDaoPhayNgon.expanded) view.pDaoPhayNgon.render = true;
    if (view.pDaoPhayCau.expanded) view.pDaoPhayCau.render = true;
    if (view.pDaoPhayVatMep.expanded) view.pDaoPhayVatMep.render = true;
    if (view.pDaoPhayBoGoc.expanded) view.pDaoPhayBoGoc.render = true;
    if (view.pDaoPhayRTrong.expanded) view.pDaoPhayRTrong.render = true;
    if (view.pDaoPhayPhaTho.expanded) view.pDaoPhayPhaTho.render = true;
    if (view.pBauKep.expanded) view.pBauKep.render = true;
  },
  { deep: true }
);

onMounted(() => {
  treeCategoriesEl = document.querySelector(".home-tree-categories");
  iconFilterEl = document.querySelector(".home-icon-filter");
  bindOutsideClickTreeCategoriesListener();
});

onBeforeUnmount(unbindOutsideClickTreeCategoriesListener);
</script>

<template>
  <div class="flex flex-col text-gray-700 relative">
    <Message v-if="showMsg" class="home-products-msg hover:bg-yellow-200 mb-3">
      <div>
        {{ $t("h.msgFilterCategories") }}
      </div>
      <div>
        {{ $t("h.msgChangeViewMode") }}
      </div>
    </Message>

    <div class="home-products-icons w-fit h-6 absolute flex gap-x-4">
      <div class="flex gap-x-1">
        <div
          v-tooltip.left="$t('h.gridView')"
          class="w-6 h-6 flex justify-center items-center hover:text-primary bg-gray-200 hover:bg-primary hover:bg-opacity-20 rounded-md cursor-pointer z-10"
          :class="viewDetails ? 'text-gray-700' : 'bg-primary/20 text-primary/70'"
          @click="viewDetails = false"
        >
          <i class="pi pi-th-large" />
        </div>
        <div
          v-tooltip.left="$t('h.listView')"
          class="home-icon-highlight w-6 h-6 flex justify-center items-center text-gray-700 hover:text-primary bg-gray-200 hover:bg-primary hover:bg-opacity-20 rounded-md cursor-pointer z-10"
          :class="viewDetails ? 'bg-primary/20 text-primary/70' : 'text-gray-700'"
          @click="viewDetails = true"
        >
          <i class="pi pi-list" />
        </div>
      </div>

      <div class="flex gap-x-1">
        <div
          v-tooltip.left="$t('h.showAllCategoryNamesOnly')"
          class="home-icon-highlight w-6 h-6 flex justify-center items-center text-gray-700 hover:text-primary bg-gray-200 hover:bg-primary hover:bg-opacity-20 rounded-md cursor-pointer z-10"
          @click="onToggleShowAll(false)"
        >
          <i class="pi pi-list-check" />
        </div>
        <div
          v-tooltip.left="$t('h.showProductsFromAllCategories')"
          class="home-icon-highlight w-6 h-6 flex justify-center items-center text-gray-700 hover:text-primary bg-gray-200 hover:bg-primary hover:bg-opacity-20 rounded-md cursor-pointer z-10"
          @click="onToggleShowAll(true)"
        >
          <i class="pi pi-arrows-alt" />
        </div>
      </div>

      <div
        v-tooltip.left="showFilter ? $t('h.hideFilter') : $t('h.showFilter')"
        class="home-icon-filter home-icon-highlight w-6 h-6 flex justify-center items-center text-gray-700 hover:text-primary bg-gray-200 hover:bg-primary hover:bg-opacity-20 rounded-md cursor-pointer z-10"
        :class="view.allCategories.partialChecked ? 'text-primary/70' : 'text-gray-700'"
        @click.prevent="onToggleShowFilter()"
      >
        <i class="pi" :class="showFilter ? 'pi-filter-slash' : view.allCategories.partialChecked ? 'pi-filter-fill' : 'pi-filter'" />
      </div>
    </div>

    <Overlay v-show="showFilter" class="sm:hidden" />
    <div v-show="showFilter" class="home-tree-categories rounded-t-xl">
      <div class="flex justify-between items-center mb-2 sm:hidden">
        <div class="font-semibold">
          {{ $t("h.selectCategories") }}
        </div>
        <PrimeButton text icon="pi pi-times" severity="secondary" class="w-6 h-6" @click="onToggleShowFilter()" />
      </div>
      <Tree
        v-model:expandedKeys="expandedKeys"
        v-model:selectionKeys="selectedKeys"
        :value="categoryKeys"
        selectionMode="checkbox"
        class="sm:absolute sm:-top-4 sm:-right-2"
      >
        <template #default="{ node }">
          <div class="text-[13px]/[18px]">
            {{ $t(node.key) }}
          </div>
        </template>
      </Tree>
    </div>

    <div class="min-h-48 flex flex-col gap-y-1">
      <div v-show="!view.allCategories.show" class="text-primary/70">
        {{ $t("h.selectNoneCategories") }}
      </div>

      <div v-show="view.pDaoPhayNgon.show" class="home-category" :class="{ expanded: view.pDaoPhayNgon.expanded }">
        <CategoryHeader v-model:expanded="view.pDaoPhayNgon.expanded" name="pDaoPhayNgon" />
        <DaoPhayNgonList v-if="view.pDaoPhayNgon.render" v-show="view.pDaoPhayNgon.expanded" :viewDetails="viewDetails" :showAll="view.pDaoPhayNgon.showAll">
          <template #last>
            <ViewMoreBtn v-model:showAll="view.pDaoPhayNgon.showAll" />
          </template>
        </DaoPhayNgonList>
      </div>

      <div v-show="view.pDaoPhayCau.show" class="home-category" :class="{ expanded: view.pDaoPhayCau.expanded }">
        <CategoryHeader v-model:expanded="view.pDaoPhayCau.expanded" name="pDaoPhayCau" />
        <DaoPhayCauList v-if="view.pDaoPhayCau.render" v-show="view.pDaoPhayCau.expanded" :viewDetails="viewDetails" :showAll="view.pDaoPhayCau.showAll">
          <template #last>
            <ViewMoreBtn v-model:showAll="view.pDaoPhayCau.showAll" />
          </template>
        </DaoPhayCauList>
      </div>

      <div v-show="view.pDaoPhayVatMep.show" class="home-category" :class="{ expanded: view.pDaoPhayVatMep.expanded }">
        <CategoryHeader v-model:expanded="view.pDaoPhayVatMep.expanded" name="pDaoPhayVatMep" />
        <DaoPhayVatMepList
          v-if="view.pDaoPhayVatMep.render"
          v-show="view.pDaoPhayVatMep.expanded"
          :viewDetails="viewDetails"
          :showAll="view.pDaoPhayVatMep.showAll"
        >
          <template #last>
            <ViewMoreBtn v-model:showAll="view.pDaoPhayVatMep.showAll" />
          </template>
        </DaoPhayVatMepList>
      </div>

      <div v-show="view.pDaoPhayBoGoc.show" class="home-category" :class="{ expanded: view.pDaoPhayBoGoc.expanded }">
        <CategoryHeader v-model:expanded="view.pDaoPhayBoGoc.expanded" name="pDaoPhayBoGoc" />
        <DaoPhayBoGocList
          v-if="view.pDaoPhayBoGoc.render"
          v-show="view.pDaoPhayBoGoc.expanded"
          :viewDetails="viewDetails"
          :showAll="view.pDaoPhayBoGoc.showAll"
        >
          <template #last>
            <ViewMoreBtn v-model:showAll="view.pDaoPhayBoGoc.showAll" />
          </template>
        </DaoPhayBoGocList>
      </div>

      <div v-show="view.pDaoPhayRTrong.show" class="home-category" :class="{ expanded: view.pDaoPhayRTrong.expanded }">
        <CategoryHeader v-model:expanded="view.pDaoPhayRTrong.expanded" name="pDaoPhayRTrong" />
        <DaoPhayRTrongList v-if="view.pDaoPhayRTrong.render" v-show="view.pDaoPhayRTrong.expanded" :viewDetails="viewDetails" />
        <!--
        <DaoPhayRTrongList v-if="view.pDaoPhayRTrong.render" v-show="view.pDaoPhayRTrong.expanded" :viewDetails="viewDetails" :showAll="view.pDaoPhayRTrong.showAll">
          <template #last>
            <ViewMoreBtn v-model:showAll="view.pDaoPhayRTrong.showAll" />
          </template>
        </DaoPhayRTrongList>
        -->
      </div>

      <div v-show="view.pDaoPhayPhaTho.show" class="home-category" :class="{ expanded: view.pDaoPhayPhaTho.expanded }">
        <CategoryHeader v-model:expanded="view.pDaoPhayPhaTho.expanded" name="pDaoPhayPhaTho" />
        <DaoPhayPhaThoList v-if="view.pDaoPhayPhaTho.render" v-show="view.pDaoPhayPhaTho.expanded" :viewDetails="viewDetails" />
        <!--
        <DaoPhayPhaThoList v-if="view.pDaoPhayPhaTho.render" v-show="view.pDaoPhayPhaTho.expanded" :viewDetails="viewDetails" :showAll="view.pDaoPhayPhaTho.showAll">
          <template #last>
            <ViewMoreBtn v-model:showAll="view.pDaoPhayPhaTho.showAll" />
          </template>
        </DaoPhayPhaThoList>
        -->
      </div>

      <div v-show="view.pBauKep.show" class="home-category" :class="{ expanded: view.pBauKep.expanded }">
        <CategoryHeader v-model:expanded="view.pBauKep.expanded" name="pBauKep" />
        <BauKepList v-if="view.pBauKep.render" v-show="view.pBauKep.expanded" :viewDetails="viewDetails" :showAll="view.pBauKep.showAll">
          <template #last>
            <ViewMoreBtn v-model:showAll="view.pBauKep.showAll" />
          </template>
        </BauKepList>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.home-products-msg:hover + .home-products-icons .home-icon-highlight {
  color: var(--primary-color);
  background-color: var(--yellow-200);
}
.home-products-icons {
  top: -2.25rem;
  right: 0;

  @media (min-width: 640px) {
    top: -2.75rem;
  }
}
.home-tree-categories {
  z-index: 20;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
  background-color: white;
  border-color: rgb(156 163 175);

  @media (min-width: 640px) {
    position: relative;
    padding: 0;
    background-color: transparent;
    border-color: transparent;
  }
}
.home-category + .home-category.expanded {
  margin-top: 0.5rem;
}
.home-category.expanded + .home-category {
  margin-top: 0.5rem;
}
</style>
