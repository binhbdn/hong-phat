import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [
  {
    category: "pDauKepLapChuoiCon",
    routeName: "pDauKepLapChuoiConCT",
    isTypical: true,
    code: "DKLCC_1",
    images: ["/img/logo.png"],
    extraImages: null,
    name: {
      vi: "Đầu kẹp lắp chuôi côn 1 vi?",
      cn: "Đầu kẹp lắp chuôi côn 1 cn?"
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
    category: "pDauKepLapChuoiCon",
    routeName: "pDauKepLapChuoiConCT",
    isTypical: true,
    code: "DKLCC_2",
    images: ["/img/logo.png"],
    extraImages: null,
    name: {
      vi: "Đầu kẹp lắp chuôi côn 2 vi?",
      cn: "Đầu kẹp lắp chuôi côn 2 cn?"
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

export const dauKepLapChuoiConItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
