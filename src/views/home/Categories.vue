<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { categoryKeys, showMsg, showFilter, expandedKeys, selectedKeys } from "@/stores/homeCategory";
import Overlay from "@/components/Overlay.vue";

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

onMounted(() => {
  treeCategoriesEl = document.querySelector(".home-tree-categories");
  iconFilterEl = document.querySelector(".home-icon-filter");
  bindOutsideClickTreeCategoriesListener();
});
onBeforeUnmount(unbindOutsideClickTreeCategoriesListener);
</script>

<template>
  <div class="flex flex-col text-gray-700 relative">
    <Message v-if="showMsg" class="home-msg-filter">
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

    <div class="min-h-48 bg-primary bg-opacity-20 mt-1 sm:mt-2">TODO: danh sách sản phẩm</div>
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
</style>
