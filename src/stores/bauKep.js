import { listViewRMB } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const detailsView = [
  ["seri", "model"],
  [{ type: "i18n", value: "material" }, "hardness", "runout", "maxRPM"]
];

const items = [
  {
    category: "pBauKep",
    routeName: "pBauKepCT",
    isTypical: true,
    code: "BK_SUKEN_BT40_ER",
    images: ["/bau_kep_suken/BT40_ER32_100L.webp"],
    name: {
      vi: "Bầu kẹp Suken BT40 loại ER16/20/25/32",
      cn: "刀柄 Suken BT40 ER16/20/25/32"
    },
    prices: {
      current: 793000,
      min: 0,
      max: 0
    },
    description: {
      vi: "Dùng kẹp các loại mũi khoan, mũi doa, dao phay ngón và tapping các chi tiết trên máy phay",
      cn: "用于夹紧铣床上的钻头、铰刀、指铣刀和丝锥零件"
    },
    descriptions: {
      vi: [],
      cn: []
    },
    seri: "BT40",
    specs: "ER16-32",
    brand: "Suken",
    origin: "cn",
    listView: listViewRMB,
    detailsView,
    // extra data
    model: "ER16/20/25/32",
    material: "AlloySteel",
    hardness: "58HRC-60HRC",
    runout: "0.003mm",
    maxRPM: "25.000rpm"
  },
  {
    category: "pBauKep",
    routeName: "pBauKepCT",
    isTypical: false,
    code: "BK_SUKEN_BT50_ER",
    images: ["/bau_kep_suken/BT50_ER40_100L.webp"],
    name: {
      vi: "Bầu kẹp Suken BT50 loại ER16/20/25/32/40",
      cn: "刀柄 Suken BT50 ER16/20/25/32/40"
    },
    prices: {
      current: 0,
      min: 1790000,
      max: 1872000
    },
    description: {
      vi: "Dùng kẹp các loại mũi khoan, mũi doa, dao phay ngón và tapping các chi tiết trên máy phay",
      cn: "用于夹紧铣床上的钻头、铰刀、指铣刀和丝锥零件"
    },
    descriptions: {
      vi: [],
      cn: []
    },
    seri: "BT50",
    specs: "ER16-40",
    brand: "Suken",
    origin: "cn",
    listView: listViewRMB,
    detailsView,
    // extra data
    model: "ER16/20/25/32/40",
    material: "AlloySteel",
    hardness: "58HRC-60HRC",
    runout: "0.003mm",
    maxRPM: "25.000rpm"
  }
];

export default items;

export const bauKepItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
