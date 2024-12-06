import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [
  {
    category: "pETo",
    routeName: "pEToCT",
    isTypical: true,
    code: "ETO_1",
    images: ["/img/logo.png"],
    name: {
      vi: "Ê tô 1 vi?",
      cn: "Ê tô 1 cn?"
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
    category: "pETo",
    routeName: "pEToCT",
    isTypical: true,
    code: "ETO_2",
    images: ["/img/logo.png"],
    name: {
      vi: "Ê tô 2 vi?",
      cn: "Ê tô 2 cn?"
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

export const eToItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
