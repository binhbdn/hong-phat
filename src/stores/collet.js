import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [
  {
    category: "pCollet",
    routeName: "pColletCT",
    isTypical: true,
    code: "CL_1",
    images: ["/img/logo.png"],
    name: {
      vi: "Name vi",
      cn: "Name cn"
    },
    prices: {
      current: null,
      min: 0,
      max: 0
    },
    description: {
      vi: "Description vi",
      cn: "Description cn"
    },
    descriptions: {
      vi: [],
      cn: []
    },
    seri: "seri",
    specs: "specs",
    brand: "brand",
    origin: null,
    // extra data
    runout: "runout",
    maxRPM: "maxRPM"
  },
  {
    category: "pCollet",
    routeName: "pColletCT",
    isTypical: true,
    code: "CL_2",
    images: ["/img/logo.png"],
    name: {
      vi: "Name vi",
      cn: "Name cn"
    },
    prices: {
      current: null,
      min: 0,
      max: 0
    },
    description: {
      vi: "Description vi",
      cn: "Description cn"
    },
    descriptions: {
      vi: [],
      cn: []
    },
    seri: "seri",
    specs: "specs",
    brand: "brand",
    origin: null,
    // extra data
    runout: "runout",
    maxRPM: "maxRPM"
  }
];

export default items;

export const colletItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
