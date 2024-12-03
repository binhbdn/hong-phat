import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [
  {
    category: "pManhDao",
    routeName: "pManhDaoTaoBongNhomCT",
    isTypical: true,
    code: "MD_TBN_1",
    images: ["/img/logo.png"],
    name: {
      vi: "Mảnh dao tạo bóng nhôm 1 vi?",
      cn: "Mảnh dao tạo bóng nhôm 1 cn?"
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

export const manhDaoTaoBongNhomItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
