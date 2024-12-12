import { listViewRMB } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [
  {
    category: "pCollet",
    routeName: "pColletCT",
    isTypical: true,
    code: "ER11",
    images: ["/collet/ER11/vt_1.webp", "/collet/ER11/vt_spec.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "",
        data: ["/collet/ER11/vt_spec.webp"]
      }
    ],
    name: {
      vi: "Collet ER11 - Đầu kẹp dao máy CNC",
      cn: "ER11筒夹 - 数控机床刀具夹头"
    },
    prices: {
      current: 0,
      min: 58000,
      max: 113000
    },
    description: {
      vi: "Dùng cho đầu kẹp CNC ER11",
      cn: "用于ER11数控夹头"
    },
    descriptions: null,
    seri: "ER11",
    specs: "D2-D7",
    brand: "KON",
    origin: ["cn"],
    listView: listViewRMB,
    // extra data
    runout: "0.005mm/0.008mm",
    maxRPM: ""
  },
  {
    category: "pCollet",
    routeName: "pColletCT",
    isTypical: false,
    code: "ER16",
    images: ["/collet/ER11/vt_1.webp", "/collet/ER16/vt_spec.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "",
        data: ["/collet/ER16/vt_spec.webp"]
      }
    ],
    name: {
      vi: "Collet ER16 - Đầu kẹp dao máy CNC",
      cn: "ER16筒夹 - 数控机床刀具夹头"
    },
    prices: {
      current: 0,
      min: 58000,
      max: 113000
    },
    description: {
      vi: "Dùng cho đầu kẹp CNC ER16",
      cn: "用于ER16数控夹头"
    },
    descriptions: null,
    seri: "ER16",
    specs: "D3-D10",
    brand: "KON",
    origin: ["cn"],
    listView: listViewRMB,
    // extra data
    runout: "0.005mm/0.008mm",
    maxRPM: ""
  }
];

export default items;

export const colletItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
