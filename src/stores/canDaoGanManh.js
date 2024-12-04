import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [
  {
    category: "pCanDaoGanManh",
    routeName: "pCanDaoGanManhCT",
    isTypical: true,
    code: "CDGM__1",
    images: ["/img/logo.png"],
    name: {
      vi: "Cán dao gắn mảnh 1 vi?",
      cn: "Cán dao gắn mảnh 1 cn?"
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
    descriptions: {
      vi: [],
      cn: []
    },
    seri: "seri?",
    specs: "specs?",
    brand: "brand?",
    origin: "cn",
    listView: listViewCBO
    // extra data
  },
  {
    category: "pCanDaoGanManh",
    routeName: "pCanDaoGanManhCT",
    isTypical: false,
    code: "CDGM__2",
    images: ["/img/logo.png"],
    name: {
      vi: "Cán dao gắn mảnh 2 vi?",
      cn: "Cán dao gắn mảnh 2 cn?"
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
    descriptions: {
      vi: [],
      cn: []
    },
    seri: "seri?",
    specs: "specs?",
    brand: "brand?",
    origin: "cn",
    listView: listViewCBO
    // extra data
  }
];

export default items;

export const canDaoGanManhItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
