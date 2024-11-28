import { ref, reactive } from "vue";

export const categoryKeys = [
  {
    key: "allCategories",
    children: [
      {
        key: "pDaoPhay",
        children: [
          { key: "pDaoPhayNgon" },
          { key: "pDaoPhayCau" },
          { key: "pDaoPhayVatMep" },
          { key: "pDaoPhayBoGoc" },
          { key: "pDaoPhayRTrong" },
          { key: "pDaoPhayPhaTho" }
        ]
      },
      { key: "pBauKep" }
    ]
  }
];

export const viewDetails = ref(false);

export const showMsg = ref(true);

export const showFilter = ref(false);

const defaultExpandedKeys = {
  allCategories: true,
  pDaoPhay: true
};

export const expandedKeys = ref(defaultExpandedKeys);

export const resetExpandedKeys = () => (expandedKeys.value = defaultExpandedKeys);

const defaultSelectedKeys = {
  allCategories: {
    checked: true,
    partialChecked: false
  },
  pDaoPhay: {
    checked: true,
    partialChecked: false
  },
  pDaoPhayNgon: {
    checked: true,
    partialChecked: false
  },
  pDaoPhayCau: {
    checked: true,
    partialChecked: false
  },
  pDaoPhayVatMep: {
    checked: true,
    partialChecked: false
  },
  pDaoPhayBoGoc: {
    checked: true,
    partialChecked: false
  },
  pDaoPhayRTrong: {
    checked: true,
    partialChecked: false
  },
  pDaoPhayPhaTho: {
    checked: true,
    partialChecked: false
  },
  pBauKep: {
    checked: true,
    partialChecked: false
  }
};

export const selectedKeys = ref(defaultSelectedKeys);

export const resetSelectedKeys = () => (selectedKeys.value = defaultSelectedKeys);

export const view = reactive({
  allCategories: {
    show: true,
    partialChecked: false,
    expanded: true
  },
  pDaoPhayNgon: {
    show: true,
    expanded: false,
    render: false,
    showAll: false
  },
  pDaoPhayCau: {
    show: true,
    expanded: false,
    render: false,
    showAll: false
  },
  pDaoPhayVatMep: {
    show: true,
    expanded: false,
    render: false,
    showAll: false
  },
  pDaoPhayBoGoc: {
    show: true,
    expanded: false,
    render: false,
    showAll: false
  },
  pDaoPhayRTrong: {
    show: true,
    expanded: false,
    render: false,
    showAll: false
  },
  pDaoPhayPhaTho: {
    show: true,
    expanded: false,
    render: false,
    showAll: false
  },
  pBauKep: {
    show: true,
    expanded: false,
    render: false,
    showAll: false
  }
});

export const setViewExpanded = (value) => Object.keys(view).forEach((key) => (view[key].expanded = value));
