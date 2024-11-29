import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [
  {
    category: "pCollet",
    routeName: "pColletCT",
    isTypical: true,
    code: "CL_1",
    hardness: null,
    name: {
      vi: "Name vi",
      cn: "Name cn"
    },
    images: ["/img/logo.png"],
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
    material: null,
    brand: "brand",
    seri: "seri",
    specs: "specs",
    runout: "runout",
    maxRPM: "maxRPM"
  },
  {
    category: "pCollet",
    routeName: "pColletCT",
    isTypical: false,
    code: "CL_2",
    hardness: null,
    name: {
      vi: "Name vi",
      cn: "Name cn"
    },
    images: ["/img/logo.png"],
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
    material: null,
    brand: "brand",
    seri: "seri",
    specs: "specs",
    runout: "runout",
    maxRPM: "maxRPM"
  }
];

export default items;

export const colletItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
