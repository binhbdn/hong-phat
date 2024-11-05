<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import { categoryKeys, showMsg, showFilter, expandedKeys, selectedKeys, view } from "@/stores/homeCategory";
import Overlay from "@/components/Overlay.vue";
import CategoryHeader from "@/views/home/CategoryHeader.vue";
import ViewMoreBtn from "@/views/home/ViewMoreBtn.vue";
import DaoPhayNgonList from "@/views/san-pham/dao-phay-ngon/DaoPhayNgonList.vue";
import DaoPhayCauList from "@/views/san-pham/dao-phay-cau/DaoPhayCauList.vue";
import DaoPhayBoGocList from "@/views/san-pham/dao-phay-bo-goc/DaoPhayBoGocList.vue";
import DaoPhayRTrongList from "@/views/san-pham/dao-phay-r-trong/DaoPhayRTrongList.vue";
import DaoPhayPhaThoList from "@/views/san-pham/dao-phay-pha-tho/DaoPhayPhaThoList.vue";

let treeCategoriesEl;
let iconFilterEl;

const outsideClickTreeCategoriesListener = ref(null);

const onToggleShowFilter = () => {
  showMsg.value = false;
  showFilter.value = !showFilter.value;
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

onMounted(() => {
  treeCategoriesEl = document.querySelector(".home-tree-categories");
  iconFilterEl = document.querySelector(".home-icon-filter");
  bindOutsideClickTreeCategoriesListener();
});

onBeforeUnmount(unbindOutsideClickTreeCategoriesListener);
</script>

<template>
  <div class="flex flex-col text-gray-700 relative">
    <Message v-if="showMsg" class="home-msg-filter mb-3">
      {{ $t("h.msgFilterCategories") }}
    </Message>

    <div
      v-tooltip="showFilter ? $t('h.hideCategories') : $t('h.showCategories')"
      class="home-icon-filter w-6 h-6 absolute flex justify-center items-center text-gray-700 hover:text-primary bg-gray-300 hover:bg-primary hover:bg-opacity-20 rounded-md cursor-pointer z-10"
      @click.prevent="onToggleShowFilter()"
    >
      <i class="pi" :class="showFilter ? 'pi-filter-slash' : 'pi-filter'" />
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
        <DaoPhayNgonList v-show="view.pDaoPhayNgon.expanded" :showAll="view.pDaoPhayNgon.showAll">
          <template #last>
            <ViewMoreBtn v-model:showAll="view.pDaoPhayNgon.showAll" />
          </template>
        </DaoPhayNgonList>
      </div>

      <div v-show="view.pDaoPhayCau.show" class="home-category" :class="{ expanded: view.pDaoPhayCau.expanded }">
        <CategoryHeader v-model:expanded="view.pDaoPhayCau.expanded" name="pDaoPhayCau" />
        <DaoPhayCauList v-show="view.pDaoPhayCau.expanded" :showAll="view.pDaoPhayCau.showAll">
          <template #last>
            <ViewMoreBtn v-model:showAll="view.pDaoPhayCau.showAll" />
          </template>
        </DaoPhayCauList>
      </div>

      <div v-show="view.pDaoPhayVatMep.show" class="home-category" :class="{ expanded: view.pDaoPhayVatMep.expanded }">
        <CategoryHeader v-model:expanded="view.pDaoPhayVatMep.expanded" name="pDaoPhayVatMep" />
        <div v-show="view.pDaoPhayVatMep.expanded">
          Danh sách dao phay vát mép: chuẩn bị đưa vào
        </div>
        <!--
        <DaoPhayVatMepList v-show="view.pDaoPhayVatMep.expanded" :showAll="view.pDaoPhayVatMep.showAll">
          <template #last>
            <ViewMoreBtn v-model:showAll="view.pDaoPhayVatMep.showAll" />
          </template>
        </DaoPhayVatMepList>
        -->
      </div>

      <div v-show="view.pDaoPhayBoGoc.show" class="home-category" :class="{ expanded: view.pDaoPhayBoGoc.expanded }">
        <CategoryHeader v-model:expanded="view.pDaoPhayBoGoc.expanded" name="pDaoPhayBoGoc" />
        <DaoPhayBoGocList v-show="view.pDaoPhayBoGoc.expanded" :showAll="view.pDaoPhayBoGoc.showAll">
          <template #last>
            <ViewMoreBtn v-model:showAll="view.pDaoPhayBoGoc.showAll" />
          </template>
        </DaoPhayBoGocList>
      </div>

      <div v-show="view.pDaoPhayRTrong.show" class="home-category" :class="{ expanded: view.pDaoPhayRTrong.expanded }">
        <CategoryHeader v-model:expanded="view.pDaoPhayRTrong.expanded" name="pDaoPhayRTrong" />
        <DaoPhayRTrongList v-show="view.pDaoPhayRTrong.expanded" :showAll="view.pDaoPhayRTrong.showAll">
          <template #last>
            <ViewMoreBtn v-model:showAll="view.pDaoPhayRTrong.showAll" />
          </template>
        </DaoPhayRTrongList>
      </div>

      <div v-show="view.pDaoPhayPhaTho.show" class="home-category" :class="{ expanded: view.pDaoPhayPhaTho.expanded }">
        <CategoryHeader v-model:expanded="view.pDaoPhayPhaTho.expanded" name="pDaoPhayPhaTho" />
        <DaoPhayPhaThoList v-show="view.pDaoPhayPhaTho.expanded" :showAll="view.pDaoPhayPhaTho.showAll">
          <template #last>
            <ViewMoreBtn v-model:showAll="view.pDaoPhayPhaTho.showAll" />
          </template>
        </DaoPhayPhaThoList>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.home-msg-filter:hover + .home-icon-filter {
  color: var(--primary-color);
  background-color: rgb(var(--primary-rgb) / 0.2);
}
.home-icon-filter {
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
