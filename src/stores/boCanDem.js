import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [
  {
    category: "pBoCanDem",
    routeName: "pBoCanDemCT",
    isTypical: true,
    code: "BCD_1",
    images: ["/img/logo.png"],
    extraImages: null,
    name: {
      vi: "Bộ căn đệm 1 vi?",
      cn: "Bộ căn đệm 1 cn?"
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
    listView: listViewCBO
    // extra data
  },
  {
    category: "pBoCanDem",
    routeName: "pBoCanDemCT",
    isTypical: false,
    code: "BCD_2",
    images: ["/img/logo.png"],
    extraImages: null,
    name: {
      vi: "Bộ căn đệm 2 vi?",
      cn: "Bộ căn đệm 2 cn?"
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
    listView: listViewCBO
    // extra data
  }
];

export default items;

export const boCanDemItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
