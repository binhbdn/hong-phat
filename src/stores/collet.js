import { listViewAiDB } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const detailsView = [["accuracy", "colletInnerDiameter"], [{ type: "tag", value: "specsList" }]];

const items = [
  {
    category: "pCollet",
    routeName: "pColletCT",
    isTypical: true,
    code: "ER11",
    images: [
      "/collet/ER11/vt_1.webp",
      "/collet/ER11/vt_spec.webp",
      "/collet/ER11/vt_spec_1.webp",
      "/collet/ER11/vt_spec_2.webp",
      "/collet/ER11/vt_2.webp",
      "/collet/ER11/vt_3.webp"
    ],
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
    specs: "D1-D7",
    brand: "KON",
    origin: ["cn"],
    listView: listViewAiDB,
    // extra data
    detailsView,
    accuracy: "0.005/0.008mm",
    innerDiameter: "D1-D7",
    colletInnerDiameter: "D1-D7",
    specsList: [
      "ER11-1±0.008mm",
      "ER11-1.5±0.008mm",
      "ER11-2±0.008mm",
      "ER11-2.5±0.008mm",
      "ER11-3±0.005mm",
      "ER11-3±0.008mm",
      "ER11-3.175±0.005mm",
      "ER11-3.175±0.008mm",
      "ER11-3.5±0.005mm",
      "ER11-3.5±0.008mm",
      "ER11-4±0.005mm",
      "ER11-4±0.008mm",
      "ER11-4.5±0.005mm",
      "ER11-4.5±0.008mm",
      "ER11-5±0.005mm",
      "ER11-5±0.008mm",
      "ER11-5.5±0.005mm",
      "ER11-5.5±0.008mm",
      "ER11-6±0.005mm",
      "ER11-6±0.008mm",
      "ER11-6.5±0.005mm",
      "ER11-6.5±0.008mm",
      "ER11-7±0.005mm",
      "ER11-7±0.008mm"
    ]
  },
  {
    category: "pCollet",
    routeName: "pColletCT",
    isTypical: false,
    code: "ER16",
    images: [
      "/collet/ER16/vt_1.webp",
      "/collet/ER16/vt_spec.webp",
      "/collet/ER16/vt_spec_1.webp",
      "/collet/ER16/vt_spec_2.webp",
      "/collet/ER16/vt_2.webp",
      "/collet/ER16/vt_3.webp"
    ],
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
    specs: "D1-D10",
    brand: "KON",
    origin: ["cn"],
    listView: listViewAiDB,
    // extra data
    detailsView,
    accuracy: "0.005/0.008mm",
    innerDiameter: "D1-D10",
    colletInnerDiameter: "D1-D10",
    specsList: [
      "ER16-1±0.008mm",
      "ER16-1.5±0.008mm",
      "ER16-2±0.008mm",
      "ER16-2.5±0.008mm",
      "ER16-3±0.005mm",
      "ER16-3±0.008mm",
      "ER16-3.175±0.005mm",
      "ER16-3.175±0.008mm",
      "ER16-3.5±0.005mm",
      "ER16-3.5±0.008mm",
      "ER16-4±0.005mm",
      "ER16-4±0.008mm",
      "ER16-5±0.005mm",
      "ER16-5±0.008mm",
      "ER16-6±0.005mm",
      "ER16-6±0.008mm",
      "ER16-7±0.005mm",
      "ER16-7±0.008mm",
      "ER16-8±0.005mm",
      "ER16-8±0.008mm",
      "ER16-9±0.005mm",
      "ER16-9±0.008mm",
      "ER16-10±0.005mm",
      "ER16-10±0.008mm"
    ]
  }
];

export default items;

export const colletItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
