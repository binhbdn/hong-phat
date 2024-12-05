import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [
  {
    category: "pDoLuong",
    routeName: "pDoLuongItalyCT",
    isTypical: true,
    code: "DCDL_1",
    images: ["/img/logo.png"],
    name: {
      vi: "Dụng cụ đo lường Dasqua 1 vi?",
      cn: "Dụng cụ đo lường Dasqua 1 cn?"
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
    category: "pDoLuong",
    routeName: "pDoLuongItalyCT",
    isTypical: false,
    code: "DCDL_2",
    images: ["/img/logo.png"],
    name: {
      vi: "Dụng cụ đo lường Dasqua 2 vi?",
      cn: "Dụng cụ đo lường Dasqua 2 cn?"
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

export const doLuongItalyItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
