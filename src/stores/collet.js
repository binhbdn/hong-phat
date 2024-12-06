import { listViewRMB } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [
  {
    category: "pCollet",
    routeName: "pColletCT",
    isTypical: true,
    code: "CL_1",
    images: ["/img/logo.png"],
    extraImages: null,
    name: {
      vi: "Collet 1 vi?",
      cn: "Collet 1 cn?"
    },
    prices: {
      current: null,
      min: 0,
      max: 0
    },
    description: {
      vi: "Description collet vi?",
      cn: "Description collet cn?"
    },
    descriptions: null,
    seri: "seri?",
    specs: "specs?",
    brand: "brand?",
    origin: "cn",
    listView: listViewRMB,
    // extra data
    runout: "mm?",
    maxRPM: "rpm?"
  },
  {
    category: "pCollet",
    routeName: "pColletCT",
    isTypical: false,
    code: "CL_2",
    images: ["/img/logo.png"],
    extraImages: null,
    name: {
      vi: "Collet 2 vi?",
      cn: "Collet 2 cn?"
    },
    prices: {
      current: null,
      min: 0,
      max: 0
    },
    description: {
      vi: "Description collet vi?",
      cn: "Description collet cn?"
    },
    descriptions: null,
    seri: "seri?",
    specs: "specs?",
    brand: "brand?",
    origin: "cn",
    listView: listViewRMB,
    // extra data
    runout: "mm?",
    maxRPM: "rpm?"
  }
];

export default items;

export const colletItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
