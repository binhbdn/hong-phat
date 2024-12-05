import { ref, reactive } from "vue";

const categoriesTreeConfig = [
  {
    key: "allCategories",
    parent: "root",
    isChild: false
  },
  {
    key: "pDaoPhay",
    parent: "allCategories",
    isChild: false
  },
  {
    key: "pDaoPhayNgon",
    parent: "pDaoPhay",
    isChild: true
  },
  {
    key: "pDaoPhayCau",
    parent: "pDaoPhay",
    isChild: true
  },
  {
    key: "pDaoPhayVatMep",
    parent: "pDaoPhay",
    isChild: true
  },
  {
    key: "pDaoPhayBoGoc",
    parent: "pDaoPhay",
    isChild: true
  },
  {
    key: "pDaoPhayRTrong",
    parent: "pDaoPhay",
    isChild: true
  },
  {
    key: "pDaoPhayPhaTho",
    parent: "pDaoPhay",
    isChild: true
  },
  {
    key: "pBauKep",
    parent: "allCategories",
    isChild: true
  },
  {
    key: "pCollet",
    parent: "allCategories",
    isChild: true
  },
  {
    key: "pPhuKienBauKep",
    parent: "allCategories",
    isChild: true
  },
  {
    key: "pManhDao",
    parent: "allCategories",
    isChild: false
  },
  {
    key: "pManhDaoGCGang",
    parent: "pManhDao",
    isChild: true
  },
  {
    key: "pManhDaoGCSauNhiet",
    parent: "pManhDao",
    isChild: true
  },
  {
    key: "pManhDaoTienRanhRen",
    parent: "pManhDao",
    isChild: true
  },
  {
    key: "pManhDaoGCNhom",
    parent: "pManhDao",
    isChild: true
  },
  {
    key: "pManhDaoGCSatThepInox",
    parent: "pManhDao",
    isChild: true
  },
  {
    key: "pManhDaoTaoBongNhom",
    parent: "pManhDao",
    isChild: true
  },
  {
    key: "pCanDaoGanManh",
    parent: "allCategories",
    isChild: true
  },
  {
    key: "pTaro",
    parent: "allCategories",
    isChild: true
  },
  {
    key: "pDuongKiemRen",
    parent: "allCategories",
    isChild: true
  }
];

export const categories = categoriesTreeConfig.map((item) => item.key);

/*
export const parentCategories = categoriesTreeConfig.filter((item) => !item.isChild).map((item) => item.key);

export const childCategories = categoriesTreeConfig.filter((item) => item.isChild).map((item) => item.key);
*/

const getCategoriesTree = () => {
  const tree = [];
  const map = {};

  categoriesTreeConfig.forEach((item) => {
    map[item.key] = item.isChild ? { key: item.key } : { key: item.key, children: [] };
  });

  categoriesTreeConfig.forEach((item) => {
    if (item.parent === "root") {
      tree.push(map[item.key]);
    } else {
      const parentNode = map[item.parent];
      if (parentNode && parentNode.children) {
        parentNode.children.push(map[item.key]);
      }
    }
  });

  return tree;
};

export const categoriesTree = getCategoriesTree();

export const viewDetails = ref(false);

export const showMsg = ref(true);

export const showFilter = ref(false);

const defaultExpandedKeys = {
  allCategories: true
};

export const expandedKeys = ref(defaultExpandedKeys);

export const resetExpandedKeys = () => (expandedKeys.value = defaultExpandedKeys);

const getDefaultSelectedKeys = () => {
  const obj = {};
  categories.forEach((key) => {
    obj[key] = {
      checked: true,
      partialChecked: false
    };
  });

  return obj;
};

const defaultSelectedKeys = getDefaultSelectedKeys();

export const selectedKeys = ref(defaultSelectedKeys);

export const resetSelectedKeys = () => (selectedKeys.value = defaultSelectedKeys);

const getDefaultView = () => {
  const obj = {};

  categoriesTreeConfig.forEach((item) => {
    obj[item.key] = {
      isChild: item.isChild,
      show: true,
      expanded: false,
      render: false,
      showAll: false
    };
  });

  obj.allCategories.partialChecked = false;

  return obj;
};

const defaultView = getDefaultView();

export const view = reactive(defaultView);

export const setViewExpanded = (value) => Object.keys(view).forEach((key) => (view[key].expanded = value));
