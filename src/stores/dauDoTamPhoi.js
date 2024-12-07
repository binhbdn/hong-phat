import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [
  {
    category: "pDauDoTamPhoi",
    routeName: "pDauDoTamPhoiCT",
    isTypical: true,
    code: "DDTP_1",
    images: ["/img/logo.png"],
    extraImages: null,
    name: {
      vi: "Đầu dò tâm phôi 1 vi?",
      cn: "Đầu dò tâm phôi 1 cn?"
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
    category: "pDauDoTamPhoi",
    routeName: "pDauDoTamPhoiCT",
    isTypical: false,
    code: "DDTP_2",
    images: ["/img/logo.png"],
    extraImages: null,
    name: {
      vi: "Đầu dò tâm phôi 2 vi?",
      cn: "Đầu dò tâm phôi 2 cn?"
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

export const dauDoTamPhoiItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
