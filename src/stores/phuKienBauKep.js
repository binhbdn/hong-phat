import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [
  {
    category: "pPhuKienBauKep",
    routeName: "pPhuKienBauKepCT",
    isTypical: true,
    code: "PKBK_1",
    images: ["/img/logo.png"],
    extraImages: null,
    name: {
      vi: "Phụ kiện 1 vi?",
      cn: "Phụ kiện 1 cn?"
    },
    prices: {
      current: null,
      min: 0,
      max: 0
    },
    description: {
      vi: "Description vi?",
      cn: "Description cn?"
    },
    descriptions: null,
    seri: "seri?",
    specs: "specs?",
    brand: "brand?",
    origin: "cn",
    listView: listViewCBO,
    detailsView: null
    // extra data
  },
  {
    category: "pPhuKienBauKep",
    routeName: "pPhuKienBauKepCT",
    isTypical: false,
    code: "PKBK_2",
    images: ["/img/logo.png"],
    extraImages: null,
    name: {
      vi: "Phụ kiện 2 vi?",
      cn: "Phụ kiện 2 cn?"
    },
    prices: {
      current: null,
      min: 0,
      max: 0
    },
    description: {
      vi: "Description vi?",
      cn: "Description cn?"
    },
    descriptions: null,
    seri: "seri?",
    specs: "specs?",
    brand: "brand?",
    origin: "cn",
    listView: listViewCBO,
    detailsView: null
    // extra data
  }
];

export default items;

export const phuKienBauKepItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
