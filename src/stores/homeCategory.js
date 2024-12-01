import { ref, reactive } from "vue";

const categoriesTreeConfig = [
  {
    key: "allCategories",
    isChild: false
  },
  {
    key: "pDaoPhay",
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
    isChild: true
  },
  {
    key: "pCollet",
    isChild: true
  }
];

const categories = categoriesTreeConfig.map((item) => item.key);

export const childCategories = categoriesTreeConfig.filter((item) => item.isChild).map((item) => item.key);

export const categoriesTree = [
  {
    key: "allCategories",
    children: [
      {
        key: "pDaoPhay",
        children: categoriesTreeConfig.filter((item) => item.parent === "pDaoPhay").map((item) => ({ key: item.key }))
      },
      { key: "pBauKep" },
      { key: "pCollet" }
    ]
  }
];

export const viewDetails = ref(false);

export const showMsg = ref(true);

export const showFilter = ref(false);

const defaultExpandedKeys = {
  allCategories: true
  // pDaoPhay: true
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
  obj.allCategories = {
    show: true,
    partialChecked: false,
    expanded: true
  };
  childCategories.forEach((key) => {
    obj[key] = {
      show: true,
      expanded: false,
      render: false,
      showAll: false
    };
  });

  return obj;
};

const defaultView = getDefaultView();

export const view = reactive(defaultView);

export const setViewExpanded = (value) => Object.keys(view).forEach((key) => (view[key].expanded = value));
