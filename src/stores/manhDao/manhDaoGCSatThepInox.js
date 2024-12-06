import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [
  {
    category: "pManhDao",
    routeName: "pManhDaoGCSatThepInoxCT",
    isTypical: true,
    code: "MD_GCSTI_1",
    images: ["/img/logo.png"],
    extraImages: null,
    name: {
      vi: "Mảnh dao gia công sắt thép inox 1 vi?",
      cn: "Mảnh dao gia công sắt thép inox 1 cn?"
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
    category: "pManhDao",
    routeName: "pManhDaoGCSatThepInoxCT",
    isTypical: false,
    code: "MD_GCSTI_2",
    images: ["/img/logo.png"],
    extraImages: null,
    name: {
      vi: "Mảnh dao gia công sắt thép inox 2 vi?",
      cn: "Mảnh dao gia công sắt thép inox 2 cn?"
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

export const manhDaoGCSatThepInoxItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
