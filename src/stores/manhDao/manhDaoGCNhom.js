import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [
  {
    category: "pManhDao",
    routeName: "pManhDaoGCNhomCT",
    isTypical: true,
    code: "MD_GCN_1",
    images: ["/img/logo.png"],
    name: {
      vi: "Mảnh dao gia công nhôm 1 vi?",
      cn: "Mảnh dao gia công nhôm 1 cn?"
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
    category: "pManhDao",
    routeName: "pManhDaoGCNhomCT",
    isTypical: false,
    code: "MD_GCN_2",
    images: ["/img/logo.png"],
    name: {
      vi: "Mảnh dao gia công nhôm 2 vi?",
      cn: "Mảnh dao gia công nhôm 2 cn?"
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

export const manhDaoGCNhomItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
