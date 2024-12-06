import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [
  {
    category: "pDuongKiemRen",
    routeName: "pDuongKiemRenCT",
    isTypical: true,
    code: "DKR_1",
    images: ["/img/logo.png"],
    name: {
      vi: "Dưỡng kiểm ren ngoài hệ met",
      cn: "外螺纹量规（公制）"
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
    category: "pDuongKiemRen",
    routeName: "pDuongKiemRenCT",
    isTypical: true,
    code: "DKR_2",
    images: ["/img/logo.png"],
    name: {
      vi: "Dưỡng kiểm ren trong",
      cn: "内螺纹量规"
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

export const duongKiemRenItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
