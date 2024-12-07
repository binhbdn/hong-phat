import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [
  {
    category: "pManhDao",
    routeName: "pManhDaoTienRanhRenCT",
    isTypical: true,
    code: "MD_TRR_1",
    images: ["/img/logo.png"],
    extraImages: null,
    name: {
      vi: "Mảnh dao tiện rãnh ren 1 vi?",
      cn: "Mảnh dao tiện rãnh ren 1 cn?"
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
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoTienRanhRenCT",
    isTypical: false,
    code: "MD_TRR_2",
    images: ["/img/logo.png"],
    extraImages: null,
    name: {
      vi: "Mảnh dao tiện rãnh ren 2 vi?",
      cn: "Mảnh dao tiện rãnh ren 2 cn?"
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
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  }
];

export default items;

export const manhDaoTienRanhRenItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
