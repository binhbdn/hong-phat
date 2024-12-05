import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [
  {
    category: "pManhDao",
    routeName: "pManhDaoGCSauNhietCT",
    isTypical: true,
    code: "MD_GCSN_1",
    images: ["/img/logo.png"],
    name: {
      vi: "Mảnh dao gia công sau nhiệt 1 vi?",
      cn: "Mảnh dao gia công sau nhiệt 1 cn?"
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
    routeName: "pManhDaoGCSauNhietCT",
    isTypical: false,
    code: "MD_GCSN_2",
    images: ["/img/logo.png"],
    name: {
      vi: "Mảnh dao gia công sau nhiệt 2 vi?",
      cn: "Mảnh dao gia công sau nhiệt 2 cn?"
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

export const manhDaoGCSauNhietItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);