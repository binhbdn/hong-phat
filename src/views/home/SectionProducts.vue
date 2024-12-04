<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import {
  categories,
  categoriesTree,
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
import SectionHeader from "@/views/home/SectionHeader.vue";
import ShowAllBtn from "@/views/home/ShowAllBtn.vue";
import DaoPhayNgonList from "@/views/san-pham/dao-phay/ngon/ListItems.vue";
import DaoPhayCauList from "@/views/san-pham/dao-phay/cau/ListItems.vue";
import DaoPhayVatMepList from "@/views/san-pham/dao-phay/vat-mep/ListItems.vue";
import DaoPhayBoGocList from "@/views/san-pham/dao-phay/bo-goc/ListItems.vue";
import DaoPhayRTrongList from "@/views/san-pham/dao-phay/r-trong/ListItems.vue";
import DaoPhayPhaThoList from "@/views/san-pham/dao-phay/pha-tho/ListItems.vue";
import BauKepList from "@/views/san-pham/bau-kep/ListItems.vue";
import ColletList from "@/views/san-pham/collet/ListItems.vue";
import PhuKienBauKepList from "@/views/san-pham/phu-kien-bau-kep/ListItems.vue";
import ManhDaoGCGangList from "@/views/san-pham/manh-dao/gia-cong-gang/ListItems.vue";
import ManhDaoGCSauNhietList from "@/views/san-pham/manh-dao/gia-cong-sau-nhiet/ListItems.vue";
import ManhDaoTienRanhRenList from "@/views/san-pham/manh-dao/tien-ranh-ren/ListItems.vue";
import ManhDaoGCNhomList from "@/views/san-pham/manh-dao/gia-cong-nhom/ListItems.vue";
import ManhDaoGCSatThepInoxList from "@/views/san-pham/manh-dao/gia-cong-sat-thep-inox/ListItems.vue";
import ManhDaoTaoBongNhomList from "@/views/san-pham/manh-dao/tao-bong-nhom/ListItems.vue";
import CanDaoGanManhList from "@/views/san-pham/can-dao-gan-manh/ListItems.vue";
import TaroList from "@/views/san-pham/taro/ListItems.vue";

const categoriesTreeViews = [
  {
    key: "pDaoPhay",
    isChild: false,
    children: [
      {
        key: "pDaoPhayNgon",
        isChild: true,
        listAll: false,
        listComponent: DaoPhayNgonList
      },
      {
        key: "pDaoPhayCau",
        isChild: true,
        listAll: false,
        listComponent: DaoPhayCauList
      },
      {
        key: "pDaoPhayVatMep",
        isChild: true,
        listAll: false,
        listComponent: DaoPhayVatMepList
      },
      {
        key: "pDaoPhayBoGoc",
        isChild: true,
        listAll: false,
        listComponent: DaoPhayBoGocList
      },
      {
        key: "pDaoPhayRTrong",
        isChild: true,
        listAll: true,
        listComponent: DaoPhayRTrongList
      },
      {
        key: "pDaoPhayPhaTho",
        isChild: true,
        listAll: true,
        listComponent: DaoPhayPhaThoList
      }
    ]
  },
  {
    key: "pBauKep",
    isChild: true,
    listAll: false,
    listComponent: BauKepList
  },
  {
    key: "pCollet",
    isChild: true,
    listAll: false,
    listComponent: ColletList
  },
  {
    key: "pPhuKienBauKep",
    isChild: true,
    listAll: false,
    listComponent: PhuKienBauKepList
  },
  {
    key: "pManhDao",
    isChild: false,
    children: [
      {
        key: "pManhDaoGCGang",
        isChild: true,
        listAll: false,
        listComponent: ManhDaoGCGangList
      },
      {
        key: "pManhDaoGCSauNhiet",
        isChild: true,
        listAll: false,
        listComponent: ManhDaoGCSauNhietList
      },
      {
        key: "pManhDaoTienRanhRen",
        isChild: true,
        listAll: false,
        listComponent: ManhDaoTienRanhRenList
      },
      {
        key: "pManhDaoGCNhom",
        isChild: true,
        listAll: false,
        listComponent: ManhDaoGCNhomList
      },
      {
        key: "pManhDaoGCSatThepInox",
        isChild: true,
        listAll: false,
        listComponent: ManhDaoGCSatThepInoxList
      },
      {
        key: "pManhDaoTaoBongNhom",
        isChild: true,
        listAll: true,
        listComponent: ManhDaoTaoBongNhomList
      }
    ]
  },
  {
    key: "pCanDaoGanManh",
    isChild: true,
    listAll: false,
    listComponent: CanDaoGanManhList
  },
  {
    key: "pTaro",
    isChild: true,
    listAll: false,
    listComponent: TaroList
  }
];

let treeCategoriesEl;
let iconFilterEl;

const outsideClickTreeCategoriesListener = ref(null);
const autoExpandMode = ref(true);

const onToggleShowFilter = () => {
  showMsg.value = false;
  showFilter.value = !showFilter.value;
};

const onToggleShowAll = (showAll) => {
  autoExpandMode.value = false;
  resetExpandedKeys();
  resetSelectedKeys();
  setViewExpanded(showAll);
  setTimeout(() => {
    autoExpandMode.value = true;
  }, 500);
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
  categories.forEach((key) => {
    const category = val?.[key];
    view[key].show = view[key].isChild ? Boolean(category?.checked) : Boolean(category);
    if (autoExpandMode.value && view[key].show) view[key].expanded = true;
  });

  view.allCategories.partialChecked = Boolean(val?.allCategories?.partialChecked);
});

watch(
  view,
  () => {
    categories.forEach((key) => {
      if (view[key].expanded) view[key].render = true;
    });
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
    <div v-show="showFilter" class="home-tree-categories rounded-t-xl" @click.stop>
      <div class="flex justify-between items-center mb-2 sm:hidden">
        <div class="font-semibold">
          {{ $t("h.selectCategories") }}
        </div>
        <PrimeButton text icon="pi pi-times" severity="secondary" class="w-6 h-6" @click="onToggleShowFilter()" />
      </div>
      <Tree
        v-model:expandedKeys="expandedKeys"
        v-model:selectionKeys="selectedKeys"
        :value="categoriesTree"
        selectionMode="checkbox"
        class="sm:absolute sm:min-w-[350px] sm:-top-4 sm:-right-2"
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

      <div
        v-for="item in categoriesTreeViews"
        v-show="view[item.key].show"
        :key="item.key"
        class="home-category"
        :class="{ expanded: view[item.key].expanded }"
      >
        <template v-if="item.isChild">
          <SectionHeader v-model:expanded="view[item.key].expanded" :name="item.key" />
          <Component
            :is="item.listComponent"
            v-if="view[item.key].render"
            v-show="view[item.key].expanded"
            :viewDetails="viewDetails"
            :showAll="item.listAll || view[item.key].showAll"
          >
            <template v-if="!item.listAll" #last>
              <ShowAllBtn v-model:showAll="view[item.key].showAll" />
            </template>
          </Component>
        </template>
        <div v-else v-show="view[item.key].show">
          <SectionHeader v-model:expanded="view[item.key].expanded" :name="item.key" />

          <div v-if="view[item.key].render" v-show="view[item.key].expanded">
            <div
              v-for="childItem in item.children"
              v-show="view[childItem.key].show"
              :key="childItem.key"
              class="home-category"
              :class="{ expanded: view[childItem.key].expanded }"
            >
              <SectionHeader v-model:expanded="view[childItem.key].expanded" :name="childItem.key" :subheader="true" />
              <Component
                :is="childItem.listComponent"
                v-if="view[childItem.key].render"
                v-show="view[childItem.key].expanded"
                :viewDetails="viewDetails"
                :showAll="childItem.listAll || view[childItem.key].showAll"
              >
                <template v-if="!childItem.listAll" #last>
                  <ShowAllBtn v-model:showAll="view[childItem.key].showAll" />
                </template>
              </Component>
            </div>
          </div>
        </div>
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
