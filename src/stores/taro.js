import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [
  {
    category: "pTaro",
    routeName: "pTaroCT",
    isTypical: true,
    code: "TARO_1",
    images: ["/img/logo.png"],
    extraImages: null,
    name: {
      vi: "Taro 1 vi?",
      cn: "Taro 1 cn?"
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
    category: "pTaro",
    routeName: "pTaroCT",
    isTypical: false,
    code: "TARO_2",
    images: ["/img/logo.png"],
    extraImages: null,
    name: {
      vi: "Taro 2 vi?",
      cn: "Taro 2 cn?"
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

export const taroItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
