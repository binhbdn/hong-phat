import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [
  {
    category: "pGotBavia",
    routeName: "pGotBaviaCT",
    isTypical: true,
    code: "GB_1",
    images: ["/img/logo.png"],
    extraImages: null,
    name: {
      vi: "Gọt bavia 1 vi?",
      cn: "Gọt bavia 1 cn?"
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
    category: "pGotBavia",
    routeName: "pGotBaviaCT",
    isTypical: true,
    code: "GB_2",
    images: ["/img/logo.png"],
    extraImages: null,
    name: {
      vi: "Gọt bavia 2 vi?",
      cn: "Gọt bavia 2 cn?"
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

export const gotBaviaItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
