import { ref } from "vue";

export const categoryKeys = [
  {
    key: "allCategories",
    children: [
      {
        key: "pDaoPhay",
        children: [
          { key: "pDaoPhayCau" },
          { key: "pDaoPhayBoGoc" },
          { key: "pDaoPhayNgon" },
          { key: "pDaoPhayPhaTho" },
          { key: "pDaoPhayRTrong" },
          { key: "pDaoPhayVatMep" }
        ]
      },
      { key: "pBauKep" }
    ]
  }
];

export const showMsg = ref(true);

export const showFilter = ref(false);

const defaultExpandedKeys = {
  allCategories: true,
  pDaoPhay: true
};

export const expandedKeys = ref(defaultExpandedKeys);

const defaultSelectedKeys = {
  allCategories: {
    checked: true,
    partialChecked: false
  },
  pDaoPhay: {
    checked: true,
    partialChecked: false
  },
  pDaoPhayCau: {
    checked: true,
    partialChecked: false
  },
  pDaoPhayBoGoc: {
    checked: true,
    partialChecked: false
  },
  pDaoPhayNgon: {
    checked: true,
    partialChecked: false
  },
  pDaoPhayPhaTho: {
    checked: true,
    partialChecked: false
  },
  pDaoPhayRTrong: {
    checked: true,
    partialChecked: false
  },
  pDaoPhayVatMep: {
    checked: true,
    partialChecked: false
  },
  pBauKep: {
    checked: true,
    partialChecked: false
  }
};

export const selectedKeys = ref(defaultSelectedKeys);
