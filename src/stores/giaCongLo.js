import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [
  {
    category: "pGiaCongLo",
    routeName: "pGiaCongLoCT",
    isTypical: true,
    code: "GCL_1",
    images: ["/img/logo.png"],
    extraImages: null,
    name: {
      vi: "Gia công lỗ 1 vi?",
      cn: "Gia công lỗ 1 cn?"
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
    category: "pGiaCongLo",
    routeName: "pGiaCongLoCT",
    isTypical: false,
    code: "GCL_2",
    images: ["/img/logo.png"],
    extraImages: null,
    name: {
      vi: "Gia công lỗ 2 vi?",
      cn: "Gia công lỗ 2 cn?"
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

export const giaCongLoItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
