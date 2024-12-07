import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [
  {
    category: "pManhDao",
    routeName: "pManhDaoGCGangCT",
    isTypical: true,
    code: "MD_GCG_1",
    images: ["/img/logo.png"],
    extraImages: null,
    name: {
      vi: "Mảnh dao gia công gang 1 vi?",
      cn: "Mảnh dao gia công gang 1 cn?"
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
    category: "pManhDao",
    routeName: "pManhDaoGCGangCT",
    isTypical: false,
    code: "MD_GCG_2",
    images: ["/img/logo.png"],
    extraImages: null,
    name: {
      vi: "Mảnh dao gia công gang 2 vi?",
      cn: "Mảnh dao gia công gang 2 cn?"
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

export const manhDaoGCGangItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
